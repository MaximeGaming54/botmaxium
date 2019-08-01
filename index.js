const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});



client.on('guildMemberAdd', member => {

    let serverTag = member.guild.name
    const welcomechannel = member.guild.channels.find('id', '605180615830142998')
    const role = member.guild.roles.find("name", "👤 Membre 👤")    
    member.addRole(role)
    var embed = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription(`**:inbox_tray: <@${member.user.id}> à rejoint le serveur discord de ${serverTag} !**`)
    return welcomechannel.send({embed})
});


client.on("ready" , () => {
    var date = new Date();
    console.log("Bot en ligne ...");
    client.channels.get("605196251725824021").send(`**Le Bot est de nouveau en ligne.** <${date}>`);
});

client.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('** Bienvenue sur le discord de Maxime_54 **' + member.displayName)
 
    }).catch(console.error)
})

client.on('message', function (message) {
    if (message.content === '<discord') {
        message.channel.send('** Discord de La Sueur de discord : https://discord.gg/2JFH4U2**')
    }
})

client.on('message', function (message) {
    if (message.content === '<youtube') {
        message.channel.send('** Oups ... Maxime_54 à été banni des services de Google**')
    }
})

client.on('message', function (message) {
    if (message.content === '<mcflurry') {
        message.channel.send('**Votre commandes est invalide car Mcflurry est mort ^^ MDR C`EST COOL NON ?**')
    }
})

client.on('message', function (message) {
    if (message.content === '<twitch') {
        message.channel.send('**Twitch de Maxime : https://www.twitch.tv/maxime_54**')
    }
})
   


client.login('NjA1MTgyMjM2NTgwNTExODgx.XUJR5w.Chl441jvoPFqSymO3bYn1Sz2rw0');
