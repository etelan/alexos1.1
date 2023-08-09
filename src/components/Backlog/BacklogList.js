import React from 'react';
import ItemList from './ItemList';

const BacklogList = ({ imageDirectory, name, order, style }) => {

  let orderedImageDirectory = new Map();

  for (const title of order) {
    orderedImageDirectory.set(title, imageDirectory[title.replace(" :D", "")]);
  }

  return (
    <div style={style}>
      <ItemList imageMap={orderedImageDirectory} name={name} />
    </div>
  );
  
};

export default BacklogList;
