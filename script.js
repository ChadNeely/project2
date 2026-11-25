"use strict";

window.initMap = function () {
  var mapElement = document.getElementById("map");

  if (!mapElement || typeof google === "undefined" || !google.maps) {
    return;
  }

  var grandIsland = { lat: 46.5122, lng: -86.6808 };
  var map = new google.maps.Map(mapElement, {
    center: grandIsland,
    zoom: 11,
    mapTypeControl: true,
    zoomControl: true,
    streetViewControl: false
  });

  var marker = new google.maps.Marker({
    position: grandIsland,
    map: map,
    title: "Grand Island National Recreation Area",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: "#d88a3d",
      fillOpacity: 1,
      strokeColor: "#123b52",
      strokeWeight: 3
    }
  });

  var infoWindow = new google.maps.InfoWindow({
    content: "<strong>Grand Island National Recreation Area</strong><br>Munising, Michigan"
  });

  marker.addListener("click", function () {
    infoWindow.open({ map: map, anchor: marker });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var questionsButton = document.getElementById("questions-button");

  if (questionsButton) {
    questionsButton.addEventListener("click", function () {
      alert("If you have questions, contact me at:\ncneely@hawk.iit.edu");
    });
  }

  var mapElement = document.getElementById("map");
  if (mapElement && typeof google === "undefined") {
    var mapsScript = document.createElement("script");
    mapsScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";
    mapsScript.async = true;
    document.head.appendChild(mapsScript);
  }
});
