const logger = require("./logger");
const path = require("path");

function sayHello(name){
    console.log("Hello " + name + " This is my first node program");
}

sayHello("Rahul");
// Use Modular system
// NOTE: Every file in Node is considered as a Module.

logger.log('Logging this to cloud.');

// PATH MODULE
let pathObj = path.parse(__filename);
console.log(pathObj);