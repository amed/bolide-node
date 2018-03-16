let dgram = require('dgram')
let server = dgram.createSocket('udp4')

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`)
  server.close()
})

server.on('message', (msg, rinfo) => {
  console.log(
    `
      got: ${msg} from ${rinfo.address}:${rinfo.port}
      at : ${new Date().getTime()}
    `
  )
})

server.on('listening', () => {
  const address = server.address()
  console.log(
    `server listening ${address.address}:${address.port}`
  )
})

server.bind(41234)
