//IF THE REPLIT DOESN'T START TYPE 'bash run.sh' IN SHELL!
//and if doesn't work with 'bash run.sh' run 'npm start'
const keepAlive = require('./server');
//require("http").createServer((req, res) => res.end(process.version)).listen()
keepAlive();
console.log('[!] Starting...')
console.log(`[!] Node.js version ${process.version}!
[!] If the Node.js version is below v17 then the console will return an 'unexpected token' error, to fix it instead of running the repl using the run button, run it by typing 'npm start' in the shell tab!`);
console.log(`[!] If you get an error such as "address already in use :::(number)" just change the number of the 'apiPort: (number here)' by another one!`)
const {
  LavalinkServer
} = require("bdfd-lavalink")

const server = new LavalinkServer({
    apiPort: 2000, //if you get 'address already in use error, change 2000 by another number'
    url: "lava.link",
    lavalinkPort: 80,
    password: "lava123"
})
//don't touch the lines below
server.init(process.env['SECRET'])
console.log('=================')
//make sure to set the replit secret variable in the secrets tab to your bot token, if you don't know how, it is stated on a step here:
//https://bdfdmusic.glitch.me