import React from 'react';
import ItemList from './ItemList';

const BacklogList = ({ imageDirectory, name, order, style }) => {

  let orderedImageDirectory = new Map();

  for (const title of order) {

    const new_title = title.replace(" :]", "")
    .replace(" :)", "")
    .replace(" :D", "")
    .replace(/:/g, "")
    .replace(/#/g, "")
    .replace(/ /g, "_")

    orderedImageDirectory.set(title, imageDirectory[
      new_title
    ]);
  }

  return (
    <div style={style}>
      <ItemList imageMap={orderedImageDirectory} name={name} />
    </div>
  );
  
};

export default BacklogList;
