import React from 'react'

const PersonsList = ({ persons, filter }) => {
  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <ul>
      {personsToShow.map(person => (
      <li key={person.name}>{person.name} {person.phone}</li>
      ))}
    </ul>
  )
}

export default PersonsList