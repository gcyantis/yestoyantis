/*==============================
	- MAP JS (DEFAULT MARKER)
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

(function($) {

'use strict';


	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});


	//INITIALIZE MAP
	function initialize() {

		// Create an array of styles
		//=======================================================================================
  		var styles = [
    		{
      			stylers: [
        			{ hue: "#2c521c" }, // 035238 2c521c
        			{ saturation: -50 }
      			]
    		}
  		];

		// Create a new StyledMapType object, passing it the array of styles,
  		// as well as the name to be displayed on the map type control.
  		var styledMap = new google.maps.StyledMapType(styles,
   			{name: "Styled Map"});


		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 11, // 15
			mapTypeId: google.maps.MapTypeId.ROADMAP,
    		center: new google.maps.LatLng(37.747782,-77.224149), //37.6407744,-77.3847207,11.75z - 37.747782,-77.224149
			panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
			//rotateControl:true,
			scrollwheel: false,

  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas-3'), mapOptions);

		//Associate the styled map with the MapTypeId and set it to display.
 		 map.mapTypes.set('map_style', styledMap);
 		 map.setMapTypeId('map_style');

		 //MARKER ICON
 		//=======================================================================================
 		var image = 'images/venue-marker-sm.png';

 		//ADD NEW MARKER
 		//=======================================================================================
   		var marker1 = new google.maps.Marker({
     		position: new google.maps.LatLng(37.747782,-77.224149),
    		 	map: map,
     		title: 'Seven Springs',
 			icon: image
   		});

			//INFO WINDOWS 1
			//=======================================================================================
			var contentString1 = ''+
			'<div class="info-window-wrapper">'+
				'<h6>CEREMONY & RECEPTION</h6>'+
				'<div class="info-window-desc"></div>'+
				'<div class="info-window-link"><a target="_blank" href="https://www.google.com/maps/place/Seven+Springs/@37.7477818,-77.2241493,15z/data=!4m12!1m6!3m5!1s0x89b127078f5668e9:0x524165f6d30799b1!2sSeven+Springs!8m2!3d37.7477465!4d-77.224153!3m4!1s0x89b127078f5668e9:0x524165f6d30799b1!8m2!3d37.7477465!4d-77.224153" class="grey-link with-underline">View in Google Maps</a></div>'+
	      	'</div>';

			var marker1_infowindow = new google.maps.InfoWindow({
	      		content: contentString1,
				maxWidth: 200,
				pixelOffset: new google.maps.Size(0,-10)
	  		});

			//OPEN INFO WINDOWS ON LOAD
	  		marker1_infowindow.open(map,marker1);

			//ON MARKER CLICK EVENTS
			google.maps.event.addListener(marker1, 'click', function() {
				marker1_infowindow.open(map,marker1);
	  		});


		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);


})(jQuery);
