//Bus Capacity

var prompt = require("prompt-sync")();

let passenger = prompt("how many is the passenger" );

if (passenger == 50) {
    console.log("Bus is full");
} else if (passenger > 50) {
    console.log("over capacity");
}