const dns = require('dns'); // translate network name to address(IP)

//looks up
// dns.lookup('google.com', (err, address) => {
//   console.log(address);
// });

dns.resolve4('pornhub.com', (err, address) => {
  console.log(address);
});

// dns.resolveMx('pluralsight.com', (err, address) => {
//   console.log(address)
// });

// dns.reverse('35.161.75.228', (err, hostnames) => {
//   console.log(hostnames)
// })
dns.resolveMx('pornhub.com', (err, address) => {
  console.log(address)
})