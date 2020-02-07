import React, { useState } from 'react';
import 'bulma';
import 'bulma/css/bulma.css'

import './UserInfo.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const UserInfo = ({ user, index, remove }) => {
  const { id, username, name, email, address, rideInGroup, weekDays, posts, albums } = user;

  const [toRemove, setToRemove] = useState(undefined);


  const numberOfPhotos = user => {
    if (user.albums.length > 0) {
      return user.albums.map(album => album.photos.length).reduce((acum, current) => acum += current)
    }
    return 0;
  }

  const trashIsVisible = index => {
    setToRemove(index);
  }

  const trashNotVisible = () => {
    setToRemove(undefined);
  }

  const isTrashVisible = (index) => (
    (toRemove === index) &&
    <button onClick={() => handleRemove(index)}>
      <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
    </button>
  )

  const handleRemove = (index) => {
    if (toRemove === index) {
      if (window.confirm('Are you sure you wish to delete this item?')) {
        remove(index);
      }
    }
  }

  return (
    <tr className="tr-row" key={id} onMouseEnter={() => trashIsVisible(index)} onMouseLeave={() => trashNotVisible()}>
      <td>{username}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address && address.city}</td>
      <td>{rideInGroup && rideInGroup.often}</td>
      <td>{weekDays && weekDays.days}</td>
      <td>{posts && posts.length}</td>
      <td>{albums && albums.length}</td>
      <td>{numberOfPhotos(user)}</td>
      <td>{isTrashVisible(index)}</td>
    </tr>
  )
};

export default UserInfo;