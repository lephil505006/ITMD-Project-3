
function initMap() {
  const cantho = { lat: 10.0452, lng: 105.7469 };
  const danang = { lat: 16.0545, lng: 108.1717 };
  const hanoi = { lat: 21.0278, lng: 105.8342 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: cantho,
  });
  
  const marker = new google.maps.Marker({
    position: cantho,	
    map: map,
  });
  
  const marker_two = new google.maps.Marker({
    position: danang,	
    map: map,
  });
}

window.initMap = initMap;