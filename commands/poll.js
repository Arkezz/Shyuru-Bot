const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
 if(!args[0]) return message.channel.send("no can do");

const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setFooter("React to vote")
.setDescription(args.join(' '))
.setTitle(`Poll created By ${message.author.username}`);


 let msg = await message.channel.send(embed)

await msg.react('✅');

await msg.react('❌')
  .then(console.log)
  .catch(console.error);





}

module.exports.help = {
    name:"poll"
  }