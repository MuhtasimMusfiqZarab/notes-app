const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

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
    console.log("Title: " + argv.title);
    console.log("body: " + argv.body);
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
