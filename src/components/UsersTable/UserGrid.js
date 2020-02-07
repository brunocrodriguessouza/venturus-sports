import React from 'react';
import 'bulma';
import 'bulma/css/bulma.css'

import UserInfo from './UserInfo';

const UserGrid = ({ users, remove }) => {

  const buildHeaderUser = () => (
    <thead>
      <tr>
        <th><abbr title="Username">Username</abbr></th>
        <th><abbr title="Name">Name</abbr></th>
        <th><abbr title="E-mail">E-mail</abbr></th>
        <th><abbr title="City">City</abbr></th>
        <th><abbr title="Ride in Group">Ride in Group</abbr></th>
        <th><abbr title="Day of week">Day of week</abbr></th>
        <th><abbr title="Posts">Posts</abbr></th>
        <th><abbr title="Albuns">Albuns</abbr></th>
        <th><abbr title="Photos">Photos</abbr></th>
        <th></th>
      </tr>
    </thead>
  );

  return (
    <table className="table">
      {
        buildHeaderUser()
      }
      <tbody>
        {
          (users) && users.map((user, index) => (
            user.id &&
            <UserInfo
              key={user.id}
              user={user}
              index={index}
              remove={remove}
            />
          ))
        }
      </tbody>
    </table>
  )
};

export default UserGrid;