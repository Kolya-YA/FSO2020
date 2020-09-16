import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilterForm from './components/filter-form'
import CountryList from './components/country-list'
import CountryCard from './components/country-card'

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ filterStr, setFilter ] = useState('')

  const countriesHook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
      .catch(err => console.error(err))
  }

  useEffect(countriesHook, [])

  const filtredCountries = countries.filter(
    country => country.name.toLowerCase().includes(filterStr.toLowerCase())
  )

  return (
    <div>
      <FilterForm filterStr={filterStr} setFilter={setFilter} />
      {filtredCountries.length === 1
        ? <CountryCard country={filtredCountries[0]}/>
        : <CountryList countries={filtredCountries} setFilter={setFilter} />
      }
    </div>
  );
}

export default App