import React, { useState } from 'react';
import 'bulma';
import 'bulma/css/bulma.css'

const UserInfo = ({ user, index }) => {
  const [toRemove, setToRemove] = useState(undefined);
  const { id, username, name, email, address, rideInGroup, weekDays, posts, albums } = user;

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

  console.log(toRemove);
  return (
    <tr key={id} onMouseEnter={() => trashIsVisible(index)} onMouseLeave={() => trashNotVisible()}>
      <th>{username}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address && address.city}</td>
      <td>{rideInGroup && rideInGroup.often}</td>
      <td>{weekDays && weekDays.days}</td>
      <td>{posts && posts.length}</td>
      <td>{albums && albums.length}</td>
      <td>{numberOfPhotos(user)}</td>
    </tr>
  )
};

export default UserInfo;