const si = require('systeminformation');
 
// // callback style
// si.cpu(function(data) {
//     console.log('CPU-Information:');
//     console.log(data);
// });
 
// promises style - new in version 3
si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));
 si.networkStats('eth1')
    .then(data => {
        console.log('Network Interface Stats (eth1):');
        console.log('- is up: ' + data.operstate);
        console.log('- RX bytes overall: ' + data.rx);
        console.log('- TX bytes overall: ' + data.tx);
        console.log('- RX bytes/sec: ' + data.rx_sec);
        console.log('- TX bytes/sec: ' + data.tx_sec);
        console.log(request.connection.remoteAddress)
    })
    .catch(error => console.error(error));
 setInterval(function() {
    si.networkStats().then(data => {
        console.log(data);
    })
}, 5000)
//domain name
 var path = require('path');
var userName = process.env['USERPROFILE'].split(path.sep)[2];
var loginId = path.join("domainName",userName);
console.log(loginId);
// full async / await example (node >= 7.6)
async function cpu() {
  try {
    const data = await si.cpu();
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}