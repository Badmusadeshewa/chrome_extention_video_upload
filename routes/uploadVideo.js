const router = require('express').Router();
const uploadVideoController = require('../controllers/uploadVideoController');

const storage = require('../utils/multer');

router.post(
  '/',
  storage.single('file'),
  uploadVideoController.uploadVideo
);

module.exports = router;
