import axios from "axios"
//const baseUrl = 'http://localhost:3001/api/login'
const baseUrl = '/api/login'

const signin = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { signin }