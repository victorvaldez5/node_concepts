const cluster = require('cluster');

// is file being executed in Master mode?
if (cluster.isMaster) {
//   // cause index.js to execute again in child mode
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()

} else {
  // im a child. im going to act like a server
  // and do nothing else
  const express = require('express');
  const app = express();

  function doWork(duration) {
    const start = Date.now()
    while (Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('hello world');
  })

  app.get('/fast', (req, res) => {
    res.send('This was fast!')
  })

  app.listen(3000, () => {
    console.log('listening on port 3000');
  })
}
