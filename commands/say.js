const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] === "help") {
    message.reply("Usage: s!say <sentence>");
    return;
  }
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  let botmessage = args.join(" ");
  if(!botmessage) return errors.noMessage(message.channel);
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
