import Axios from 'axios'
import Cookies from './cookies'
//const serverUrl = 'http://localhost:8080/'
const serverUrl = 'http://47.114.97.89:8802/'

class Server {
  constructor () {
    this.install = false
  }
  init () {
    this.install = true
  }

  async post (uri, data) {
    try {
      const res = await Axios({
        method: 'post',
        url: `${serverUrl}${uri}`,
        timeout: 30000,
        headers: {
          'Content-Type':'application/json',
        },
        data
      })
      return res.data
    } catch (e) {
      return {
        status: 0,
        message: '网络连接失败'
      }
    }
  }
  
  async get (uri, data){
    try {
      const res = await Axios({
        method: 'get',
        url: `${serverUrl}${uri}`,
        timeout: 30000,
        // `headers` 是即将被发送的自定义请求头
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        params: data
      })
      return res.data
    } catch (e) {
      return {
        status: 0,
        message: '网络连接失败'
      }
    }
  }

  serverUrl(){

    return serverUrl
  }
}

const server = new Server()

export default {
  install: Vue => {
    if (server.install) return
    server.init()
    Vue.prototype.$server = server
  },
  post: server.post,
  get: server.get
}