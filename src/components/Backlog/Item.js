import React from 'react';
import styles from '../../componentStyles/Item.module.css';

const Item = ({ imageSrc, text, completion }) => {
  const itemBackground = completion ? styles.completedBackground : styles.todoBackground;
  const itemText = completion ? styles.completedText : styles.todoText;

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
