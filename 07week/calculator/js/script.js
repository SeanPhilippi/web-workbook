'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

});

function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function subtraction() {
  document.querySelector("#results").value += "-";
}

function multiplication() {
  document.querySelector("#results").value += "*";
}

function division() {
  document.querySelector("#results").value += "/";
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function posneg(){
  var currentValue = document.getElementById("results").value;
  if (currentValue.charAt(0) != "-")  {
    currentValue = "-" + currentValue;
    document.getElementById("results").value = currentValue;
  } else {
    currentValue = currentValue.substring(1);
    document.getElementById("results").value = currentValue;
  }
}

// function posneg(){
//   var currentValue = document.getElementById("results").value;
//   currentValue = parseInt(currentValue) * -1;
//   document.querySelector("input").value = currentValue;
// }

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
