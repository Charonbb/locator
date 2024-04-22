function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: -34.397, lng: 150.644}
    });
  
    document.getElementById('getLocationBtn').addEventListener('click', function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
  
          var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: 'Вы здесь'
          });
  
          map.setCenter(pos);
        });
      } else {
        alert('Геолокация не поддерживается вашим браузером');
      }
    });
  }