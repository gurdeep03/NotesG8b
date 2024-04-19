import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Noteslist from './Noteslist'
import Search from './Search'

function App() {
  

  const [notes, setNotes] = useState([
  ]);

  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    console.log("retrieve",savedNotes);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    console.log(notes);
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const new_note = {
      id: Math.random().toString(),
      text: text,
      date: date.toLocaleDateString()
    }
    const new_notes = [...notes, new_note];
    setNotes(new_notes);
  }

  const deleteNote = (id) => {
    const new_notes = notes.filter((note) => note.id !== id);
    setNotes(new_notes);
  }

  const [searchText, setSearchText] = useState('');

  return (
    <>
      <div className="container">
        <Search handleSearchNote={setSearchText} />
        <Noteslist
          notes_data={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
      </div>
    </>
  )
}

export default App
