"use strict";
var CarLot = (function(originalCarLot) {
 originalCarLot.listCars = function(populateCars){
    var list = document.getElementsByClassName("container")[0];
    var outputString = "";
    // var populateCars = CarLot.getInventory(); 
    // console.log(populateCars);
    for (var i = 0; i < populateCars.length; i++) {
    var currentCar = populateCars[i];

    //build DOM string
    outputString += `<div class = "col-md-4 card" style = "border: solid 3px ${currentCar.color}"><h1>${currentCar.make}</h1>`;
    outputString += `<h3>${currentCar.model}</h3>`;
    outputString += `<h5>${currentCar.year}</h5>`;
    outputString += `<h5>${currentCar.price}</h5>`;
    outputString += `<h5>${currentCar.color}</h5>`;
    outputString += `<h5>${currentCar.purchased}</h5>`;
    outputString += `<h5>${currentCar.description}</h5></div>`;
  
  
      }
 list.innerHTML = outputString;
CarLot.activateEvents();
    };


    return originalCarLot;
    

   
 })(CarLot || {})




// // Load the inventory and send a callback function to be
// // invoked after the process is complete
CarLot.loadCars(CarLot.listCars);
