# Dashboard App

This is a dashboard app that includes different React modules and node modules.

## React Modules

### `src\Graphs\TemperatureGraph.js`

This module renders a temperature graph that displays the temperature readings over a period of time. It fetches the temperature data from a REST API endpoint and uses the `react-chartjs-2` library to create the graph.

### `src\Wardrobe\VirtualWardrobe.js`

This module displays a virtual wardrobe carousel that shows different outfit combinations. The outfits are imported from the `src\Wardrobe\outfits` directory and are dynamically rendered using the `react-responsive-carousel` library.

### `src\App.js`

This is the main app component that renders the temperature graph and the virtual wardrobe carousel.

## Node Modules

### `src\Wardrobe\outfits\generateImagePaths.js`

This module generates a list of import statements for the outfit images and outputs them to a text file. It also generates HTML code that can be used to render the images in a webpage.

## Additional Information

This app is still under development, and new features are being added regularly.
