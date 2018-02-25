const Discord = require("discord.js");
var bot = new Discord.Client();
var prefix  = "/"

bot.on("ready", () => {
    bot.user.setGame("MaxiumBot, maxium.bot.fr");
    console.log("Le bot à bien ete connecte");
  });

  bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur mon serveur --> ' + member.displayName)
    }).catch(console.error)
  })

  bot.on('message', msg => {
    if (msg.content === prefix + "ping") {
      startTime = Date.now();
      msg.channel.sendMessage("Calcul en cours...").then((message) => {
        endTime = Date.now();
         message.edit("Bot: " + Math.round(endTime - startTime) + " ms\nAPI : "+Math.round(bot.ping)+" ms");
      })
    
    }});

bot.login('NDE2OTY2NTY3NDIzNzcwNjI1.DXQ68A.hvdsTMJtvQO6OSfajlgfimiWk-o')
