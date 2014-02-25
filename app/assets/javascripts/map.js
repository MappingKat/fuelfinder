var Map = {};

Map.addMarkerToLayer = function(data){
  var lng =  data.longitude,
  lat =  data.latitude,
  name = data.station_name,
  id = data.id

  markerLayer = L.mapbox.markerLayer({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [lng , lat]
    },
    properties: {
      station_id: id,
      name: name,
      description: data.intersection_directions,
      street: data.street_address,
      city: data.city,
      state: data.state,
      'marker-size': 'medium',
      'marker-color': '#e67e22',
      'marker-symbol': 'car'
    }
  });
  return markerLayer;
};

Map.createPopupContent = function(data) {
  var stationLink = $('#namer');
  var content = '<img class="fuel"/><div class="main-info"><h4 class="namer"><strong>'+ "<a href='#' data-id='/stations/" + data.id + "'>" + data.station_name + '</a><div>' + '</strong></h4>' + '<span class="addressy">' + data.street_address + '<br>' + data.city + ',  ' + data.state + '</span>';
  return content;

  // var currentId = 0;
  // var baseURL = "station?id="
  // $(stationLink).on('click', function(popup) {
  // $("#results").append html
  //   popup.preventDefault();
  //   currentId = $(this).attr('data-id');
  //   $("#show-container").popup("open", {transition:"slideup"});
  // });

  // $('#popup-menu').on('popupbeforeposition', function(){
  //       $("#details").attr("href", baseURL + currentId);
  //   });
};
