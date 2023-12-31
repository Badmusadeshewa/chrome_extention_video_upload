const fs = require('fs');
const path = require('path');

// Serve video file
const serveVideo = (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'File not found' });
  }

  res.sendFile(filePath);
};

module.exports = {
  serveVideo,
};
