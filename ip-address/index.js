var ip = require('ip');
 
console.log(ip.address()) // my ip address
console.log(ip.isEqual('::1', '::0:1')) // true
console.log(ip.toBuffer('127.0.0.1')) // Buffer([127, 0, 0, 1])
console.log(ip.toString(new Buffer([127, 0, 0, 1]))) // 127.0.0.1
console.log(ip.fromPrefixLen(24)) // 255.255.255.0
console.log(ip.mask('192.168.1.134', '255.255.255.0')) // 192.168.1.0
console.log(ip.not('255.255.255.0'))// 0.0.0.255
console.log(ip.or('192.168.1.134', '0.0.0.255')) // 192.168.1.255
console.log(ip.isPrivate('127.0.0.1')) // true
console.log(ip.isV4Format('127.0.0.1')) // true
console.log(ip.isV6Format('::ffff:127.0.0.1')) // true
 
// operate on buffers in-place
var buf = new Buffer(128);
var offset = 64;
console.log(ip.toBuffer('127.0.0.1', buf, offset))  // [127, 0, 0, 1] at offset 64
console.log(ip.toString(buf, offset, 4))          // '127.0.0.1'
 
// subnet information
console.log(ip.subnet('192.168.1.134', '255.255.255.192'))
// { networkAddress: '192.168.1.128',
//   firstAddress: '192.168.1.129',
//   lastAddress: '192.168.1.190',
//   broadcastAddress: '192.168.1.191',
//   subnetMask: '255.255.255.192',
//   subnetMaskLength: 26,
//   numHosts: 62,
//   length: 64,
//   contains: function(addr){...} }
console.log(ip.cidrSubnet('192.168.1.134/26'))
// Same as previous.
 
// range checking
console.log(ip.cidrSubnet('192.168.1.134/26').contains('192.168.1.190')) // true
 
 
// ipv4 long conversion
ip.toLong('127.0.0.1'); // 2130706433
ip.fromLong(2130706433); 