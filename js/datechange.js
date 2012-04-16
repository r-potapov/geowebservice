$(document).ready(function (){
  $('#datepicker').click(function(){
    // получаем то, что ввёл пользователь
    var checkString = $('#datepicker').val();
    // если checkString не пуста
    if(checkString) {
        resetmap();
        $('#loading').show();
        // Adding a markers
        var markers = new Array();
        // формируем строку запроса
        var data = "date=" + checkString;
        //$('#datepicker').serialize();
        // делаем ajax запрос
        $.post(
          "GetMarkersbyDate",
          data,
          function(data)
          {
            $('#loading').hide();
            $('#list').html("");
                 $.each(data, function(i, marker) {
                    // Adding a marker
                    markers.push(new google.maps.Marker({ 
                      position: new google.maps.LatLng(marker.position_lat, marker.position_lng), 
                      map: map, 
                      title: marker.title,
                      text: '<div id="info"><h4>' + marker.title + '</h4>' 
                       + '<img class="img_floatleft" src="' + marker.picture_url + '" title="marker picture" />'
                       + '<p>' + marker.description + '</p>'
                       + '<p><a href="/articles/article/' + marker.id + '">Перейти к статье</a></div>',
                	  icon: marker.icon
                    }));
                    
                    $('#list').append('<div><img class="img_floatleft" src="' + marker.picture_url 
                       + '" title="marker picture" />'
                       + '<h3>' + marker.title + '</h3>'
                       + '<p>' + marker.description + '</p></div><div class="clearfix"></div>'
                    );
                    });
                    for (var i = 0; i < markers.length; i++)
                    {
                      (function(i, markers) {
	                  google.maps.event.addListener(markers[i], 'click', function() {
                        // Check to see if an InfoWindow already exists 
                        if (!infoWindow) { 
                          infoWindow = new google.maps.InfoWindow(); 
                        }
                        // Setting the content of the InfoWindow 
                        infoWindow.setContent(markers[i].text); 
                        // Opening the InfoWindow 
                        infoWindow.open(map, markers[i]);
                       });
                      // Triggering the click event
                      // google.maps.event.trigger(markers[0], 'click');
                      })(i, markers);
                    }
          },
        'json'
        );
    }
    return false;
  });
});