import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const btnLabel = note.important
    ? 'True'
    : "False"
  
  return (
    <li>
      {note.content} 
      <button onClick={toggleImportance}>{btnLabel}</button>
    </li>
  )
}

export default Note