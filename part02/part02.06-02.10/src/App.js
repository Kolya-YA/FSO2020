import React, { useState } from 'react'
import Filter from './components/filter'
import PersonsList from './components/persons-list'
import PersonForm from './components/person-form'

const App = (props) => {
  const [ persons, setPersons ] = useState(props.persons) 
  const [ personFilter, setFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    const notNewPerson = persons.some(person => person.name === newName)
    if (notNewPerson) alert(`${newName} is already added to phonebook`)
    else {
      const newPerson = {
        name: newName,
        phone: newPhone
      }
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewPhone('')
    setFilter('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filter={personFilter}
        setFilter={setFilter}
      />
      <h3>Add a new person</h3>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        addNewPerson={addNewPerson}
        handleNewName={handleNewName}
        handleNewPhone={handleNewPhone}
      />
      <h3>Numbers</h3>
      <PersonsList persons={persons} filter={personFilter}/>
    </div>
  )
}

export default App