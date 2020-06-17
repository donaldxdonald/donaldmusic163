const axios = require('axios')

const request = axios.create({
  baseURL: "http://localhost:3000"
})

request.interceptors.request.use(config => {
  return config
},err => {
  console.log(err);
})

request.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err);
  
})

module.exports = request

