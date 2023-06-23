/**
 * This component displays a virtual wardrobe carousel with a set of outfit images.
 * The outfit images are imported at the top of the file using ES6 module syntax.
 * The carousel is implemented using the react-responsive-carousel library.
 * 
 * Usage: <VirtualWardrobe />
 */

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import styles from './VirtualWardrobe.module.css';
import { Outfit } from './Outfit.js';

// Import your outfit images
import * as outfits from './images/index';

const VirtualWardrobe = () => {
  return (
    <div className={styles['virtual-wardrobe']}>
      <h3>Virtual Wardrobe</h3>
      <Carousel 
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        useKeyboardArrows={true} // enable scrolling with the keyboard arrows
        emulateTouch={true} // enable scrolling with touch gestures
      >

      
        {Object.values(outfits).map((outfit, index) => (
          <Outfit key={index} src={outfit} alt={`Outfit ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default VirtualWardrobe;
