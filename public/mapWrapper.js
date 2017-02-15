var MapWrapper = function(coords, zoom, container){

  // var container = document.getElementById('main-map');


  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: zoom
  });
}

MapWrapper.prototype = {

  addMarker: function(coords, content){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });

    var infoWindow = new google.maps.InfoWindow({
      content: content,
      map: this.googleMap
    });

    marker.addListener('click', function(){
      infoWindow.open(this.map, marker);
    }.bind(this));
  },


  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = { lat: event.latLng.lat(), lng: event.latLng.lng()}
      this.addMarker(position);
    }.bind(this));
  }

  // handleButtonClick: function(newCenter){
  //  this.googleMap.setCenter(newCenter)

  };

