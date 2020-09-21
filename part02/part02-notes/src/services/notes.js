import axios from 'axios'
const notesServer = 'http://localhost:3001/notes'

const getAll = () => {
  const request = axios.get(notesServer)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(notesServer, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${notesServer}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }