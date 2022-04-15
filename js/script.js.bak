
function initMap() {
  const cantho = { lat: 10.0452, lng: 105.7469 };
  const danang = { lat: 16.0545, lng: 108.1717 };
  const hanoi = { lat: 21.0278, lng: 105.8342 };
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
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
  
  const capital = new google.maps.Marker({
    position: hanoi,
    icon: iconBase + 'sunny.png',
    map: map,
  });
  
  const canthoString =
    '<h1>Can Tho</h1>' +
    'As shown from the other page, ' +
    'This is Can Tho which is known as the "river market" ' +
    'and is where my mother is from ';
  const danangString =
    '<h1>Da Nang</h1>' +
    'This is Da Nang which is more farm based compared to other cities ' +
    'It is very rural and also extremely hot reach up 100 degrees F ' +
    'and is where my father is from ';
  const hanoiString =
    '<h1>Hanoi</h1>' +
    'This is the capital of Vietnam ' +
    'There is a lot of culture here coming from places like China and France ';
  const infoCan = new google.maps.InfoWindow({
    content: canthoString,
    });
  const infoDa = new google.maps.InfoWindow({
    content: danangString,
    });
  const infoHan = new google.maps.InfoWindow({
    content: hanoiString,
    });	
	
	marker.addListener("click", () => {
        infoCan.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });

    marker_two.addListener("click", () => {
        infoDa.open({
            anchor: marker_two,
            map,
            shouldFocus: false,
        });
    });
	
	capital.addListener("click", () => {
        infoHan.open({
            anchor: capital,
            map,
            shouldFocus: false,
        });
    });
}

window.initMap = initMap;