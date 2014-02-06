var Map = {};

Map.addMarkerToLayer = function(val) {
  var lng =  parseFloat(val.address.long),
      lat =  parseFloat(val.address.lat),
      name = val.name,
      id = val.id,
      markerLayer = L.mapbox.markerLayer({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng , lat]
        },
        properties: {
          market_id: id,
          name: name,
          description: val.address.description,
          street: val.address.street,
          city: val.address.city,
          name: val.name,
          'marker-size': 'small',
          'marker-color': '#9CFF00'
        }
      })
  return markerLayer;
};

Map.addPopupToLayer = function(layer) {
  var content = '<div class="wheat"><img src="assets/wheat.png"/></div> <div class="main-info"><h4 class="namer"><strong>'+ layer.feature.properties.name + '</strong></h4>' + '<p class="addressy">' + layer.feature.properties.street + ', ' + layer.feature.properties.city + '</br>' + '(' +layer.feature.properties.description + ')' + '</div>';
  return content;
}