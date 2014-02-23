jQuery(document).ready(function() {
  // Open up websocket
  // Send our location
  var socket = io.connect('http://localhost:9999');

  if (navigator.geolocation) {
    var location = navigator.geolocation.getCurrentPosition(send_location);
  }

  function send_location(position) {
    socket.emit('position', {position: position});
  }
});
