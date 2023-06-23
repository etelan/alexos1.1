import React from 'react';
import ItemList from './ItemList';

const BacklogList = ({ imageDirectory, name, order, style }) => {
  const imageSources = Object.values(imageDirectory);
  const titles = Object.keys(imageDirectory);

  return (
    <div style={style}>
      <ItemList items={imageSources} titles={titles} name={name} order={order} />
    </div>
  );
  
};

export default BacklogList;
