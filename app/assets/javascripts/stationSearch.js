jQuery(document).ready(function() {
  var Search = {};

  Search.performSearch = function() {
    var container = $('.st-container');
    container.addClass('st-menu-open');
    container.addClass('st-effect-2');

    var searchInput = $("#search-input").val();
    var route = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=GOMRjS7IKgQCRujXnzJuEWpTEdnzlQgp3s2ZlI9B&location=" + searchInput ;
    
    $.getJSON( route , function(data) {
      debugger

      var map = Map.mappy;
      var list = $(".listings");
      list.empty();
      if (data.fuel_stations.length === 0) {
        $(list).append("<li class='no-results'> Nothing Found </li>)");
        map.setView([ 40.48086, -85.339523 ], 4);
        return
      };

      var first_station = data.fuel_stations[0]
      map.setView([ first_station.latitude, first_station.longitude], 11);
      
      $.each(data.fuel_stations, function(index, fuel_station) {
        var markerLayer = Map.addMarkerToLayer(fuel_station).addTo(map);
        markerLayer.eachLayer(function (layer) {
          var content = Map.createPopupContent(fuel_station);
          layer.bindPopup(content, {closeButton: false });
          layer.on('click', function(e) {
            map.setView(e.latlng);
          });
        });
        if (fuel_station.street_address) {
          var street = '<strong>' + fuel_station.street_address + '</strong>, '
        } else {
          var street = ""
        }

        $(list).append('<li><a class="icon icon-data station-item" data-station-id=' + fuel_station.id + '>' + fuel_station.station_name + '<p class="smaller">' + street + fuel_station.city + ', ' + fuel_station.state + '</p>' + '</a></li>');
      });
    });
    Search.addCloseListeners();
  };

  Search.addCloseListeners = function() {
    var container = $('.st-container');
    $(".st-pusher").click(function (e) {
      container.removeClass('st-menu-open');
    });
  };

  $("#search-button").click(function (e) {
    Search.performSearch();
  });

  $("#search-input").keypress(function (e) {
    if (e.keyCode == 13) {
      Search.performSearch();
    };
  });
});
