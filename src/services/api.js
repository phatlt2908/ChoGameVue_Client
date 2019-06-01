import Vue from 'vue'
import Axios from 'axios'

var axios = Axios.create({
  baseURL: `http://localhost:8081`
})

var api = {
  login(username, password) {
    return axios.get('/user/login', {
      'user_name': username,
      'password': password
    })
  }
}

Vue.use({
  install(Vue, options) {
    Vue.prototype['$api'] = api
  }
})

export default api