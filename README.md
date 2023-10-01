# Getting Started with File upload with multer in Node js

This Demo was uploading image and video file using multer middleware.

## Project Setup

In the project directory, you can run:

### `npm init`

### `npm install`

### `npm start`

Runs the app in the development mode.

## Calling the video upload API

- Open Postman and create POST request for image upload
- URL will be [localhost:3000/upload](http://localhost:3000/upload)
- select Body in menus then select form-data
- Change key name as a video and select video file `(file will be only mp4|mpeg-4 and size 20MB Only for now)`
- Send the request

- Live URL will be [https://chromeextention.onrender.com/api/upload](https://chromeextention.onrender.com/api/upload)

---

> The save video endpoint is a post request you only need to send back your video as formdata
> send a post request to [https://chromeextention.onrender.com/api/upload](https://chromeextention.onrender.com/api/upload)
> the video saves for you automatically
> To view the video, send a get request to this end point [https://chromeextention.onrender.com/api/video/videoname.mp4](https://chromeextention.onrender.com/api/video/videoname.mp4)
