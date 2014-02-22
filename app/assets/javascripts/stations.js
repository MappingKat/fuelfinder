var loadMap = function(position) {
  var coords = position.coords;
  userPosition = [coords.latitude, coords.longitude];

  var mappy = L.mapbox.map("mappy", "pzula.h69mf89n", { zoomControl: false }).setView(userPosition, 10);
  new L.Control.Zoom({ position: 'topright' }).addTo(mappy);
  Map.mappy = mappy;

  var coords = userPosition;
  var coordsForUrl = coords[0] + "," + coords[1];
  var stationData = "/api/alt-fuel-stations/v1/nearest.json?api_key=DEMO_KEY&longitude=" + coords[0] + "&latitude=" + coords[1];

  $.getJSON("http://developer.nrel.gov", function( stationData ) {
    $.each(stationData, function(index, val) {
      var markerLayer = Map.addMarkerToLayer(val).addTo(mappy);

       markerLayer.eachLayer(function (layer) {
         var content = Map.addPopupToLayer(layer);
         layer.bindPopup(content, {
           closeButton: false });
         layer.on('click', function(e) {
           mappy.setView(e.latlng);
         });
      });

      var list = $(".listings");
      $.each(data, function(index, val){
          var street = val.address.street
          
          if (street == null ) {
            street = ""
          } else {
            street = '<strong>' + street + '</strong>, '
          }

          $(list).append('<li><a class="icon icon-data station-item" data-station-id=' + val.id + '>' + val.name + '<p class="smaller">' + street + val.city + ', ' + val.state + '</p>' + '</a></li>');
       });
      });
    });
  };

  // http://api.data.gov/nrel/api/alt-fuel-stations/v1.json

