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

### Colours

![#f03c15](https://placehold.co/15x15/1F2125/1F2125.png) Primary Background: #1F2125 - A nearly black color for your main background.

![#282C34](https://placehold.co/15x15/282C34/282C34.png) Secondary Background (for cards or modules): #282C34 - A slightly lighter dark grey to provide subtle contrast against the primary background.

![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) Primary Text: #FFFFFF - Pure white for main text, providing maximum contrast against a dark background.

![#B2B2B2](https://placehold.co/15x15/B2B2B2/B2B2B2.png) Secondary Text: #B2B2B2 - A light grey for less important text elements.

![#3498DB](https://placehold.co/15x15/3498DB/3498DB.png) Accent Color (for highlighting or call-to-action buttons): #3498DB - A bright, clear blue that will stand out in the dark theme.

![#717984](https://placehold.co/15x15/717984/717984.png) Secondary Accent (for secondary buttons, hovered items): #717984 - A muted mid-tone blue-grey, for less intrusive highlighting.

![#E74C3C](https://placehold.co/15x15/E74C3C/E74C3C.png) Data Visualization Color 1: #E74C3C - A bright red for important data points or lines.

![#F1C40F](https://placehold.co/15x15/F1C40F/F1C40F.png) Data Visualization Color 2: #F1C40F - A bright yellow for secondary important data points.

![#2ECC71](https://placehold.co/15x15/2ECC71/2ECC71.png) Data Visualization Color 3: #2ECC71 - A bright green for tertiary data points or lines.

![#D35400](https://placehold.co/15x15/D35400/D35400.png) Error or Warning Color: #D35400 - A bright orange to draw attention to errors or warnings.