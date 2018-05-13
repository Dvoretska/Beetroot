function initMap() {
  var uluru = { lat: 50.449189, lng: 30.516672 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var myIcon = 'assets/img/beetroot.png';
  var marker = new google.maps.Marker({
    position: uluru,
    icon: myIcon,
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
