import React from 'react'

const PersonsList = ({ persons, filter }) => {
  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <>
    <h3>Numbers</h3>
    <ul>
      {personsToShow.map(person => (
        <li key={person.name}>
          {person.name} — {person.number} 
          <button onClick={null}>Del</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default PersonsList