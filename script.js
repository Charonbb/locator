let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  marker = new google.maps.Marker({
    map,
    position: { lat: 0, lng: 0 },
  });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(pos);
        map.setZoom(15); // Приближаем карту
        marker.setPosition(pos);
      },
      () => {
        alert("Ошибка: доступ к геолокации отклонён.");
      }
    );
  } else {
    alert("Ошибка: ваш браузер не поддерживает геолокацию.");
  }
}

document.getElementById("locateBtn").addEventListener("click", getLocation);