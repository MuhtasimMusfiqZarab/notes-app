const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

//Create a command
yargs.command({
  command: "add",
  describe: " add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "This is the body",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  }
});

// remove a command
yargs.command({
  command: "remove",
  describe: " remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true
    },
    body: {
      describe: "This is the body",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    console.log("Removing a note! ", argv);
  }
});
// List command
yargs.command({
  command: "list",
  describe: " list all  note",
  handler: () => {
    console.log("List all note! ");
  }
});
// read a command
yargs.command({
  command: "read",
  describe: " read a note",
  handler: () => {
    console.log("Reading a note! ");
  }
});

yargs.parse();

// learining Things

const dataBuffer = fs.readFileSync("1-json.json"); // this one reads file and returns buffer
const dataJSON = dataBuffer.toString(); // buffer is converted to original JSON
const user = JSON.parse(dataJSON); // this converts JSON to data object
user.name = "Zarab";
user.age = 25;
const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
// console.log(data);
