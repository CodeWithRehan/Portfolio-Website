const http = require('http');
const fs = require('fs');
console.log('main');
const file = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(file);
})
server.listen(80, '127.0.0.1', () => {
    console.log('listening on port 80')
});


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
            alert(position);
    })
}








// let help=document.getElementsByClassName('help-scroller');
// function helpscroll(){
//     help.style.display='none';
// }

// console.log('hi')
