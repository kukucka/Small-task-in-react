import React from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const AddNew = props => {
  return (
    <div>
      <Link to="/new">
        <Button primary>
          <h2 style={{
            textDecoration: 'none',
            color: 'white'
          }}>
            Add new</h2>
        </Button>
      </Link>

    </div>
  );
};

export default AddNew;
