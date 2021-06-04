import axios from 'axios'

axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://152.136.185.210:7878/api/m5"

export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get (url, params).then(res => {
      resolve (res);
    }).catch(err => {
      reject(err)
    })
  })
}