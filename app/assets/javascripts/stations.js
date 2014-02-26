// window.addToMap = function(item) {
// }

window.loadMap = function(position) {

  var coords = position.coords;
  userPosition = [coords.latitude, coords.longitude];

  var mappy = L.mapbox.map("mappy", "katrina.hcf777p1", { zoomControl: false }).setView(userPosition, 10);
  new L.Control.Zoom({ position: 'topright' }).addTo(mappy);
  Map.mappy = mappy;

  var coords = userPosition;
  var coordsForUrl = coords[0] + "," + coords[1];
  var stationData = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=GOMRjS7IKgQCRujXnzJuEWpTEdnzlQgp3s2ZlI9B&location=" + userPosition ;

  $.getJSON( stationData, function( data ) {
    $.each(data.fuel_stations, function(index, fuel_station) {

      var markerLayer = Map.addMarkerToLayer(fuel_station).addTo(mappy);

      // Map.bindPopupContentToMarkup(markerLayer)
      markerLayer.eachLayer(function (layer) {
        var content = Map.createPopupContent(fuel_station);
        layer.bindPopup(content, {closeButton: false });
        layer.on('click', function(e) {
          mappy.setView(e.latlng);

           $(".main-info").click(function () {
              var api_url = "https://developer.nrel.gov/api/alt-fuel-stations/v1/" + fuel_station.id + ".json?api_key=GOMRjS7IKgQCRujXnzJuEWpTEdnzlQgp3s2ZlI9B";
              console.log(fuel_station.id)
              $.ajax({
                url: api_url,
                context: document.body,
                

              }).done(function(){
                $(".bottom-bar").toggle();
              });
          });
        });
      });
    });
  });
}
