// const utils = require("./utils")
const fileSystem = require("fs")
const getNotes = require("./notes");
const validator = require("validator");
// const helloWorld = require("../helloWorld")

// NOTE: to use any library in node, you have to use require to load it
//  and store it in a variable.


// fileSystem.writeFileSync("notes.txt", 'This file was created by Node.js');
// to append to the fil
// fileSystem.appendFileSync("notes.txt", " Appended a line");
// console.log(utils.add(1,5));
// console.log(utils.name);
//
// console.log("My Notes are" + " " + notes.getNotes());

const msg = getNotes.getNotes();
console.log(msg)

console.log(validator.isEmail("rv404674@gmail.com"));
console.log(validator.isURL("https://io.url"));
