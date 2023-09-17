import React from 'react';
import ItemList from './ItemList';

const BacklogList = ({ imageDirectory, name, order, style }) => {

  let orderedImageDirectory = new Map();

  for (const title of order) {

    if (title.includes(":D")) {
      orderedImageDirectory.set(title, imageDirectory[title.replace(" :D", "")]);
    } else if (title.includes(":)")) {
      orderedImageDirectory.set(title, imageDirectory[title.replace(" :)", "")]);
    } else if (title.includes(":]")) {
      orderedImageDirectory.set(title, imageDirectory[title.replace(" :]", "")]);
    } else {
      orderedImageDirectory.set(title, imageDirectory[title]);
    }
  }

  return (
    <div style={style}>
      <ItemList imageMap={orderedImageDirectory} name={name} />
    </div>
  );
  
};

export default BacklogList;
