jQuery(document).ready(function() {
  var Search = {};

  Search.performSearch = function() {
    var container = $('.st-container');
    container.addClass('st-menu-open');
    container.addClass('st-effect-2');

    var searchInput = $("#search-input").val();
    var route = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=GOMRjS7IKgQCRujXnzJuEWpTEdnzlQgp3s2ZlI9B&location=" + searchInput ;
    
    $.getJSON( route , function(data) {
      var mappy = Map.mappy;
      var sidebar = $(".icon icon-stack");

      list.empty();
      if (data.fuel_stations.length === 0) {
        $(list).append("<li class='no-results'> Nothing Found </li>)");
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

        $(sidebar).append('data-station-id=' + fuel_station.id + '>' + fuel_station.station_name);

          // '<li><a class="icon icon-data station-item" data-station-id=' + fuel_station.id + '>' + fuel_station.station_name + '</a></li>');
      });
    });
    Search.addCloseListeners();
  };

  Search.addCloseListeners = function() {
    // var container = $('.st-container');
    // $(".st-pusher").click(function (e) {
    //   container.removeClass('st-menu-open');
    // });
  };

  $("#search-submit").click(function (e) {
    Search.performSearch();
  });

  $("#search-input").keypress(function (e) {
    if (e.keyCode == 13) {
      Search.performSearch();
    };
  });
});
