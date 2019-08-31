
const net = require('net');

const client = new net.Socket();

const fs = require('fs');
// var input = process.stdin;
// input.setEncoding('utf-8');


client.connect(9517,'127.0.0.1',()=>{

    console.log('Connected');
    let data = fs.readFileSync(process.argv[2], 'utf8');
    client.write(data);

})