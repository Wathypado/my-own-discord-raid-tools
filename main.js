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
print("-=-")
print("")
print("=-=-=-=-=-")
print("Welcome To Revenge Raid ToolBox")
print("=-=-=-=-=-")
print("")
print("-=-")
print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
print("| 1. Spam Channel")
print("")
print("| 2. Spam DM")
print("")
print("| 3. Raiding Server (Crash Discord With Too Many Scripts Working more affect on discord mobile)")
print("")
print("| 4. Hacking Server With Bot Joining In The Server (Require Permission + Bot Token !)")
print("")
print("| 5. Nitro Gifts Bruteforcer")
print("")
print("| 6. Raiding Server With Fake Accounts (Require Tokens !)")
print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
print("-=-")
print("")

red("disclaimer: I have development this toolbox only for educational purposes,")
red("Im not responsible for blocking your account from Discord or your bot !")


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
var oprole = input.question("Now Please Type The Oprole Name Will Create And Gives You After You Type The op")
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
 var spamchannel = require("./tools/spamraid.js")
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
var link = input.question("Please Now Enter An Invite To The Target Server")
cache = {
invite: link
}
}


if(option !== "1" && option !== "2" && option !== "3" && option !== "4" && option !== "5" && option !== "6" && option !== "7") {
print("Nope, The Option Should Be 1-7 Only !")
}

function save(){
    fs.writeFileSync("./caches.json", JSON.stringify(cache, null, 4));
  };
