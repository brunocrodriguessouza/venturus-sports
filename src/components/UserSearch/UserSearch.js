import React from 'react';
import 'bulma';
import 'bulma/css/bulma.css'

import './UserSearch.scss';

// import 'bootstrap/dist/css/bootstrap.min.css';

const UserSearch = () => {
  return (
    <div class="hold-user-search">
      <h1>Users</h1>
      <span></span>
      <input type="search" placeholder="Filter table content" />
    </div>
  )
};

export default UserSearch;