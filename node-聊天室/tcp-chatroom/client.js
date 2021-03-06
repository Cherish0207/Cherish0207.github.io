const net = require('net')

const client = net.createConnection({
  host: '127.0.0.1',
  port: 3000
})

client.on('connect', () => {
  console.log('客户端与服务器建立连接成功')

  process.stdin.on('data', data => {
    data = data.toString().trim()
    client.write(data)
  })
})

client.on('data', data => {
  console.log(data.toString())
})
