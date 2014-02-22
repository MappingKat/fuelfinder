var Modal = {};
Modal.addModalListener = function(station_data, val){
  var station = station_data.station
  // for( i = 0; i < station.payment_types.length; i++) {
  //   payment.push(val.payment_types[i]);
  // };

  // for( i = 0; i < station.products.length; i++) {
  //   products.push(val.products[i]);
  // };
   var html = '<h3 class="name">' + station.name + '</h3>' + '<hr>' 
// '+ <div class="address">' + station.address.street + '</br>' + station.address.city + ', ' + station.address.state + '</div>' +
// '<div class="payments"><img src="assets/payment.png">' + payment.join(' ✤ ') + '<img src="assets/payment.png"></div>' + '<div class="products"><img src="assets/product.png">' + products.join(' ✿  ') + '<img src="assets/product.png"></div>';

  $(".md-content").html(html);
  $("#modal").show();
  $(".modal-close").click(function (e){
    $('#modal').hide();
  });
};

