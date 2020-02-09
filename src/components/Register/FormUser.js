import React, { useEffect, useState } from 'react';

import './FormUser.scss';

const FormUser = () => {

  const [id, setId] = useState(0);
  const [username, setUsername] = useState();
  const [name, setName] = useState();

  const [user, setUser] = useState({
    user: {
      id,
      address: {
        city: ''
      },
      email: '',
      name: '',
      username: '',
      rideInGroup: {
        id,
        often: ''
      },
      weekDays: {
        id,
        days: []
      },
      posts: [],
      albums: [],
      photos: []
    },
    onFocus: undefined
  });



  useEffect(() => {
    setId(Math.floor(Math.random() * 500));
  }, []);

  // const handleSave = event => {
  //   console.log(user);
  // }

  const handleChangeName = event => {

    const newName = event.target.value;
    setName(newName);

    setUser({ ...user, name: newName });

  }

  const handleChangeUsername = event => {
    const newUsername = event.target.value;
    setUsername(newUsername);

    setUser({ ...user, username: newUsername })
  }

  return (
    <div className="register-area">
      <div className="header">
        <span className="title">Registration</span>
        <hr></hr>
      </div>
      <div className="header">

      </div>
      <div className="form-area">
        <form>
          <div className="form-field">
            <span>Username</span>
            <input type="text" value={username} name="username" className="text-input" onChange={(e) => handleChangeUsername(e)} required />

          </div>
          <div className="form-field">
            <span>City</span>
            <input type="text" name="address.city" className="text-input" />
          </div>
          <div className="form-field">
            <span>Name</span>
            <input type="text" value={name} name="name" className="text-input" onChange={(e) => handleChangeName(e)} required />
          </div>
          <div className="form-field">
            <span>Ride in group?</span>
          </div>
          <div className="form-field">
            <span>Email</span>
            <input type="email" name="email" className="text-input" onChange={() => console.log('onChange')} />
          </div>
          <div className="form-field">
            <span>Days of the week</span>
            <div className="checkbox-group"></div>
          </div>
          <div>
            <button type="submit" className="btn save" onClick={() => console.log('salvou')}>Save</button>
            <button type="button" className="btn cancel" onClick={() => console.log('cancel')}>Discard</button>
          </div>
        </form>
      </div >
    </div>

  )
}

export default FormUser;