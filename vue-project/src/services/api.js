import axios from 'axios'

const api = axios.create({
  baseURL: '/api'
})

export const getEnrollmentCertificates = (cui) => {
  return api.get('/enrollment-certificate', {
    params: { cui }
  })
}