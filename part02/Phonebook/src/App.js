import React, { useEffect, useState } from 'react'
import Filter from './components/filter'
import PersonsList from './components/persons-list'
import AddPersonForm from './components/add-person-form'
import Notification from './components/notofication'
import bookService from './services/bookService'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ personFilter, setFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ topMessage, setTopMessage ] = useState({error: 1, msg: 'test'})

  useEffect(() => {
    bookService.getFullBook()
      .then(response => setPersons(response))
      .catch(err => alert(err))
  }, [])

  const setMessage = (msg, error=0, timeout=5000) => {
    setTopMessage({msg, error})
    setTimeout(() => setTopMessage({msg: '', error: 0}), timeout)
  }

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
        .catch(() => setMessage(`Information of ${newPerson.name} has already removed from server.`, 1, 10000))
    } else {
      bookService.newRecord(newPerson)
      .then(response => {
        setMessage(`Added ${response.name}.`)
        setPersons(persons.concat(response))}
      )
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
      <Notification msg={topMessage.msg} err={topMessage.error} />
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