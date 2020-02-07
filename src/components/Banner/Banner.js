import React from 'react';
import 'bulma';
import 'bulma/css/bulma.css'

const Banner = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          <div className="column is-one-quarter">
            <h1 className="subtitle">Sport type</h1>
            <h2 className="title">Cycling</h2>
          </div>
          <div className="column is-one-quarter">
            <h1 className="subtitle">Mode</h1>
            <h2 className="title">Advanced</h2>
          </div>
          <div className="column is-half">
            <h1 className="subtitle">Route</h1>
            <h2 className="title">30 miles</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Banner;