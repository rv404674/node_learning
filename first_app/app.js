const logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");
// NOTE: uppercase for both the words in case of class.
const EventEmitter = require("events");

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

// os module
let totalMem = os.totalmem();
let freeMem = os.freemem();

// console.log("Total Memory: " + totalMem);
// NOTE: use template string
console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);


// FileSystem
// NOTE: Fs has both sync and non sycn methonds.
// Always try to use non sync methods.
fs.readdir('./', function (err, files) {
    // NOTE: only one will have a value - error or files
    if(err) console.log('Error', er);
    else console.log('Result', files);
});


const emitter = new EventEmitter();
// NOTE: you need to register a listener that will listen for the event.

// Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
});

// FIXME: the ordering of these statements is important.
//  when you emit an event, emitter goes over all the registered listeners
// and calls them synchronously.
emitter.emit('messageLogged');


















