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
  const duplicateNotes = notes.filter(note => {
    return note.title == title;
  });
  if (duplicateNotes.length == 0) {
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

//
const removeNote = title => {
  const notes = loadNotes();

  //Finding the note to remove it
  const newNotes = notes.filter(note => {
    return note.title !== title;
  });

  // Check if any note is removed
  if (notes.length > newNotes.length) {
    console.log(chalk.green.inverse(`The note with ${title} title is removed`)); // Inverse uses background instead of Font color
    //saving the new notes
    savenotes(newNotes);
  } else {
    console.log(chalk.red.inverse(`No note is found with title :${title}`));
  }
};

module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote
};
