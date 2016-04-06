"use strict"
var CarLot = (function () {
  var privateInventory = [];

  return {
    loadCars: function () {
      //create XHR to load cars
      var loader = new XMLHttpRequest();
      //add event listener for "load" and set anonymous callback function
      loader.addEventListener("load", function () {
      console.log("loader", loader);
      //set value to private array
      privateInventory = JSON.parse(this.responseText).cars;
      loader.open("GET", "inventory.json");
      loader.send();
    });
  
    }
  }
})();

CarLot.loadCars();

// function listCars(inventory) {
//   var list = document.getElementsByClassName("container");
//   var outputString = "";

//   for (var i = 0; i < inventory.length; i++) {
//     var currentCar = inventory[i];

//     //build DOM string
//     outputString += `<h1>${currentCar.make}</h1>`;
//     outputString += `<h3>${currentCar.model}</h3>`;
//     outputString += `<h5>${currentCar.year}</h5>`;
//     outputString += `<h5>${currentCar.price}</h5>`;
//     outputString += `<h5>${currentCar.color}</h5>`;
//     outputString += `<h5>${currentCar.purchased}</h5>`;
//     outputString += `<h5>${currentCar.description}</h5>`;
//   }
//   
//  list.innerHTML = outputString;
// }

