const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply("Usage: s!clear <number>");
    return;
  }



  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("oof");
  if(args[0] >= 100) return message.channel.send("cant clear that much bruh!");
  if(isNaN(args[0])) return message.channel.send("What are you even doing?!");

  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(4000));
  });
}

module.exports.help = {
  name: "clear"
}