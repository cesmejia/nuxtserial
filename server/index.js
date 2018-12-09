
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const SerialPort = require('serialport')

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  const server = app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })

  const io = require('socket.io')(server);

  const mySerial = new SerialPort('/dev/cu.usbserial-1410', {
    baudRate: 9600
  });

  io.on('connection', function(socket) {
    console.log('New socket connection: ' + socket.id)
  })

  mySerial.on('open', function() {
    console.log('Opened Serial Port');
  })

  mySerial.on('data', function(data) {
    console.log(data.toString());
    io.emit('MESSAGE', {
      value: data.toString()
    });
  });
  
  mySerial.on('err', function(err) {
    console.log(err.message);
  });

}
start()
