import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AddNew = props => {
  return (
    <div>
      <Button primary>
        <Link to="/new">
          <h2 style={{ textDecoration: 'none', color: 'white' }}> Add new</h2>
        </Link>
      </Button>
    </div>
  );
};

export default AddNew;
