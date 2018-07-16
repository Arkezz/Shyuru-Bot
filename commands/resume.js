const ytdl = require("ytdl-core");
module.exports.run = async (bot, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  if(!fetched) return message.channel.send("there currently is any music playing.");
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("sorry yyou arent in the same channel as the bot.");
  if(!fetched.dispatcher.paused) return message.channel.send("the song isnt paused.");
  fetched.dispatcher.resume();
  message.channel.send(`succesfully resumed ${fetched.queue[0].songTitle}`);
  

}
module.exports.help = {
name: "resume"
}