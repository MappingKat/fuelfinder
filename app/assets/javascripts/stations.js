// window.addToMap = function(item) {
// }

window.loadMap = function(position) {
  var coords = position.coords;
  userPosition = [coords.latitude, coords.longitude];

  var mappy = L.mapbox.map("mappy", "pzula.h69mf89n", { zoomControl: false }).setView(userPosition, 10);
  new L.Control.Zoom({ position: 'topright' }).addTo(mappy);
  Map.mappy = mappy;

  var coords = userPosition;
  var coordsForUrl = coords[0] + "," + coords[1];
  var stationData = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=GOMRjS7IKgQCRujXnzJuEWpTEdnzlQgp3s2ZlI9B&location=" + userPosition ;

  $.getJSON( stationData, function( data ) {

    var list = $(".listings");

    $.each(data.fuel_stations, function(index, fuel_station) {

      var markerLayer = Map.addMarkerToLayer(fuel_station).addTo(mappy);

      // Map.bindPopupContentToMarkup(markerLayer)
      markerLayer.eachLayer(function (layer) {
        var content = Map.createPopupContent(fuel_station);
        layer.bindPopup(content, {closeButton: false });
        layer.on('click', function(e) {
          mappy.setView(e.latlng);
        });
      });

      // Map.addStationToList(fuel_station)      
      if (fuel_station.street_address) {
        var street = '<strong>' + fuel_station.street_address + '</strong>, '
      } else {
        var street = ""
      }

      $(list).append('<li><a class="icon icon-data station-item" data-station-id=' + fuel_station.id + '>' + fuel_station.station_name + '<p class="smaller">' + street + fuel_station.city + ', ' + fuel_station.state + '</p>' + '</a></li>');
    });
  });
}
