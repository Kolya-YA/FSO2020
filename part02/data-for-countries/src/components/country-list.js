import React from 'react'

const CountriesList = ({ countriesList, setFilter }) => (
  <>
    <h3>List of {countriesList.length} countries</h3>
    <ul>
    {countriesList.map(country => (
      <li key={country.alpha2Code}>
        {country.name} 
        <button
          onClick={() => setFilter(country.name)}
        >
          Show more
        </button>
      </li>
    ))}
    </ul>
  </>
)

const CountryList = ({ countries, setFilter }) => {
  return (
    <div>
      {countries.length > 1000
        ? <h3>{countries.length} countries is too many, specify another filter.</h3>
        : <CountriesList countriesList={countries} setFilter={setFilter} />
      }
    </div>
  );
}

export default CountryList