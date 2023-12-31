const multer = require('multer');
const path = require('path');

module.exports = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/videos', // Destination to store video
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + '_' + Date.now() + path.extname(file.originalname)
      );
    },
  }),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== '.mp4') {
      cb(new Error('File type is not supported'), false);
      return;
    }
    cb(null, true);
  },
});

// ---------------------------------------------------------------------------- //

// // Video Upload
// const videoStorage = multer.diskStorage({
//   destination: './public/uploads/videos', // Destination to store video
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + '_' + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// module.exports = multer({
//   storage: videoStorage,
//   limits: {
//     fileSize: 20000000, // 10000000 Bytes = 20 MB
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(mp4|MPEG-4)$/)) {
//       // upload only mp4 and mkv format
//       return cb(new Error('File type is not supported Please upload a Video'));
//     }
//     cb(undefined, true);
//   },
// });
