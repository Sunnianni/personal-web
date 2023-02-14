function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
         mapId: "5ee2a9f7e1c4bed8",
   center: {lat: 49.006889, lng: 8.403653},
    zoom: 14,
    backgroundColor: "white"
  });   
    
        
    new google.maps.Marker({
    position: {lat: 49.008610, lng: 8.415310},
    map,
    
  });
    
    new google.maps.Marker({
    position: {lat: 49.00858688354492  , lng: 8.41546630859375},
    map,
    
  });

    new google.maps.Marker({
    position: {lat: 49.0074452, lng: 8.3840552},
    map,
    
  });
    
        new google.maps.Marker({
    position: {lat: 49.0078222, lng: 8.4104745},
    map,
    
  });
    
     new google.maps.Marker({
    position: {lat: 49.0112287, lng: 8.3994108},
    map,
    
  });
    
    new google.maps.Marker({
    position: {lat: 49.0135049, lng: 8.4235426},
    map,
    
  });
    
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading"><img src="1.jpg" width="350" height="250"></h1>' +
    '<div id="bodyContent">' +
    "<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Adlerstrase 32, 76133</b></h1>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: {lat: 49.008610  , lng: 8.415310},
  });
  const marker = new google.maps.Marker({
    position: {lat: 49.008610  , lng: 8.415310},
    map,

  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });  
    
const contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading"><img src="2.jpg" width="400" height="350"></h1>' +
    '<div id="bodyContent">' +
    "<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Brunnenstrase 11</b></h1>" +
    "</div>" +
    "</div>";
  const infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    ariaLabel:  {lat: 49.00858688354492  , lng: 8.41546630859375},
  });
  const marker2 = new google.maps.Marker({
    position:  {lat: 49.00858688354492  , lng: 8.41546630859375},
    map,
   
  });

  marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
    });
  });
    
     const contentString3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading"><img src="3.jpg" width="300" height="300"></h1>' +
    '<div id="bodyContent">' +
    "<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Moningerstrase 5, 76135 </b></h1>" +
    "</div>" +
    "</div>";
  const infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
    ariaLabel: {lat: 49.0074452, lng: 8.3840552},
  });
  const marker3 = new google.maps.Marker({
    position: {lat: 49.0074452, lng: 8.3840552},
    map,

  });

  marker3.addListener("click", () => {
    infowindow3.open({
      anchor: marker3,
      map,
    });
  });  
    
       const contentString4 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading"><img src="4.jpg" width="200" height="200"></h1>' +
    '<div id="bodyContent">' +
    "<h1><b> Markgrafenstrase 27, 76131</b></h1>" +
    "</div>" +
    "</div>";
  const infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
    ariaLabel: {lat: 49.0078222, lng: 8.4104745},
  });
  const marker4 = new google.maps.Marker({
    position: {lat: 49.0078222, lng: 8.4104745},
    map,

  });

  marker4.addListener("click", () => {
    infowindow4.open({
      anchor: marker4,
      map,
    });
  }); 
    
    const contentString5 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading"><img src="5.jpg" width="270" height="350"></h1>' +
    '<div id="bodyContent">' +
    "<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Waldstrase 2, 76133</b></h1>" +
    "</div>" +
    "</div>";
  const infowindow5 = new google.maps.InfoWindow({
    content: contentString5,
    ariaLabel: {lat: 49.0112287, lng: 8.3994108},
  });
  const marker5 = new google.maps.Marker({
    position: {lat: 49.0112287, lng: 8.3994108},
    map,

  });

  marker5.addListener("click", () => {
    infowindow5.open({
      anchor: marker5,
      map,
    });
  }); 
    
      const contentString6 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading"><img src="6 copy.jpg" width="250" height="250"></h1>' +
    '<div id="bodyContent">' +
    "<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Edelsheimstrase 5, 76131</b></h1>" +
    "</div>" +
    "</div>";
  const infowindow6 = new google.maps.InfoWindow({
    content: contentString6,
    ariaLabel: {lat: 49.0135049, lng: 8.4235426},
  });
  const marker6 = new google.maps.Marker({
    position: {lat: 49.0135049, lng: 8.4235426},
    map,

  });

  marker6.addListener("click", () => {
    infowindow6.open({
      anchor: marker6,
      map,
    });
  }); 
    
} 






window.initMap = initMap;


