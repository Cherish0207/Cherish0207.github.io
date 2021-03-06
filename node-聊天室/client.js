const net = require('net')

const client = net.createConnection({
  host: '127.0.0.1',
  port: 3000
})

client.on('connect', () => {
  console.log('成功的连接到服务器了')

  // 当客户端与服务端建立连接成功以后，客户端就可以给服务端发送数据了
  client.write('world')

  // 当客户端与服务端建立连接成功以后，我们可以监听终端的输入
  // 获取终端的输入发送给服务端
  process.stdin.on('data', data => {
    client.write(data.toString().trim())
  })
})

// 客户端监听 data 事件
// 当服务端发消息过来就会触发该事件
client.on('data', data => {
  console.log('服务端说：', data.toString())
})
