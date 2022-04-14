// Initialize and add the map
function initMap() {
  // The location of Uluru
  const cantho = { lat: 10.0452, lng: 105.7469 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: cantho,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: cantho,
    map: map,
  });
}

window.initMap = initMap;