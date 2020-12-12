const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server listening'));

server.on('message', (msg, rinfo) => {
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});


server.bind(PORT, HOST)

// CLIENT

const msg = Buffer.from('Pluralsight Rocks!');

const client = dgram.createSocket('udp4');

// args msg, where buffer starts, where buffer should end
// frist arg(msg) can be an array of msg to send multiple things
client.send(msg, 0, msg.length, PORT, HOST, (err) => {
  if (err) throw err;

  console.log('udp message sent');
  client.close();
});
