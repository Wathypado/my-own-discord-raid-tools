const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))

client.on("ready", () => {
    client.acceptInvite(cache.invite)
})

token.forEach(acc => {
    client.login(acc)
    });
