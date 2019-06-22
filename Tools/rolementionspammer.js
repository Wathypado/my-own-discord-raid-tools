const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))
const config = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
const token = config.tokens;
var print = console.green;

setInterval(() => {
    let role = client.guilds.get(cache.serverid).roles.find(ch => ch.name.includes(cache.role))
    client.guilds.get(cache.serverid).channels.get(cache.channelid).send(`${role}`)
    print("Sended One Mention Sended")
}, cache.delay)
token.forEach(acc => {

client.login(acc)
});