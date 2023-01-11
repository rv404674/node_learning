// const utils = require("./utils")
const fileSystem = require("fs")
const notes = require("./notes");
// const helloWorld = require("../helloWorld")

// NOTE: to use any library in node, you have to use require to load it
//  and store it in a variable.


// fileSystem.writeFileSync("notes.txt", 'This file was created by Node.js');
// to append to the file
// fileSystem.appendFileSync("notes.txt", " Appended a line");
console.log(utils.add(1,5));
console.log(utils.name);

console.log("My Notes are" + " " + notes.getNotes());
