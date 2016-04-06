
var CarLot = (function () {
  var privateInventory = [];

  return {
    loadCars: function () {
      //create XHR to load cars
      var loader = new XMLHttpRequest();
      loader.open("GET", "inventory.json");
      loader.send();
      //add event listener for "load" and set anonymous callback function
      loader.addEventListener("load", function () {
      privateInventory = JSON.parse(this.responseText).cars;
      });
      //set value to private array
console.log("privateInventory", privateInventory);
        }
    },
    getInventory: function() {
        return privateInventory; 
    }
 }
}();

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

