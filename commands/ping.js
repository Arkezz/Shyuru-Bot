<<<<<<< HEAD
const Discord = require("discord.js");
=======
Const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
>>>>>>> 033d2d35566ad9a263829f030121c5525d9845d2

module.exports.run = async (bot, message, args) => {
    
    let pingembed = new Discord.RichEmbed()
    .setTitle("Ping!")
    .setDescription("Pong!")
    .setColor("RANDOM")
    .addField("Ping: ", `${message.createdTimestamp - Date.now()}` + ' ms');
    return message.channel.send(pingembed);
    
}
    
  

  module.exports.help = {
    name: "ping"
  }
