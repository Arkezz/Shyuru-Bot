const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  let tempembed = new Discord.RichEmbed()
  .setTitle("Tempmute-help")
  .setDescription("the tempmute command allows you to temporary mute a person in the server for a certain amount of time before they are unmuted you cant mute someone with Manage Messages perms")
  .addField("Usage: ", "s!tempmute (person) (seconds)")
  .addField("Perms: ", "you need to have Manage Members perm to be able to use the command")
  .setColor("RANDOM");

  if (args[0] === "help") {
    

    message.channel.send(tempembed);
    return;
  }
  if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return errors.cantfindUser(message.channel);
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return errors.specifytime(message.channel);

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted !`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}
