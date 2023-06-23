import React from 'react';
import styles from './Item.module.css';

const Item = ({ imageSrc, text }) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt='text' className={styles.image} />
      <div className={styles.text}>
        {text}
      </div>
    </div>
  );
};

export default Item;
