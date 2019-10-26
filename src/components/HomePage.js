import React from 'react';
import HomePageTyping from './HomePageTyping';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-container-heading">
        <div className="home-container-heading-top">Nathan</div>
        <div className="home-container-heading-btm">Sheryak</div>
        <HomePageTyping strings={[
          'Software Developer...'
        ]} />
      </div>
    </div>
  )
}

export default HomePage;