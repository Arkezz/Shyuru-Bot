const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);
    let hugsembed = new Discord.RichEmbed()
    .setTitle("have my hug :)")
    .setDescription(`**${message.author.username}** hugged **${message.author.username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("see ya later", bot.user.displayAvatarURL);
    
    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug! c:")
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("hello", bot.user.displayAvatarURL);
    if(!hugUser) {
        message.channel.send(hugsembed)
    }

    message.channel.send(hugEmbed)

}










module.exports.help = {
    name: "hug",
    aliases: ["hug"]
}