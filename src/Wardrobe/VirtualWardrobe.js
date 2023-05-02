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

// Import your outfit images
import outfit1 from './outfits/outfit1.jpg';
import outfit2 from './outfits/outfit2.jpg';
import outfit3 from './outfits/outfit3.jpg';
import outfit4 from './outfits/outfit4.jpg';
// Add more outfits as needed

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
        <div>
          <img src={outfit1} alt="Outfit 1" />
        </div>
        <div>
          <img src={outfit2} alt="Outfit 2" />
        </div>
        <div>
          <img src={outfit3} alt="Outfit 3" />
        </div>
        {/* Add more carousel items as needed */}
      </Carousel>
    </div>
  );
};

export default VirtualWardrobe;
