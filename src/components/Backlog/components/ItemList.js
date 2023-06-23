import React from 'react';
import Item from './Item';
import './ItemList.css'; // Import the CSS file

const ItemList = ({ items, titles, name, order }) => {

  // Sort the items based on the order array
  const sortedItems = order.map((index) => items[index]);
  const sortedTitles = order.map((index) => titles[index]);

  return (
    <div>
      <h2 style={{ marginBottom: '0px' }}>{name}</h2>
      <div className="scrollable-container">
        {sortedItems.map((item, index) => (
          <Item
            key={order[index]}
            imageSrc={item}
            text={sortedTitles[index].replace(/_/g, ' ')}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
