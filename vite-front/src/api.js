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
  async getProducers() {
    try {
      const response = await HTTP.get('/producer')
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getProducer(id) {
    try {
      const response = await HTTP.get(`/producer/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getCountries() {
    try {
      const response = await HTTP.get('/country')
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getCountry(id) {
    try {
      const response = await HTTP.get(`/country/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getUsers() {
    try {
      const response = await HTTP.get('/user')
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async postDecade(data) {
    try {
      const response = await HTTP.post('/decade', data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async postFilm(data) {
    try {
      const response = await HTTP.post('/film', data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async postCategory(data) {
    try {
      const response = await HTTP.post('/category', data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async postProducer(data) {
    try {
      const response = await HTTP.post('/producer', data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async postRating(data) {
    try {
      const response = await HTTP.post('/rating', data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async postCountry(data) {
    try {
      const response = await HTTP.post('/country', data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async postUser(data) {
    try {
      const response = await HTTP.post('/user', data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async postPopular(data) {
    try {
      const response = await HTTP.post('/popular', data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async putDecade(data,id) {
    try {
      const response = await HTTP.put(`/decade/${id}`, data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async putFilm(data,id) {
    try {
      const response = await HTTP.put(`/film/${id}`, data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async putCategory(data,id) {
    try {
      const response = await HTTP.put(`/category/${id}`, data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async putProducer(data,id) {
    try {
      const response = await HTTP.put(`/producer/${id}`, data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async putRating(data,id) {
    try {
      const response = await HTTP.put(`/rating/${id}`, data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async putCountry(data,id) {
    try {
      const response = await HTTP.put(`/country/${id}`, data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async putPopular(data,id) {
    try {
      const response = await HTTP.put(`/popular/${id}`, data)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async deleteDecade(id) {
    try {
      const response = await HTTP.delete(`/decade/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async deleteFilm(id) {
    try {
      const response = await HTTP.delete(`/film/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async deleteCategory(id) {
    try {
      const response = await HTTP.delete(`/category/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async deleteProducer(id) {
    try {
      const response = await HTTP.delete(`/producer/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async deleteRating(id) {
    try {
      const response = await HTTP.delete(`/rating/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async deleteCountry(id) {
    try {
      const response = await HTTP.delete(`/country/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async deletePopular(id) {
    try {
      const response = await HTTP.delete(`/popular/${id}`)
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
}
