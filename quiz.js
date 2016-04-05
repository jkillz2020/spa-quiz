"use strict"

var CarLot2 = function populatePage (inventory) {
  let output = '<div class = "card"><section><p class = "text">' + input.value + '</p></section><input type = "button" class = "delete" value = "delete"></div>'
    container.innerHTML += output
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.inventoryLoader(CarLot2);