const net = require('net');
const fs = require('fs');

const server = net.createServer(function(client) {

    // client.write('Hello Client\r\n');

    client.on('data', function(data) {
        let txtUpperCase = data.toString().toUpperCase();
        fs.writeFileSync('server.txt', txtUpperCase);
        console.log("Save file success");
        
    });
});

server.listen(9517, '127.0.0.1',null,()=>{
    console.log("Server start");
});