import axios from 'axios'
const serverURL = 'http://localhost:3001/persons'

const getFullBook = () => {
  const req = axios.get(serverURL)
  return req.then(response => response.data)
}

const newRecord = newPerson => {
  const req = axios.post(serverURL, newPerson)
  return req.then(response => response.data)
}

const updateRecord = (updatedPerson, id) => {
  console.log(updatedPerson, id)
  const req = axios.put(`${serverURL}/${id}`, updatedPerson)
  return req.then(response => response.data)
}

const delRecord = id => axios.delete(`${serverURL}/${id}`)

export default { getFullBook, newRecord, updateRecord, delRecord }