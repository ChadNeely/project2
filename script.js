"use strict";

window.initMap = async function () {
  var mapElement = document.getElementById("map");

  if (!mapElement || typeof google === "undefined" || !google.maps) {
    return;
  }

  var mapsLibrary = await google.maps.importLibrary("maps");
  var markerLibrary = await google.maps.importLibrary("marker");
  var grandIsland = { lat: 46.5122, lng: -86.6808 };
  var map = new mapsLibrary.Map(mapElement, {
    center: grandIsland,
    zoom: 11,
    mapId: "DEMO_MAP_ID",
    mapTypeControl: true,
    zoomControl: true,
    streetViewControl: false
  });
  var infoWindow = new mapsLibrary.InfoWindow({
    content: "<strong>Grand Island National Recreation Area</strong><br>Munising, Michigan"
  });
  var marker = new markerLibrary.AdvancedMarkerElement({
    map: map,
    position: grandIsland,
    title: "Grand Island National Recreation Area",
    content: new markerLibrary.PinElement({
      background: "#d88a3d",
      borderColor: "#123b52",
      glyphColor: "#123b52"
    })
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
  if (mapElement) {
    var mapsScript = document.createElement("script");
    mapsScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&loading=async&callback=initMap";
    mapsScript.async = true;
    document.head.appendChild(mapsScript);
  }
});
