import React from 'react'

const Filter = ({ filter, setFilter}) => {

  const filterHandler = (event) => {
    setFilter(event.target.value)
  }

  return (
    <form>
      <label>Filter 
        <input 
          type='text'
          value={filter}
          onChange={filterHandler}
        />
      </label>
    </form>
  )
}

export default Filter