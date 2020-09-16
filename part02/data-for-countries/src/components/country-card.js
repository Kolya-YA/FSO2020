import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ( { city }) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  const [ curWeather, setWeather ] = useState()
  console.log('wAPI', curWeather)

  const weatherHook = () => {
    axios
      .get(weatherAPI)
      .then(response => setWeather(response.data))
      .catch(err => console.error(err))
  }

  useEffect(weatherHook, [])

  return (
    <>
      <h3>Now in {city}</h3>
      {curWeather && 
        <ul>
          <li>Temperature: <strong>{curWeather.main.temp} ˚C</strong></li>
          <li>Feels like: <strong>{curWeather.main.feels_like} ˚C</strong></li>
          <li>
            <img src={`http://openweathermap.org/img/wn/${curWeather.weather[0].icon}@4x.png`} alt='weather icon' />
          </li>
          <li>{curWeather.weather[0].main}, {curWeather.weather[0].description}</li>
        </ul>
      }
    </>
  )
}

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
      <Weather city={country.capital} />      
    </section>
  );
}

export default CountryCard