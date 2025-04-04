const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, '../json/papkitsu.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error reading data' });
      return;
    }

    try {
      const imageUrls = JSON.parse(data);
      if (!Array.isArray(imageUrls) || imageUrls.length === 0) {
        return res.status(404).json({ message: 'No image URLs found' });
      }

      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const randomUrl = imageUrls[randomIndex];

      res.status(200).json({ url: randomUrl });
    } catch (e) {
      res.status(500).json({ message: 'Error parsing JSON data' });
    }
  });
};