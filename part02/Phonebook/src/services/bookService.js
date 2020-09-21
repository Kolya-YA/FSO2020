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

const updateRecord = (updatedPerson) => {
  const req = axios.put(`${serverURL}/${updatedPerson.id}`, updatedPerson)
  return req.then(response => response.data)
}

const delRecord = delPerson => {
  const req = axios.delete(serverURL, delPerson)
  return req.then(response => response.data)
}

export default { getFullBook, newRecord, updateRecord, delRecord }