const express = require('express');
const path = require('path');

//Route files
const uploadVideo = require('./routes/uploadVideo');
const videoRoute = require ('./routes/videoroute')

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

//initialize routes
app.use('/api/upload', uploadVideo);
app.use('/api/video', videoRoute);

app.listen(port, () => {
  console.log('Server now running on ' + port);
});
