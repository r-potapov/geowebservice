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
    map = new google.maps.Map(document.getElementById("map"), myOptions);
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
			document.getElementById("content").innerHTML = results[0].geometry.location.toUrlValue()+" "+results[0].formatted_address;
		}
	});
    for (var i = 0; i < markers.length; i++)
	  if (infoWindow) { infoWindow.close(map, markers[i]); }
	});
	// Adding a markers
    var markers = new Array();
    // Adding a marker 0
    markers.push(new google.maps.Marker({ 
      position: new google.maps.LatLng(48.694881, 44.496095), 
      map: map, 
      title: 'Остановка «Гостиница «Южная»',
	  icon: 'icons/embassy.png'
    }));
    // Adding a marker1 
    markers.push(new google.maps.Marker({ 
      position: new google.maps.LatLng(48.696254, 44.498534), 
      map: map, 
      title: 'Остановка «Казачий театр»',
	  icon: 'icons/embassy.png'
    }));
    // Adding a marker2
    markers.push(new google.maps.Marker({ 
      position: new google.maps.LatLng(48.709603, 44.519883), 
      map: map, 
      title: 'Остановка «Ул.Комсомольская»',
	  icon: 'icons/embassy.png'
    }));
    // Adding a marker3
    markers.push(new google.maps.Marker({ 
      position: new google.maps.LatLng(48.771, 44.5671), 
      map: map, 
      title: 'Остановка «Монолит»',
	  icon: 'icons/embassy.png'
    }));
    // Adding a marker4
    markers.push(new google.maps.Marker({ 
      position: new google.maps.LatLng(48.582855, 44.423342), 
      map: map, 
      title: 'Остановка «ул.Тополевая»',
	  icon: 'icons/embassy.png'
    }));
    // Adding a marker5
    markers.push(new google.maps.Marker({ 
      position: new google.maps.LatLng(48.513333, 44.569906), 
      map: map, 
      title: 'Остановка «ул.Марийская»',
	  icon: 'icons/embassy.png'
    }));
    // Adding a content
    var content = new Array();
    // Creating the content   
    content.push("<div id='info'><h3>Продажа проездных</h3><img src='img/squirrel.jpg' alt='' /><p>социальные + школьные</p></br><p><a href='http://gortransvolga.ru/'>МУП «МЕТРОЭЛЕКТРОТРАНС»</a></p></div>"); 
    content.push("<div id='info'><h3>Продажа проездных</h3><img src='img/squirrel.jpg' alt='' /><p>социальные + школьные</p></br><p><a href='http://gortransvolga.ru/'>МУП «МЕТРОЭЛЕКТРОТРАНС»</a></p></div>"); 
    content.push("<div id='info'><h3>Продажа проездных</h3><img src='img/squirrel.jpg' alt='' /><p>социальные + школьные</p></br><p><a href='http://gortransvolga.ru/'>МУП «МЕТРОЭЛЕКТРОТРАНС»</a></p></div>"); 
    content.push("<div id='info'><h3>Продажа проездных</h3><img src='img/squirrel.jpg' alt='' /><p>школьные + именные + социальные</p></br><p><a href='http://gortransvolga.ru/'>МУП «МЕТРОЭЛЕКТРОТРАНС»</a></p></div>"); 
    content.push("<div id='info'><h3>Продажа проездных</h3><img src='img/squirrel.jpg' alt='' /><p>школьные + именные + социальные</p></br><p><a href='http://gortransvolga.ru/'>МУП «МЕТРОЭЛЕКТРОТРАНС»</a></p></div>"); 
    content.push("<div id='info'><h3>Продажа проездных</h3><img src='img/squirrel.jpg' alt='' /><p>социальные + школьные</p></br><p><a href='http://gortransvolga.ru/'>МУП «МЕТРОЭЛЕКТРОТРАНС»</a></p></div>");

  for (var i = 0; i < markers.length; i++)
  {
    (function(i, markers) {
	google.maps.event.addListener(markers[i], 'click', function() {
      // Check to see if an InfoWindow already exists 
      if (!infoWindow) { 
        infoWindow = new google.maps.InfoWindow(); 
      }
      // Setting the content of the InfoWindow 
      infoWindow.setContent("<h2>" + markers[i].title + "</h2>" + content[i]); 
      // Opening the InfoWindow 
      infoWindow.open(map, markers[i]);
     });
    // Triggering the click event
    // google.maps.event.trigger(markers[0], 'click');
    })(i, markers);
  }
 };