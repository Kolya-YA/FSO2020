import React from 'react'

const FilterForm = ({ filterStr, setFilter}) => {

  const filterHandler = (event) => {
    setFilter(event.target.value)
  }

  const filterFormHandler = event =>{
    event.preventDefault()
  }

  return (
    <form onSubmit={filterFormHandler}>
      <label>Find countries 
        <input
          type='text'
          value={filterStr}
          onChange={filterHandler}
        />
      </label>
    </form>
  );
}

export default FilterForm