import axios from "axios"
//const baseUrl = 'http://localhost:3001/api/users'
const baseUrl = '/api/users'

const toRegister = async credentials => {
    console.log('tying to register with', credentials)
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { toRegister }