const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))
const config = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
const token = config.tokens;
var print = console.green;

client.on("ready", () => {
    if(cache.dm == "off") {
    setInterval(() => {
let ch = client.guilds.get(cache.serverid).channels.get(cache.channelid)
ch.send({file: cache.url})
print("Sended One Image")
}, cache.delay);
    }

    if(cache.dm == "on") {
        setInterval(() => {
            let ch = client.users.get(cache.serverid).send(cache.msg)
              ch.send({file: cache.url})
            print("Sended One Image")
            }, cache.delay);
    }
})

token.forEach(acc => {
    client.login(acc)
    });