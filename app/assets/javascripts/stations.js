// window.addToMap = function(item) {
// }

window.loadMap = function(position) {

var coords = position.coords;
userPosition = [coords.latitude, coords.longitude];

var mappy = L.mapbox.map("mappy", "katrina.hcf777p1", { zoomControl: false }).setView(userPosition, 15);
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

      var fuel = fuel_station.fuel_type_code
      var payment = fuel_station.cards_accepted
      var address = fuel_station.intersection_directions
        if (fuel== null ) {
            fuel = ""
          } else {
            fuel = '<strong>Fuel Type: </strong>' + fuel + '</strong> '
          }

         if ( payment == null ) { payment = ""
          } else {
            payment = '<strong>Cards Accepted:</strong>' + payment 
          }
         if ( address == null ) { address = ""
          } else {
            address = address + '</br>'
          }

        // mappy.setView(e.latlng);
         $(".main-info").click(function () {
            var addInfo = $('#station-show').empty().append('<header class="show-page-header"><h2>' + fuel_station.station_name +'</h2></header><li class="show-column1"><div id="map"><img src="http://api.tiles.mapbox.com/v3/pzula.h69mf89n/pin-m-car(' + fuel_station.longitude + ',' + fuel_station.latitude + ')/' + fuel_station.longitude + ',' + fuel_station.latitude + ',16/250x250.png"></div></li><li class="show-column2"><span class="addressy">'+  address + fuel_station.city + ',' + fuel_station.state + '</span></br></br><strong>Contact: </strong>' + fuel_station.station_phone + '</br><strong>Open: </strong>' + fuel_station.access_days_time +'</br></br>' + fuel + '<br/>' + payment + '</li>');
            console.log(addInfo);
            if ($(".bottom-bar").is(":visible") ){
                return addInfo;
              } else {
                $(".bottom-bar").toggle();
                return addInfo;
              };
          });
        });
      });
    });
  });
};
