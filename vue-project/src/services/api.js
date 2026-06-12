import axios from 'axios'

const api = axios.create({
  baseURL: '/api',  // Usa el proxy
  headers: {
    'Content-Type': 'application/json'
  }
})
