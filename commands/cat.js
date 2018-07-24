const Discord = require("discord.js");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    const { body } = await superagent.get('aws.random.cat/meow');
    const embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .setTitle("Meow :cat:")
    .setImage(body.file)
    message.channel.send(embed)
}



module.exports.help = {
    name: "cat",
    aliases: ["cat"]
}