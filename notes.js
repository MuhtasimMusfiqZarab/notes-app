const fs = require("fs");

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

  //checking duplicate notes
  const newNotes = notes.filter(note => {
    return note.title !== title;
  });
  //saving the new notes
  savenotes(newNotes);
  console.log(`The note for title: ${title} is removed`);
};

module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote
};
