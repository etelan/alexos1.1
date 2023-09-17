import React from 'react';
import styles from '../../componentStyles/Item.module.css';

const Item = ({ imageSrc, text, face }) => {

  var itemBackground = styles.todoBackground;
  var itemText = styles.todoText;

  // I made this code entirely because it is cute
  // I know that this is impractical and I should use ENUMs
  switch (face) {
    case ":]":
      itemBackground = styles.workingOnItBackground;
      itemText = styles.workingOnItText;
      break;
    case ":)":
      itemBackground = styles.completedEnoughBackground;
      itemText = styles.completedEnoughText;
      break;
    case ":D":
      itemBackground = styles.completedBackground;
      itemText = styles.completedEnoughText;
      break;
    default:
      itemBackground = styles.todoBackground;
      itemText = styles.todoText;
      break; // Default background for other cases
  }

  return (
    <div className={`${styles.container} ${itemBackground}`}>
      <img src={imageSrc} alt={text} className={styles.image} />
      <div className={`${styles.text} ${itemText}`}>
        {text}
      </div>
    </div>
  );
};

export default Item;
