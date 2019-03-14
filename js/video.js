(function() {
  const video = document.getElementById('video')

  navigator.webkitGetUserMedia({
    video: true,
    audio: true
  }, stream => {
    video.srcObject = stream
  }, error => {
    console.log(error)
  })
})();
