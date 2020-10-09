import io from 'socket.io-client'
const serverUrl = 'http://47.114.97.89:8801/'
//const serverUrl = 'http://localhost:9090/'

export default new class Socket {

  constructor () {
    this.serverUrl = serverUrl
  }
  
  init (type, id) {

    return io(`${serverUrl}?chatType=${type}&chatId=${id}`, {
        transports:['websocket','xhr-polling','jsonp-polling'],
        reconnection: true,             //是否自动重新连接
        reconnectionAttempts: 10,       //放弃连接之前的重连接尝试次数
        reconnectionDelay: 1000,        //在尝试重新连接之前，最初需要等待多长时间
        reconnectionDelayMax: 5000,     //重新连接尝试之间等待的最大时间。每次尝试都会增加2倍的重连接延迟和一个随机因子
        randomizationFactor: 0.5
    })
  }
}