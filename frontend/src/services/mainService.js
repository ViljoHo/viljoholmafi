import axios from 'axios'
//const baseUrlComments = 'http://localhost:3001/api/comments'
//const baseUrlScores = 'http://localhost:3001/api/scores'
const baseUrlComments = '/api/comments'
const baseUrlScores = '/api/scores'



let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAllComments = () => {
    const request = axios.get(baseUrlComments)
    return request.then(response => response.data)
  }

const createComment = async newObject => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrlComments, newObject, config)
  return response.data
}

const deleteComment = async (id) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.delete(`${baseUrlComments}/${id}`, config)
  return response.data

}

const getAllScores = () => {
    const request = axios.get(baseUrlScores)
    return request.then(response => response.data)
  }

const createScore = async newObject => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrlScores, newObject, config)
  return response.data
}



export default { getAllComments, getAllScores, createComment, createScore, setToken, deleteComment }