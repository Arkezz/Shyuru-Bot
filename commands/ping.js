const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let pingembed = new Discord.RichEmbed()
    .setTitle("Ping!")
    .setDescription("Pong!")
    .setColor("RANDOM")
<<<<<<< HEAD
    .addField("Ping:",`${Date.now() - message.createdTimestamp}` + ' ms');
=======
    .addField("Ping:", `${Date.now() - message.createdTimestamp}` + ' ms');
>>>>>>> 80efacc87b9239345039d5e3469c3a8a487a5699
    return message.channel.send(pingembed)
    message.delete().catch(O_o=>{});
}
    
  

  module.exports.help = {
    name: "ping"
  }
