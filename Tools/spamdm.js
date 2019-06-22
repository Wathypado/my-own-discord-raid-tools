const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
const cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))
const config = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
const token = config.tokens;
var print = console.green;

setInterval(() => {
    client.users.get(cache.userid).send(cache.msg)
    print("Sended One Msg")
}, cache.delay)

token.forEach(acc => {
    client.login(acc)
    });