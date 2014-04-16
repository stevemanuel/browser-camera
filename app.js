navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function getPic() {
  // make canvas to inject video data
  var canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 480;
  var ctx = canvas.getContext("2d");
  
  // pass video to image, get image data from canvas
  ctx.drawImage(video, 0, 0, 640, 480);

  // convert pixel contents of canvas to data we can work with
  var imgData = canvas.toDataURL('image/png');
  
  // create a new img element
  var img = document.createElement("img");
  img.height = 360;
  img.width = 480;
  img.src = imgData;
  
  document.querySelector('.camera-roll').appendChild(img);
}

// when navigator.getUserMedia() succeeds, its passed a stream
function mediaSuccess(stream) {
  // make the stream avail to console (debuggig)
  window.stream = stream;
  
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream); 
  } 
  else {
    video.src = stream;
  }
  
  video.play();
}

// if the user denies the browser permission, alert them
function mediaError(error) {
  alert("You must allow the browser to access your camera.\n\nPlease try again.");
  console.log("navigator.getUserMedia() error: " + error.name);
}

// designate constraints for the media
var constraints = {
  audio: false,
  video: true
};

// create a reference to the video element
var video = document.querySelector("video"); // <video> element

// add event listener to the button to call getPic when it is clicked
var button = document.querySelector("button");
button.addEventListener("click", getPic);

// get permission from user to access camera in browser
navigator.getUserMedia(constraints, mediaSuccess, mediaError);
