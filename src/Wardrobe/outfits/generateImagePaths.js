/**
 * This script generates import statements and HTML code for a set of image files in a directory.
 * The import statements are written to a text file named 'imagePaths.txt' in the current directory.
 * The HTML code is printed to the console.
 * 
 * Usage: node generate-image-paths.js
 */

const fs = require('fs');
const path = require('path');

const imageFolder = './';
const outputPath = './imagePaths.txt';

const imageExtensions = ['.jpg', '.jpeg', '.png', '.svg'];

fs.readdir(imageFolder, (err, files) => {
  if (err) {
    console.error('Error reading the image folder:', err);
    return;
  }

  const imageFiles = files.filter((file) =>
    imageExtensions.includes(path.extname(file))
  );

  const importStatements = imageFiles.map((file, index) => {
    return `import outfit${index + 1} from './outfits/${file}';`;
  });

  const htmlCode = imageFiles.slice(0, 2).map((file, index) => {
    return `<div>\n  <img src={outfit${index + 1}} alt="Outfit ${index + 1}" />\n</div>`;
  });

  const content = `${importStatements.join('\n')}\n\n${htmlCode.join('\n')}`;

  fs.writeFile(outputPath, content, (err) => {
    if (err) {
      console.error('Error writing the image paths file:', err);
      return;
    }

    console.log('Image paths file created successfully!');
  });
});
