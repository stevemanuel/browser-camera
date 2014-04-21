# In-browser camera (webRTC)

Using just a few webRTC standards, we can implement a camera using just the browser and HTML5 technologies. This example uses:
```
<video>
<canvas>
navigator.getUserMedia
```

[Download Link](https://github.com/stevemanuel/browser-camera/archive/master.zip)

## How does it work?
### Streams!

A stream is technically a `LocalMediaStream` object that can be data from an audio or video source.

### navigator.getUserMedia(constraints, successCallback, errorCallback)

Using `getUserMedia` requires a modern browser. All modern desktop versions of Chrome, Firefox and Opera have support, and mobile is on the way.

`constraints` is an object with two keys: `video` and `audio`. Setting either to `true` or `false` will determine the kind of stream that the browser will have access to from the device. We are only working with video streams in this example. 

#### Process:

1. Get permission from user and access video stream
2. Pass video data to canvas context for image capture
3. Take captured image data and convert it to data URL
4. Set data URL as source of new image element
5. Append new image element to page

Fork the code and try it yourself! You will probably need to use a webserver, as the browser might complain if files and streams are accessed over the file:// protocol.
