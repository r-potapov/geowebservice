$(document).ready(function(){
  resetmap();
});
  var map, infoWindow;
  var geocoder;
  function resetmap()
  {
    var myOptions = {
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_new"), myOptions);
	var geocoder = new google.maps.Geocoder();
	address = "Волгоград";
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
		}
	});	
	google.maps.event.addListener(map, 'click', function(event) {
		//placeMarker(event.latLng);
		geocoder.geocode( { 'location': event.latLng}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			document.getElementById("mapcontent").innerHTML = results[0].geometry.location.toUrlValue()+" "+results[0].formatted_address;
		}
	});
    for (var i = 0; i < markers.length; i++)
	  if (infoWindow) { infoWindow.close(map, markers[i]); }
	});
 };