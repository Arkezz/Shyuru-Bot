const ytdl = require("ytdl-core");
module.exports.run = async (bot, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  if(!fetched) return message.channel.send("There currently isnt any songs playing");
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("sorry you arent in the same voiceChannel as the bot.");
  if(isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send("please input a number between 0-200");
  fetched.dispatcher.setVolume(args[0]/100);
  message.channel.send(`succesfully set the volume of ${fetched.queue[0].songTitle} to ${args[0]}`);

}
module.exports.help = {
  name: "volume",
  aliases: ["volume"]
}