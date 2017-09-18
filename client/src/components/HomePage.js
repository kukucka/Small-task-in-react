import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import spaceship from '../data/images/spaceship.png';

const HomePage = () => {
  return (
    <div className="home-wraper">
      <div className="pop">
        <h1>Welcome to AstroList</h1>
        <p>
          On this site we collect names of all astronauts who were in space,
          their date of birth and their signicture superpowers. Feel free to add
          your favorite astronaut or if you find some mistake feel free to
          delete it.
        </p>
        <img src={spaceship} className="image" alt="space_ship"  />
        <Link to="/list">
          <Button className="btn-home">Show me list</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
