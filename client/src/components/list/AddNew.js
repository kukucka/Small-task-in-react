import React from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const AddNew = props => {
  return (
    <div>
      <Link to="/new">
        <Button className="list-btn-add">
            Add new
        </Button>
      </Link>

    </div>
  );
};

export default AddNew;
