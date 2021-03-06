jQuery(document).ready(function() {
  var Search = {};

Search.performSearch = function() {
  var searchInput = $(".search-input").val();
  console.log(searchInput);
  var route = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=GOMRjS7IKgQCRujXnzJuEWpTEdnzlQgp3s2ZlI9B&location=" + searchInput ;
  
  $.getJSON( route , function(data) {
    var mappy = Map.mappy;
    var bottomBar = $('.bottomBar')
    bottomBar.empty();
    if (data.fuel_stations.length === 0) {
      $(bottomBar).append("<li class='no-results'> Nothing Found </li>)");
      mappy.setView([ 40.48086, -85.339523 ], 4);
      return
    };

    var first_station = data.fuel_stations[0]
    mappy.setView([ first_station.latitude, first_station.longitude], 11);
    
    $.each(data.fuel_stations, function(index, fuel_station) {
      var markerLayer = Map.addMarkerToLayer(fuel_station).addTo(mappy);
      markerLayer.eachLayer(function (layer) {
        var content = Map.createPopupContent(fuel_station);
        layer.bindPopup(content, {closeButton: false });
        layer.on('click', function(e) {
          mappy.setView(e.latlng);
        });
      });
    });
  });
};

  $(".search-submit").click(function (e) {
    Search.performSearch();
  });

  $(".search-input").keypress(function (e) {
    if (e.keyCode == 13) {
      Search.performSearch();
    };
  });
});
