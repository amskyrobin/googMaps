var initialize = function(){
  var zoom = 10;
  var center = {lat:10, lng: 45};
  var newCenter = {lat:12, lng: 77};
  var container = document.getElementById('main-map');
  var mainmap = new MapWrapper(center, zoom, container);
  var content = "hello world";
  // var infoWindow = new InfoWindow(content, pixelOffset, center, maxWidth);
  var button = document.querySelector('button');
  
  // button.onclick = handleButtonClick;


  mainmap.addMarker(center, content);
  mainmap.addClickEvent();
  // mainmap.handleButtonClick(newCenter);
}

window.onload = initialize;



//to add button 
//var button = document.createElement('button');
//var body = document.body;
//body.appendChild(button);