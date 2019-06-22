const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))
const config = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
const token = config.tokens;
client.on("ready", () => {
    setInterval(() => {
        client.guilds.get(cache.serverid).channels.get(cache.vchid).join().then(() => {
            client.guilds.get(cache.serverid).voiceConnection.disconnect();
}, cache.delay)

    })
})

token.forEach(acc => {
    client.login(acc)
    });
