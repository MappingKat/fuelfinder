var Map = {};

Map.addMarkerToLayer = function(val){
  console.log(val);
  var lng =  parseFloat(val.longitude),
  lat =  parseFloat(val.latitude),
  name = val.name,
  id = val.id,
  markerLayer = L.mapbox.markerLayer({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [lng , lat]
    },
    properties: {
      station_id: id,
      name: station_name,
      description: val.intersection_directions,
      street: val.street_address,
      city: val.city,
      state: val.state,
      'marker-size': 'medium',
      'marker-color': '#ffa500',
      'marker-symbol': 'car'
    }
  })
  return markerLayer;
};

Map.addPopupToLayer = function(layer) {

  var station = layer.feature.properties
  var street = station.address_street
  var city = station.city
  var state = station.state

  if (city === null ) {city = ""}

  switch (state) {
    case null :
      state = "";
      break;
    case city !== null && state !== null :
      state = ',  ' + state ;
      break;
    default:
      state = state;
    };

  addressDescription = processAddress(addressDescription);
  street = processStreet(street);

  var content = '<img class="fuel"/><div class="main-info"><h4 class="namer"><strong>'+ "<a href='/stations/" + station.station_id + "'" + '>' + station.name + '</a>' + '</strong></h4>' + '<span class="addressy">' + city + ',  ' + state + '</span></br><span class="location">' + addressDescription + '</span></div>';
  
  return content;
}

var processAddress = function(addressDescription){
  if (addressDescription === null || addressDescription === 'Other') {
    addressDescription = ""
  } else {
    addressDescription = 'Location: ' + addressDescription;
  };
  return addressDescription;
};

var processStreet = function(street){
  if (street === null ){ 
    street = "" 
  } else {
    street = street + ',  ';
  };
  return processStreet;
};


