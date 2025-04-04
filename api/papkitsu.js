const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, '../json/papkitsu.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading data' });
      return;
    }

    const imageUrls = JSON.parse(data);  // Parse the JSON data into an array
    res.status(200).json(imageUrls);    // Return the image URLs as a JSON array
  });
};