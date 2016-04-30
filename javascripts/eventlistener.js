"use strict";
var CarLot = (function(originalCarLot) {
  originalCarLot.activateEvents = function() {
    var currentCar = document.getElementsByClassName("card");
  for (let i = 0; i < currentCar.length; i++){
    let currentInfo = currentCar[i].description;
    currentCar[i].addEventListener("click", function(){
      originalCarLot.removeSelected();
      userinput.value = "";
      userinput.focus();
      currentCar[i].classList.add("selected");
      
      })
     } 
   }  
originalCarLot.removeSelected = function() {
  var currentCar = document.getElementsByClassName("card");
  for (let i = 0; i < currentCar.length; i++){
  currentCar[i].classList.remove("selected");
  }
}

originalCarLot.newDescription = function(){
  userinput.addEventListener("keyup", function(event){
    var currentCar = document.getElementsByClassName("card");
  for (let i = 0; i < currentCar.length; i++){
    if (currentCar[i].classList.contains("selected")) {
      console.log(currentCar[i]);
       currentCar[i].lastElementChild.innerHTML= userinput.value;
        }
      }
  })
}

  return originalCarLot;
  })(CarLot || {});