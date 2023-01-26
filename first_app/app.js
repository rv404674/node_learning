const Logger = require("./logger");
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


// const emitter = new EventEmitter();
// // NOTE: you need to register a listener that will listen for the event.
//
// // Register a listener
// emitter.on('messageLogged', function(arg){
//     console.log('Listener called', arg);
// });
//
// // FIXME: the ordering of these statements is important.
// //  when you emit an event, emitter goes over all the registered listeners
// // and calls them synchronously.
// // you can pass event arguements as well.
// emitter.emit('messageLogged', { id: 1, url: 'https://'});
//
// // A simpler way of writing listener.
// emitter.on('firstProgram', (arg) => {
//     // here the code that you want
//     console.log('First program listener called', arg);
// });
//
// // raise a second event
// emitter.emit('firstProgram', {type:'Nodejs', difficulty:10});

// FIXME: emitting an event and listening to the event, should be part of the same object.
const logger = new Logger();
// register a listener
logger.on('messageLogged', (arg) => {
    console.log('Logger listener called', arg);
});

logger.log('message');

// NOTE: http server
const http = require("http");
const server = http.createServer( (req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// Server will start listening on port 3000
// it is based on event emitter flow.
server.listen(3000);

console.log('Listening on port 3000');










