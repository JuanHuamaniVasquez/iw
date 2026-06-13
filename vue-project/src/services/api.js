import axios from 'axios'

const api = axios.create({
  baseURL: '/api'
})

export const getEnrollmentCertificates = async (cui) => {
  const response = await api.get('/enrollment-certificate/', {
    params: { cui }
  })
  return response.data
}