//Age Category 
var prompt = require("prompt-sync")();

let age = prompt("what's your age" );

if (age < 12) {
    console.log("child");
}else if (age >= 12 && age <= 20) {
    console.log("Teenager");
}else if (age > 20) {
    console.log("Adult");
}