"use strict";
var CarLot = (function () {
  var privateInventory = [];

  return {
    loadCars: function (listCars) {
      //create XHR to load cars
      var loader = new XMLHttpRequest();
      loader.open("GET", "inventory.json");
      loader.send();
      //add event listener for "load" and set anonymous callback function
      loader.addEventListener("load", function () {
      privateInventory = JSON.parse(this.responseText).cars;

      listCars(privateInventory);
      });
      //set value to private array
         },
    //set public getter
    getInventory: function() {
        return privateInventory; 
      },

   // listCars: function() 
 };
}());

//CarLot.loadCars();
//CarLot.listCars();