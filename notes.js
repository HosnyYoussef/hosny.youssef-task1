const fs = require("fs");
const addNote = (id, name, subject, grade) => {
  // you enter it in terminal
  const notes = loadNotes();

  const duplicateTitles = notes.find((obj) => {
    return obj.id === id;
  });

  if (!duplicateTitles) {
    notes.push({
      id,
      name,
      subject,
      grade,
   
    });
///////////////////////////////   print hint 
    if(grade>=90){
        console.log('you are succes')
    }else if(grade<90){
        console.log('you should study hard')
    }

    saveNotes(notes);
    console.log("Saved Successfully");
  } else {
    console.log("Error duplicate id please check it again !");
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const saveData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", saveData);
};

// remove 
const removeNote = (name) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
      
        return note.name !== name
    })

    saveNotes(notesToKeep)
    console.log('Removed')
}

// read command
const readNote = (id) =>{
    const notes = loadNotes()
    const note = notes.find((obj)=>{
      
        return obj.id === id
    })
  
    if (note){
        console.log(note)
        console.log(note.title)
    }
    else {
        console.log('No note is found')
    }
}
// list command
const listNote = () =>{
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(note.name)
    })
}









module.exports = {
  addNote,
  readNote,
  listNote,
  removeNote

};
