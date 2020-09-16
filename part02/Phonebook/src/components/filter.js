import React from 'react'

const Filter = ({ filter, setFilter}) => {

  const filterHandler = (event) => {
    setFilter(event.target.value)
  }

  return (
    <form>
      <input 
        type='text'
        value={filter}
        onChange={filterHandler}
      />
    </form>
  )
}

export default Filter