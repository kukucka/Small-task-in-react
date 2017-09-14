import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'semantic-ui-react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to AstroList</h1>
      <p>
        On this site we collect names of all the astronauts who were in the
        space and their signicture superpowers. Feel free to add your favorite
        astronaut or if you find some mistake feel free to delete it
      </p>
      <Link to="/list"><Button>Show me list</Button></Link>
    </div>
  );
};

export default HomePage;
