import React from 'react';
import HomePageTyping from './HomePageTyping';
import '../styles/HomePage.css';

const HomePage = () => {



  return (
    <div>
      <div className="home-container home-container-heading">
        <h1>Nathan</h1>
        <h1>Sheryak</h1>
        <HomePageTyping strings={[
          'Software Developer...'
        ]} />
      </div>

    </div>
  )
}

export default HomePage;