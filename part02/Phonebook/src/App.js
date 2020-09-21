import React, { useEffect, useState } from 'react'
import Filter from './components/filter'
import PersonsList from './components/persons-list'
import AddPersonForm from './components/add-person-form'
import bookService from './services/bookService'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ personFilter, setFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  useEffect(() => {
    bookService.getFullBook()
      .then(response => setPersons(response))
      .catch(err => alert(err))
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    const notNewPerson = persons.some(person => person.name === newName)
    if (notNewPerson) alert(`${newName} is already added to phonebook`)
    else {
      const newPerson = {
        name: newName,
        number: newPhone
      }
      bookService.newRecord(newPerson)
        .then(response => setPersons(persons.concat(response)))
        .catch(err => alert(err))      
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
      <AddPersonForm
        newName={newName}
        newPhone={newPhone}
        addNewPerson={addNewPerson}
        handleNewName={handleNewName}
        handleNewPhone={handleNewPhone}
      />
      <PersonsList persons={persons} filter={personFilter}/>
    </div>
  )
}

export default App