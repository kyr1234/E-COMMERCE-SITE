import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-bd2b2/us-central1/api', //cloud functions
})

export default instance
