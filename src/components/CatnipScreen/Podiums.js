import React, {useState} from 'react';
import styles from './../../componentStyles/Podiums.module.css'

import HoverSquare from './HoverSquare';

const Podiums = () => {

  const [hoverData, setHoverData] = useState({});


  // Example Data
  let exampleData = {
    vik: {spiffs: "4", bowls: "99", capsules: "2"},
    alexis: {spiffs: "1", bowls: "2", capsules: "5"},
    allie: {spiffs: "4", bowls: "10", capsules: "10"},
  }

  // Hover Code
  function handleClick(data, event, id) {

    if (Object.keys(data).length === 0) {
      setHoverData({});
      return;
    }

    if (event.currentTarget) {
      let clickedData = exampleData[data.name];
      clickedData.total = data.grams;
      setHoverData(clickedData);
    }
    
  }

  // Calculators for Displays
  function calculateTotalGramsForPerson(data, personName) {
    if (!data[personName]) {
      console.error(`Person "${personName}" not found in the data.`);
      return 0;
    }
  
    const personData = data[personName];
    let totalGrams = 0;
  
    for (const item in personData) {
      const amount = parseInt(personData[item], 10);

      switch (item) {
        case 'spiffs':
          totalGrams += amount * 1; // 1 gram for a spliff
          break;
        case 'bowls':
          totalGrams += amount * 2; // 2 grams for a bowl
          break;
        case 'capsules':
          totalGrams += amount * 0.2; // 0.2 grams for a capsule
          break;
        default:
          console.error(`Unknown item type: ${item}`);
          break;
      }


      totalGrams += amount;
    }
  
    return {name: personName, grams: totalGrams}
  }

  function podiumInformationComponent(data) {
    return (
      <div>
        <p style={{fontSize: '20px'}}>{data.name.toLocaleUpperCase()}</p>
        <p>{data.grams}g</p>
      </div>
    )

  }



  function podiumComponent(data, style_string, id) {
    return (
      <div>
        <div 
          className={styles[style_string+ '-buffer'] }
          onClick={(event) => handleClick({}, event, id)}
        />
        <div 
            className={styles[style_string]}
            onClick={(event) => handleClick(data, event, id)}>
          {podiumInformationComponent(data)}
        </div>
      </div>
    )
  }

  var gramsArray = []
  for (const name in exampleData) {
    gramsArray.push(calculateTotalGramsForPerson(exampleData, name))
  }

  // So we get our first middle and thirds
  gramsArray.sort((a, b) => b.grams - a.grams);

  // Calculate total
  let groupTotal = 0;
  gramsArray.forEach((row) => groupTotal += row['grams'] );

  return (
    <div    >
      <div className={styles['center-total-container']}>
        <div>
          <h1>Total This Week</h1>
          <h3>{groupTotal}g</h3>

          <p>Total Last Week</p>
          <p>24g</p>
        </div>
      </div>

      <HoverSquare data={hoverData} />


      <div className={styles['podium-container']}>
        {podiumComponent(gramsArray[2], 'podium-style-third', 'first')}
        {podiumComponent(gramsArray[0], 'podium-style-first', 'second')}
        {podiumComponent(gramsArray[1], 'podium-style-second', 'third')}

      </div>
    </div>
  );
  
};

export default Podiums;
