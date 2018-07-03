const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let uicon = message.author.displayAvatarURL;
    

    let userembed = new Discord.RichEmbed()
    .setDescription("User Information")
    .setThumbnail(uicon)
    .setColor("RANDOM")
    .addField("Username: ", message.author.username)
    .addField("It was created on: ", message.author.createdAt);



    message.channel.send(userembed);
}


module.exports.help = {
    name: "userinfo"
  }