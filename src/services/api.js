import Vue from 'vue'
import Axios from 'axios'
import $user from './user'

var axios = Axios.create({
  baseURL: `http://localhost:8081`
})

var api = {
  setHeadersAccessToken(accessToken) {
    if (accessToken) {
      axios.defaults.headers.common['accessToken'] = accessToken
    }
  },
  
  login(username, password) {
    return axios.post('/auth/login', {
      'username': username,
      'password': password
    })
  },

  getAllProducts() {
    return axios.get('/market/get-all-products')
  }
}

Vue.use({
  install(Vue, options) {
    api.setHeadersAccessToken($user.getAccessToken())

    Vue.prototype['$api'] = api
  }
})

export default api