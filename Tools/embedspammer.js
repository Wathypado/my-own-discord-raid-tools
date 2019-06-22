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
let embed = new Discord.RichEmbed()
.setTitle(cache.msg)
.setColor("RED")
ch.sendEmbed(embed)
print("Sended One Message")
}, cache.delay);
    }

    if(cache.dm == "on") {
        setInterval(() => {
            let ch = client.users.get(cache.serverid).send(cache.msg)
            let embed = new Discord.RichEmbed()
            .setTitle(cache.msg)
            .setColor("RED")
            ch.sendEmbed(embed)
            print("Sended One Message")
            }, cache.delay);
    }
})

token.forEach(acc => {
    client.login(acc)
    });