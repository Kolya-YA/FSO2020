import React from 'react'

const PersonForm = ({ 
  newName, 
  newPhone, 
  addNewPerson,
  handleNewName,
  handleNewPhone
}) => (
  <form onSubmit={addNewPerson}>
    <div>
      <label>Name: 
        <input
          type='text'
          value={newName}
          onChange={handleNewName}
        />
      </label><br />
      <label>Phone: 
        <input
          type='tel'
          value={newPhone}
          onChange={handleNewPhone}
        />
      </label>
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
)

export default PersonForm