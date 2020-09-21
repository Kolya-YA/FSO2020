import React from 'react'

const AddPersonForm = ({ 
  newName, 
  newPhone, 
  addNewPerson,
  handleNewName,
  handleNewPhone
}) => (
  <>
    <h3>Add a new person</h3>
    <form onSubmit={addNewPerson}>
      <div>
        <label>Name  
          <input
            type='text'
            value={newName}
            onChange={handleNewName}
          />
        </label><br />
        <label>Phone  
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
  </>
)

export default AddPersonForm