const clear = require('clear-it')
clear();

var tc = require("termcolor").define;
var print = console.green;
var input = require('readline-sync');
var fs = require("fs");
var cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))
var red = console.red
var orange = console.purple

clear();

clear();
print("-=-")
print("")
print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
print("-=Welcome To Revenge Raid ToolBox=-")
print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
print("")
print("-=-")
print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
print("=-=-= Raid Options: =-=-=-")
print("")
print("| 1. Spam Channel")
print("")
print("| 2. Spam DM")
print("")
print("| 3. Raiding Server (Crash Discord With Too Many Scripts Working more affect on discord mobile)")
print("")
print("| 4. Hacking Server With Bot Joining In The Server (Require Permission + Bot Token !)")
print("")
print("| 5. Nitro Bruteforcer")
print("")
print("| 6. Raiding Server With Fake Accounts (Require Tokens !)")
print("")
print("| 7. Spam Voice Channel Joiner (JOIN & LEAVE INTERVAL)")
print("")
print("| 8. Spam Mention")
print("")
print("| 9. Embed Spammer (If You Using This Option With Selfbot You Will Get Banned From Discord)")
print("")
print("| 10. Ascii Spammer (Figlet)")
print("")
print("| 11. Image Spammer (With URL)")
print("")
print("| 12. Token Cheaker")
print("")
print("| 13. Role Mention Spammer")
print("")
print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
print("-=-")
print("")
red("- Disclaimer: I have development this toolbox only for educational purposes,")
red("Im not responsible for blocking your account from Discord or your bot !")
print("")
print("-=-")


var option = input.question("Enter the option number you want:")


if(option === "1") {
  clear()
  var tokens = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
  print("Important Note: The Tokens Should Be Typed In tokens.json file")
var serverid = input.question("Now Enter The Server ID:")
if(!serverid == Number) return print("Nope, The Server ID Should Be Numbers Only !")
var channelid = input.question("Now Enter Channel ID:")
var msg = input.question("Now Enter The Message:")
var delay = input.question("Now Please Type The Delay Time (MS) (Enter For Default, Default is 5s):")
if(!delay) delay = 5000
cache = {
serverid: serverid,
channelid: channelid,
msg: msg,
delay: delay
}
save()
print("Spamming ! ..")
 var spamchannel = require("./tools/spamchannel.js")


}


if(option === "2") {
  clear()
  var tokens = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
  print("Important Note: The Tokens Should Be Typed In tokens.json file")
var userid = input.question("Now Enter The User ID:")
if(!userid == Number) return print("Nope, The User ID Should Be Numbers Only !")
var msg = input.question("Now Enter The Message:")
var delay = input.question("Now Please Type The Delay Time (MS) (Enter For Default, Default is 5s):")
if(!delay) delay = 5000
cache = {
userid: userid,
msg: msg,
delay: delay
}
save()
print("Spamming ! ..")
 var spamchannel = require("./tools/spamdm.js")
}

if(option === "3") {
    clear()
    var tokens = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
    print("Important Note: The Tokens Should Be Typed In tokens.json file")
     print("Note: This Option Working More Affect On Discord Mobile !")
  var serverid = input.question("Now Enter The Server ID:")
  if(!serverid == Number) return print("Nope, The Server ID Should Be Numbers Only !")
  var channelid = input.question("Now Enter Channel ID:")
  var delay = input.question("Now Please Type The Delay Time (MS) (Enter For Default, Default is 5s):")
  if(!delay) delay = 5000
  cache = {
  serverid: serverid,
  channelid: channelid,
  delay: delay
  }
  save()
  print("Spamming ! ..")
   var spamchannel = require("./tools/spamraid.js")
  
  
  }


if(option === "4") {
  clear()
   print("*Note: This Option Require Bot Permissions + Bot Token")
   print("The Bot Cant Hack The Server Without Permissions !.")
   print("Another Note: TOKEN must be written when the tool asks for the token and not in the token.json file against the another commands")
var ownid = input.question("Now Please Type Your ID:")
var cmd = input.question("Now Type The Hacker Start Command:")
var oprole = input.question("Now Please Type The Oprole Name Will Create And Gives You After You Type The op:")
var opcmd = input.question("Now Please Type a command that, when written, gives you the op role:")
var textch = input.question("Now Please Type The Name Of Text Channels Will Be Create When You Type The Command :")
var voicech = input.question("Now Please Type The Name Of Voice Channels Will Be Create When You Type The Command:")
var pic = input.question("Now Please Type The New Bot Avatar (Will Changed When You Type The Hacker Start Command !):")
var name = input.question("Now Please Type The New Bot Name (Will Changed When You Type The Hacker Start Command !):")
var spamtext = input.question("Now Please Type A Sentence That Will Bot:")
var playing = input.question("Now Please Type The New Bot Playing:")
var hackingroles = input.question("Now Please Type The Hacking Roles Will Create When You Type The Hack Command:")
var token = input.question("Now Please Type The Bot Token Will Be Hacked:")
cache = {
hackcmd: cmd,
channelid: channelid,
token: token,
oprole: oprole,
opcommand: opcmd,
tch: textch,
vch: voicech,
picture: pic,
hackroles: hackingroles,
name: name,
spam: spamtext,
play: playing,
urid: ownid
}
save()
print("Hacking ! ! ..")
 var spamchannel = require("./tools/serverhack.js")
print("Hacking Started, Enjoy !")

}

if(option === "5") {
  clear()
  orange("Starting Nitro Brute Forcer ..")
  orange("Starting ..")
  setTimeout(() => {
var bruteforce = require("./tools/nitrobruteforcer.js")
}, 4000);

}

if(option === "6") {
  clear()
  print("*Important Note: The Tokens Should Be Typed In tokens.json file")
var link = input.question("Please Now Enter An Invite To The Target Server:")
cache = {
invite: link
}
save()
var joiner = require("./tools/raiding.js")

}
if(option === "7") {
  clear()
  print("*Important Note: The Tokens Should Be Typed In tokens.json file")
  var sid = input.question("Please Now Type The Server ID:")
var vch = input.question("Please Now Type The Voice Channel ID:")
var dely = input.question("Please Now Type The Delay Time:")
cache = {
serverid: sid,
vchid: vch,
delay: dely
}
save()
var joiner = require("./tools/voicechanneljoiner.js")
}

if(option === "8") {
  clear()
  print("*Important Note: The Tokens Should Be Typed In tokens.json file")
  var choose = input.question("Please Select A Option DM or Server:")
  if(choose !== "server" && choose !== "dm") return print("Nope, Please Select server or dm Only ! (Small Characters)")
  if(choose == "server") {
  var sid = input.question("Please Now Type The Server ID:")
var vch = input.question("Please Now Type The Channel ID:")
var men = input.question("Please Now Type The Mention User ID:")
var dely = input.question("Please Now Type The Delay Time:")
cache = {
serverid: sid,
channelid: vch,
mention: men,
delay: dely,
dm: "off"
}
save()
var joiner = require("./tools/MentionSpammer.js")
}
if(choose == "dm") {
  var uid = input.question("Please Now Type The ID Of The Person Who Sends The Spam Mention:")
var men = input.question("Please Now Type The Mention User ID:")
var dely = input.question("Please Now Type The Delay Time:")
cache = {
userid: uid,
mention: men,
delay: dely,
dm: "on"
}
save()
var joiner = require("./tools/MentionSpammer.js")
}
}

if(option === "9") {
  clear()
  print("*Important Note: The Tokens Should Be Typed In tokens.json file")
  var choose = input.question("Please Select A Option DM or Server:")
  if(choose !== "server" && choose !== "dm") return print("Nope, Please Select server or dm Only ! (Small Characters)")
  if(choose == "server") {
  var sid = input.question("Please Now Type The Server ID:")
var vch = input.question("Please Now Type The Channel ID:")
var dely = input.question("Please Now Type The Delay Time:")
var message = input.question("Please Now Type The Message To Spam:")
cache = {
serverid: sid,
channelid: vch,
msg: message,
delay: dely,
dm: "off"
}
save()
var joiner = require("./tools/embedspammer.js")
}
if(choose == "dm") {
  var uid = input.question("Please Now Type The ID Of The Person Who Sends The Embed Spammer:")
var dely = input.question("Please Now Type The Delay Time:")
var message = input.question("Please Now Type The Message To Spam:")
cache = {
userid: uid,
delay: dely,
msg: message,
dm: "on"
}
save()
var joiner = require("./tools/embedspammer.js")
}
}

if(option === "10") {
  clear()
  print("*Important Note: The Tokens Should Be Typed In tokens.json file")
  var choose = input.question("Please Select A Option DM or Server:")
  if(choose !== "server" && choose !== "dm") return print("Nope, Please Select server or dm Only ! (Small Characters)")
  if(choose == "server") {
  var sid = input.question("Please Now Type The Server ID:")
var vch = input.question("Please Now Type The Channel ID:")
var dely = input.question("Please Now Type The Delay Time:")
var message = input.question("Please Now Type The Message To Spam:")
cache = {
serverid: sid,
channelid: vch,
msg: message,
delay: dely,
dm: "off"
}
save()
var joiner = require("./tools/asciispammer.js")
}
if(choose == "dm") {
  var uid = input.question("Please Now Type The ID Of The Person Who Sends The Spam Ascii:")
var dely = input.question("Please Now Type The Delay Time:")
var message = input.question("Please Now Type The Message To Spam:")
cache = {
userid: uid,
delay: dely,
msg: message,
dm: "on"
}
save()
var joiner = require("./tools/asciipammer.js")
}
}

if(option === "11") {
  clear()
  print("*Important Note: The Tokens Should Be Typed In tokens.json file")
  var choose = input.question("Please Select A Option DM or Server:")
  if(choose !== "server" && choose !== "dm") return print("Nope, Please Select server or dm Only ! (Small Characters)")
  if(choose == "server") {
  var sid = input.question("Please Now Type The Server ID:")
var vch = input.question("Please Now Type The Channel ID:")
var dely = input.question("Please Now Type The Delay Time:")
var picture = input.question("Please Now Type The Picture URL To Spam:")
cache = {
serverid: sid,
channelid: vch,
url: picture,
delay: dely,
dm: "off"
}
save()
var joiner = require("./tools/imagespammer.js")
}
if(choose == "dm") {
  var uid = input.question("Please Now Type The ID Of The Person Who Sends The Spam Image:")
var dely = input.question("Please Now Type The Delay Time:")
var picture = input.question("Please Now Type The Image URL To Spam:")
cache = {
userid: uid,
delay: dely,
url: picture,
dm: "on"
}
save()
var joiner = require("./tools/imagepammer.js")
}
}

if(option === "12") {
  clear()
var login = input.question("Please Now Type The Token To Cheak:")
cache = {
token: login
}
save()
var joiner = require("./tools/tokencheaker.js")
}


if(option === "13") {
  clear()
  var tokens = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
  print("Important Note: The Tokens Should Be Typed In tokens.json file")
var serverid = input.question("Now Enter The Server ID:")
if(!serverid == Number) return print("Nope, The Server ID Should Be Numbers Only !")
var channelid = input.question("Now Enter Channel ID:")
var name = input.question("Now Enter The Role Name (if the role have decorative Tags just type the name):")
var delay = input.question("Now Please Type The Delay Time (MS) (Enter For Default, Default is 5s):")
if(!delay) delay = 5000
cache = {
serverid: serverid,
channelid: channelid,
role: name,
delay: delay
}
save()
print("Spamming ! ..")
 var spamchannel = require("./tools/rolementionspammer.js")


}

if(option !== "1" && option !== "2" && option !== "3" && option !== "4" && option !== "5" && option !== "6" && option !== "7" && option !== "8" && option !== "9" && option !== "10" && option !== "11" && option !== "12" && option !== "13") {
print("Nope, The Option Should Be 1-7 Only !")
}

function save(){
    fs.writeFileSync("./caches.json", JSON.stringify(cache, null, 4));
  };