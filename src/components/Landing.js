import React from 'react';

const Landing = () => (
  <section className="landing">
    <div className="hero-title-div">
      <h1 className="hero-title">Turn the music up!</h1>
    </div>
    <section className="selling-points">
      <div className="point one">
        <h2>Choose your music</h2>
      </div>
      <div className="point description">
        <p>The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point description">
        <p>No artibrary limits. No distractions.</p>
      </div>
      <div className="point two">
        <h2>Unlimited, streaming, ad-free</h2>
      </div>
      <div className="point three">
        <h2>Mobile enabled</h2>
      </div>
      <div className="point description">
        <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;
