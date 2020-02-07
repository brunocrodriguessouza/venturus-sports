import React from 'react';
import 'bulma';
import 'bulma/css/bulma.css'

// import 'bootstrap/dist/css/bootstrap.min.css';

const Breadcrumb = () => (
  <nav style={{ margin: 0 }} class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">

    <ul>
      <li><a href="/">Page Name</a></li>
      <li><a href="/">Other Page</a></li>
      <li class="is-active"><a href="/" aria-current="page">Current Page</a></li>
    </ul>
  </nav>
)

export default Breadcrumb;