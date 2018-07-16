const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
 
  let emoji = bot.emojis.find('name', 'wink')
  message.react(emoji);

}

module.exports.help = {
  name: "react"
}
