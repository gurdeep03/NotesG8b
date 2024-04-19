import React from "react";
import "./Addnotes.css";
import { useState } from "react";

const Addnotes = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const characterLimit = 200;
  const remainingChar = characterLimit - noteText.length;

  const handleChange = (event) => {
    if (200 - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const saveNote = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note add-note">
      <textarea
        cols="20"
        rows="10"
        placeholder="Type to add note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{remainingChar} remaining</small>
        <button className="save" onClick={saveNote}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Addnotes;
