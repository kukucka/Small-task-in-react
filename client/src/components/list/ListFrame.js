import React from 'react';
import AddNew from './AddNew';
import ListItem from './ListItem';

const ListFrame = props => {
  return (
    <div className="list-wrapper">
      <h1>List of astronauts</h1>
      <ListItem
        data={props.data}
        onhandleDeleteAstronaut={props.onhandleDeleteAstronaut}
      />
      <AddNew />
    </div>
  );
};

export default ListFrame;
