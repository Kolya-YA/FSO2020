import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const notesServer = 'http://localhost:3001/notes'
  
  const jsonNotesHook = () => {
    axios
      .get(notesServer)
      .then(response => {
        setNotes(response.data)
      })
  }

  useEffect(jsonNotesHook, [])

  console.log(`Render ${notes.length} notes`)

  const addNote = (event) => {
    event.preventDefault()
    const newNoteObj = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes(notes.concat(newNoteObj))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => (
          <Note key={note.id} note={note} />)
        )}
      </ul>
      <form onSubmit={addNote}>
        <label>Type a new note<br />
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        </label><br />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App;
