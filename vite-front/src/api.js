import axios from 'axios'
import config from '@/config.js'

export const HTTP = axios.create({
  baseURL: config.MOCK,
})

export default {
  async getPopularFilms() {
    try {
      const response = await HTTP.get('/popular')
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getCategories() {
    try {
      const response = await HTTP.get('/category')
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getFilms() {
    try {
      const response = await HTTP.get('/film')
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getFilm(id) {
    try {
      const response = await HTTP.get(`/film/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getCategory(id) {
    try {
      const response = await HTTP.get(`/category/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getDecades() {
    try {
      const response = await HTTP.get('/decade')
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getDecade(id) {
    try {
      const response = await HTTP.get(`/decade/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
}
