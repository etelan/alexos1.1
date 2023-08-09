import React from 'react';
import Item from './Item';

import '../../componentStyles/ItemList.css'; // Import the CSS file

const ItemList = ({ imageMap, name }) => {

  console.log(imageMap)

  return (
    <div>
      <h2 style={{ marginBottom: '0px' }}>{name}</h2>
      <div className="scrollable-container">
        {Array.from(imageMap.entries()).map(([title, imageSrc], index) => (
            <Item
              key={index}
              imageSrc={imageSrc}
              text={title}
              completion={title.includes(':D')}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
