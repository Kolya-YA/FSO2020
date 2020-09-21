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
    const existPerson = persons.find(person => person.name === newName)
    
    if (existPerson && !window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) return
    
    const newPerson = {
      name: newName,
      number: newPhone
    }
    
    if (existPerson) {
      bookService.updateRecord(newPerson, existPerson.id)
        .then(response => {
          setPersons(persons.map(p => p.id !== response.id ? p : response))
        })
        .catch(err => alert(err))
    } else {
      bookService.newRecord(newPerson)
      .then(response => setPersons(persons.concat(response)))
      .catch(err => alert(err))      
    }
    
    setNewName('')
    setNewPhone('')
    setFilter('')
  }

  const delPerson = person => {
    if (window.confirm(`Delete ${person.name}?`)) {      
      if (person.id < 5) {
        alert("Imposible!") // VIP persons!
        return
      }
      bookService.delRecord(person.id)
        .then(setPersons(persons.filter(p => p.id !== person.id)))
        .catch(err => alert(err))
    }
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
      <PersonsList
        persons={persons}
        filter={personFilter}
        delPerson={delPerson}
      />
    </div>
  )
}

export default App