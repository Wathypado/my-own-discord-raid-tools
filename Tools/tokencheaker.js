const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))
const config = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
const token = config.tokens;
const printred = console.red;
const printgreen = console.green;




client.on("ready", () => {
printgreen("This Token Is Working Yay ! :)")
process.exit()
    })


client.login(cache.token).catch(err => {
    printred("This Token Is Not Working :( ")
});