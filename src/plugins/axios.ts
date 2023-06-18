import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://metsenatclub.xn--h28h.uz/api/v1'
})

export default instance
