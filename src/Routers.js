import React from 'react';
import {
  BrowserRouter,
  // Route
} from 'react-router-dom'

import UsersTable from './components/UsersTable/UsersTable';

const Routers = () => {
  return (
    <BrowserRouter>
      <UsersTable />
    </BrowserRouter>
  )

}

export default Routers;