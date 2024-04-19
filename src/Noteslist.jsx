import React from "react";
import Note from "./Note";
import "./Noteslist.css";
import Addnotes from "./Addnotes";

const NotesList = ({notes_data, handleAddNote, handleDeleteNote}) => {
  return (
    <div className="notes-list">
      {notes_data.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote = {handleDeleteNote}/>
      ))}
      <Addnotes handleAddNote = {handleAddNote}/>
    </div>
  );
};

export default NotesList;