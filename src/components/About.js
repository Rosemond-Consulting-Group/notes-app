import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <Header />
          <div className="container">
            <h2 className="mb-3">About</h2>
          
          <p>
            This is a note taking app. It allows the user to create notes for their own personal needs.<br />
            It was created to demonstrate various feartures of React.
        </p>
        </div>
      <Footer />
    </div>
  )
};

export default About;