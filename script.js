"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var questionsButton = document.getElementById("questions-button");

  if (questionsButton) {
    questionsButton.addEventListener("click", function () {
      alert("If you have questions, contact me at:\ncneely@hawk.iit.edu");
    });
  }

});
