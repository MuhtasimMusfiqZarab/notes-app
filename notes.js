const fs = require("fs");
const chalk = require("chalk");

//getting notes
const getNote = () => {
  return "Your Note...";
};

//adding to the note array
const addNote = (title, body) => {
  const notes = loadNotes();

  //checking duplicate notes
  const duplicateNote = notes.find(note => note.title == title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    savenotes(notes);
    console.log("new note added");
  } else {
    console.log("No titile taken");
  }
};

//saving note to the JSON
const savenotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// Loading all the notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//Remove notes
const removeNote = title => {
  const notes = loadNotes();

  //Finding the note to remove it
  const newNotes = notes.filter(note => note.title !== title);

  // Check if any note is removed
  if (notes.length > newNotes.length) {
    console.log(chalk.green.inverse(`The note with ${title} title is removed`)); // Inverse uses background instead of Font color
    //saving the new notes
    savenotes(newNotes);
  } else {
    console.log(chalk.red.inverse(`No note is found with title :${title}`));
  }
};

//Listing All notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("My notes"));
  notes.forEach(note => console.log(note.title));
};

//reading a note
const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  console.log(note.body);
};

module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
