import React, { useState, useEffect } from 'react';

const HoverSquare = (data) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []); 

  if (Object.keys(data.data).length === 0) {
    return
  }

  data = data.data

  return (
    <div
      style={{
        position: 'absolute',
        width: 'fit-content',
        height: 'fit-content',
        backgroundColor: 'lightgreen',
        visibility: Object.keys(data).length === 0,
        padding: '10px',
        left: position.x,
        top: position.y - 100,
      }}
    >
      <p>{data.spiffs} spiffs</p>
      <p>{data.bowls} bowls</p>
      <p>{data.capsules} capsules</p>
      <p>total: {data.total}g</p>
    </div>
  );
};

export default HoverSquare;
