import React from 'react';
import {
  BrowserRouter,
  // Route
} from 'react-router-dom'

// import UsersTable from './components/UsersTable/UsersTable';
import Register from './components/Register/Register';

const Routers = () => {
  return (
    <BrowserRouter>
      {/* <UsersTable /> */}
      <Register />
    </BrowserRouter>
  )

}

export default Routers;