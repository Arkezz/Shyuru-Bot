
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let pingembed = new Discord.RichEmbed()
    .setTitle("Ping!")
    .setDescription("Pong!")
    .setColor("RANDOM")
    .addField("Ping: ", `${message.createdTimestamp - Date.now()}` + ' ms');
    return message.channel.send(pingembed);
    
}
    
  

module.exports.help = {
    name: "pinge",
    aliases: ["ping"]
}
