import React from 'react'

const CountryCard = ({ country }) => {

  return (
    <section>
      <h2>{country.name}</h2>
      <p>Capital: <strong>{country.capital}</strong></p>
      <p>Population: <strong>{country.population}</strong></p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map(lng => (
          <li key={lng.iso639_1}>{lng.name}</li>
        ))}
      </ul>
      <h3>Flag</h3>
      <img src={country.flag} alt='flag' width='200' />
      <h3>Weather in {country.capital}</h3>
      <ul>
        <li>Temperature:</li>
        <li>Icon</li>
        <li>Wind: </li>
      </ul>
    </section>
  );
}

export default CountryCard