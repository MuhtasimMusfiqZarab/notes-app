const fs = require("fs");

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

const savenotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNote: getNote,
  addNote: addNote
};
