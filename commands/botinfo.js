const Discord = require("discord.js");
const prettyms = require("pretty-ms")


 
module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Bot Uptime", uptime)
    .addField("Created On", bot.user.createdAt)
    .addField('Invite the bot!', '[By clicking here!](https://discordapp.com/api/oauth2/authorize?client_id=455149080910364673&permissions=8&scope=bot)', true)
    .addField("Made By", "SlimandHandsome");
   message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo",
  aliases: ["botinfo"]
}