
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

      CarLot.listCars()

      return privateInventory;
      //console.log("privateInventory", privateInventory);
      });
      //set value to private array
         },
    //set public getter
    getInventory: function() {
        return privateInventory; 
      },

    listCars: function() {
    var list = document.getElementsByClassName("container")[0];
    var outputString = "";
    var populateCars = CarLot.getInventory(); 
    console.log(populateCars);
    for (var i = 0; i < populateCars.length; i++) {
    var currentCar = populateCars[i];

    //build DOM string
    outputString += `<h1>${currentCar.make}</h1>`;
    outputString += `<h3>${currentCar.model}</h3>`;
    outputString += `<h5>${currentCar.year}</h5>`;
    outputString += `<h5>${currentCar.price}</h5>`;
    outputString += `<h5>${currentCar.color}</h5>`;
    outputString += `<h5>${currentCar.purchased}</h5>`;
    outputString += `<h5>${currentCar.description}</h5>`;
  
  
      }
 list.innerHTML = outputString;
    }
 }
}());




CarLot.loadCars();
CarLot.listCars();