import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import api from '../../services/baseService';

import Navbar from '../Navbar/Navbar';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Banner from '../Banner/Banner';
import UserGrid from './UserGrid';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.all([
      api.loadUsers(),
      api.loadPosts(),
      api.loadAlbums(),
      api.loadPhotos(),
      api.loadRideInGroup(),
      api.loadWeekDays()
    ])
      .then(
        axios.spread((reqUsers, reqPosts, reqAlbuns, reqPhotos, reqRideInGroup, reqWeekDay) => {

          let users = reqUsers.data;

          users.forEach(user => {
            user.posts = reqPosts.data.filter(post => post.userId === user.id);
            user.albums = reqAlbuns.data.filter(album => album.userId === user.id);

            user.albums.forEach(album => {
              album.photos = reqPhotos.data.filter(photo => photo.albumId === album.id);
            });

            user.rideInGroup = reqRideInGroup.data.find(ride => ride.userId === user.id);

            user.weekDays = reqWeekDay.data.find(days => days.userId === user.id);
          });

          users = [...users];
          setUsers(users);
        })
      );
  }, []);


  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <Banner />
      <UserGrid users={users} />
    </div>
  )
}


UsersTable.propTypes = {
  users: PropTypes.array,
}

UsersTable.defaultProps = {
  users: [],
}

export default memo(UsersTable);

