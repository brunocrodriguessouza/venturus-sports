import React from 'react';
import 'bulma';
import 'bulma/css/bulma.css'

const Banner = () => (
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-quarter">
            <h1 class="subtitle">Sport type</h1>
            <h2 class="title">Cycling</h2>
          </div>
          <div class="column is-one-quarter">
            <h1 class="subtitle">Mode</h1>
            <h2 class="title">Advanced</h2>
          </div>
          <div class="column is-half">
            <h1 class="subtitle">Route</h1>
            <h2 class="title">30 miles</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Banner;