const express = require('express')
const srv = express();
 
//srv.get('/', (req, res) => {
//  res.send('Everything should be working... ')
//});
srv.all('/', (req, res)=>{
    res.send('Everything should be working! if not go to https://bdfdmusic.glitch.me/#trouble')
})

module.exports = () => {
    srv.listen(4000, () => { //if you get '4000' address port errors, change the '4000' by another number.
        console.log('Server.js is ready!');
    });
    return true;
}

console.log('API/NPM by Almighty Neko#0121 | Fork by Berk#3506');