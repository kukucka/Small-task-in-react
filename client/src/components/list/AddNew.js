import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AddNew = () => {
  return (
    <div>
      <Button>
        <Link to="/new">Add new</Link>
      </Button>
    </div>
  );
};

export default AddNew;
