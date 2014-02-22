jQuery(document).ready(function() {
  var Search = {};

  Search.performSearch = function() {
    var container = $('.st-container');
    container.addClass('st-menu-open');
    container.addClass('st-effect-2');

    Search.searchInput = $("#search-input").val();
    Search.route = "/api/alt-fuel-stations/v1/nearest.json?api_key=DEMO_KEY&location=" + Search.searchInput ;
    
    $.getJSON( "http://developer.nrel.gov" + Search.route , function(data) {
      console.log(data.fuel_stations[0]);

      var list = $(".listings");
      list.empty();
       if (data.length === 0) {
          $(list).append("<li class='no-results'> Nothing Found </li>)");
          var map = Map.mappy;
          map.setView([ 40.48086, -85.339523 ], 4);
      };
        
      $.each(data, function(index, station){
        if (index == 0) {
          var map = Map.mappy;
          map.setView([ data.latitude, data.longitude], 11);
        };

        var markerLayer = Map.addMarkerToLayer(station).addTo(Map.mappy);

        markerLayer.eachLayer(function (layer) {
          var content = Map.addPopupToLayer(layer);
          layer.bindPopup(content, {
            closeButton: false });
          layer.on('click', function(e) {
            mappy.setView(e.latlng);
          });
        });

        $(list).append('<li><a class="icon icon-data station-item" data-station-id=' + station.id + '>' + station.name + '<p class="smaller"> <strong>' + station.address.street + '</strong> ' + station.address.city + ', ' + station.address.state + '</p></a></li>');
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

// KigYxE5IUwsFlhOF3hjkpR8J0bx8sSTw8r5vfyYx


