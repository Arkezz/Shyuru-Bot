const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
    let gamedesc = args[1]
    let minidesc = args.slice(2).join(" ");
    var embed = new Discord.RichEmbed()
        .setAuthor("Minigame Suggestion")
        .addField("Suggestion by", `${message.author.username}`)
        .addField("Minigame:", `${gamedesc}`)
        .addField("Description", `${minidesc}`)
        .setFooter("Vote down below if you ✅ or ❎ this idea.")
        .setThumbnail(message.author.avatarURL)
        .setColor(0x62c1f0)
    
    message.channel.send(embed);


}

module.exports.help = {
    name: "test"
  }