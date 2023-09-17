import React from 'react';
import Item from './Item';

import '../../componentStyles/ItemList.css'; // Import the CSS file

// Helper function to extract the face part from the title
const extractFace = (title) => {
  var face = title.slice(-2)
  if (face.includes(":")) {
    return face
  }
  return "default"
};

const ItemList = ({ imageMap, name }) => {  
  return (
    <div>
      <h2 style={{ marginBottom: '0px' }}>{name}</h2>
      <div className="scrollable-container">
        {Array.from(imageMap.entries()).map(([title, imageSrc], index) => {
          // Determine the completion value based on the title
          const face = extractFace(title);
          
          return (
            <Item
              key={index}
              imageSrc={imageSrc}
              text={title.replace(/_/g, " ")}
              face={face}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
