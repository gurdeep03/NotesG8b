import React from "react";
import delete_icon from "./assets/icons8-delete.svg";
import "./Note.css";

const Note = ({id, text, date, handleDeleteNote}) => {
    return (
        <div className="note">
            <h4>{text}</h4>
            <div className="note-footer">
                <small className="date">{date}</small>
                <img src={delete_icon} alt="delete" className="delete-icon" onClick={() => handleDeleteNote(id)}/>
            </div>
        </div>
    );
};

export default Note;