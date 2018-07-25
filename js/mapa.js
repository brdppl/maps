var map;
 
function initialize() {
    var latlng = new google.maps.LatLng(-30.018287, -51.168233999999984);
 
    var options = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    map = new google.maps.Map(document.getElementById("mapa"), options);
}
initialize();

// var markers = [];
// function carregarPontos() {
//     $.getJSON('json/pontos.json', function(pontos) {
//         $.each(pontos, function(index, ponto) {
//             var marker = new google.maps.Marker({
//                 position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
//                 title: "Meu ponto personalizado! :-D",
//                 map: map
//             });
//             markers.push(marker);
//             // console.log('log: ', marker);
//         });
//         var options = {
//             imagePath: 'images/m'
//         };
//         var markerCluster = new MarkerClusterer(map, markers, options);
//     });
// }
// carregarPontos();

var marker = new google.maps.Marker({
	position: new google.maps.LatLng(-30.018287, -51.168233999999984),
	map: map,
	draggable: true
});

var searchBox = new google.maps.places.SearchBox(document.getElementById('mapsearch'));

google.maps.event.addListener(searchBox, 'places_changed', function() {
	var places = searchBox.getPlaces();

	var bounds = new google.maps.LatLngBounds();
	var i, place;

	for (i = 0; place = places[i]; i++) {
		bounds.extend(place.geometry.location);
		marker.setPosition(place.geometry.location);
	}

	map.fitBounds(bounds);
	map.setZoom(20);

	console.log('bounds: ', bounds);
});