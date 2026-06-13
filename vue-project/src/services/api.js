import axios from 'axios'

const api = axios.create({
  baseURL: '/api'
})

export const getEnrollmentCertificates = async (cui) => {
  try {
    const response = await api.get('/enrollment-certificate/', {
      params: { cui }
    })
    console.log('API response:', response.data)
    return response.data
  } catch (error) {
    console.error('API error:', error.response?.data || error.message)
    throw error
  }
}