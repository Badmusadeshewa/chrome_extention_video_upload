const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videocontoller');

// Serve video file
router.get('/:filename', videoController.serveVideo);

module.exports = router;
