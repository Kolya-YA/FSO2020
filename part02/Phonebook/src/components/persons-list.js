import React from 'react'

const PersonsList = ({ persons, filter, delPerson }) => {

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <>
    <h3>Numbers</h3>
    <ul>
      {personsToShow.map(person => (
        <li key={person.id}>
          {person.name} — {person.number} 
          <button onClick={() => delPerson(person)}>Delete</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default PersonsList