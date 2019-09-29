

const http = require('http');

http.createServer( (req, res) =>   {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let out = {
        name: 'Mauricio',
        years: 36,
        url: req.url
    }

    res.write( JSON.stringify( out ) );
    //res.write('Hi world!!!');
    res.end();
})
.listen(8080);

console.log('Listening port 8080');

