const Discord = require("discord.js");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .setTitle("Bark :dog:")
    .setImage(body.url)
    message.channel.send({embed})
}




module.exports.help = {
    name:"dog"
  }
