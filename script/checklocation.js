
function checklocation(){


        navigator.geolocation.getCurrentPosition(onSuccess, onError);
		var check = false;

	// Get latitude andlongitute "Position" properties from the geolocation
    //

    function onSuccess(position) {

    	var lat = position.coords.latitude;
    	var lon = position.coords.longitude;
    	check=true;
    }


    // Show an alert if there is a problem getting the geolocation
    //
    function onError() {
        alert('onError!');
    }


if (check==true){
	initilize();


} //eof if


  }  //eof checklocation



  function initialize() {

   var mapProp = {
    center:new google.maps.LatLng(lat,lon),
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);


  //The Marker constructor creates a marker pointingto user's potition
  var marker=new google.maps.Marker({
    position:myCenter,
    });

    marker.setMap(map);

  } //eof initialize