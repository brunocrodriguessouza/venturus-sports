import React, { useEffect, useState } from 'react';

const FormUser = () => {

  // const [id, setId] = useState(0)
  // const [user, setUser] = useState({
  //   user: {
  //     id,
  //     address: {
  //       city: ''
  //     },
  //     email: '',
  //     name: '',
  //     username: '',
  //     rideInGroup: {
  //       id,
  //       often: ''
  //     },
  //     weekDays: {
  //       id,
  //       days: []
  //     },
  //     posts: [],
  //     albums: [],
  //     photos: []
  //   },
  //   onFocus: undefined
  // })

  // useEffect(() => {
  // setId(Math.floor(Math.random() * 500));
  // }, []);



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
            <input type="text" value={''} name="username" className="text-input" required />

          </div>
          <div className="form-field">
            <div className="title">
              <span>City</span>
            </div>
            <input type="text" name="address.city" className="text-input" onChange={() => console.log('onChange')}
            />
          </div>
          <div className="form-field">
            <span>Name</span>
            <input type="text" value={''} name="name" className="text-input" required />
          </div>
          <div className="form-field">
            <span>Ride in group?</span>
            <div className="radio-group">
              <input type="radio" label="Always" value="Always" ></input>
              <input type="radio" label="Sometimes" value="Sometimes" ></input>
              <input type="radio" label="Never" value="Never" ></input>
            </div>
          </div>
          <div className="form-field">
            <span>Email</span>
            <input type="email" name="email" className="text-input" required onChange={() => console.log('onChange')} />
          </div>
          <div className="form-field">
            <span>Days of the week</span>
            <div className="checkbox-group"></div>
          </div>
          <div>
            <button type="submit" className="btn save" onClick={() => console.log('save')}>Save</button>
            <button type="button" className="btn cancel" onClick={() => console.log('cancel')}>Discard</button>
          </div>
        </form>
      </div >
    </div>

  )
}

export default FormUser;