const Discord = require("discord.js");
const ytdl = require("ytdl-core");


module.exports.run = async (bot, message, args, ops) => {
   if(!message.member.voiceChannel) return message.channel.send("please connect to a voice channel.");
   if(!args[0]) return message.channel.send("Sorry, please input a url after the command");
   let validate = await ytdl.validateURL(args[0]);
   if(!validate) {
     let commandfile = require('./search.js');
     return commandfile.run(bot, message, args, ops);
   };
   let info = await ytdl.getInfo(args[0]);
   let data = ops.active.get(message.guild.id) || {};
   if(!data.connection) data.connection = await message.member.voiceChannel.join();
   if(!data.queue) data.queue = [];
   data.guildID = message.guild.id;
   data.queue.push({
     songTitle: info.title,
     requester: message.author.tag,
     url: args[0],
     announceChannel: message.channel.id
   });
   if(!data.dispatcher) play(bot, ops, data);
   else {
     message.channel.send(`added to the queue ${info.title} | requested by: ${message.author.tag}`);
   }
   ops.active.set(message.guild.id, data);
}
async function play(bot, ops, data) {
  bot.channels.get(data.queue[0].announceChannel).send(`Now Playing ${data.queue[0].songTitle} | Request By: ${data.queue[0].requester}`);
  data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: `audioonly`}));
  data.dispatcher.guildID = data.guildID;
  data.dispatcher.once(`end`, function() {
    finish(bot, ops, this);
  });
}
function finish(bot, ops, dispatcher) {
  let fetched = ops.active.get(dispatcher.guildID);
  fetched.queue.shift();
  if(fetched.queue.length > 0) {
    ops.active.set(dispatcher.guildID, fetched);
    play(bot, ops, fetched);

  } else {
    ops.active.delete(dispatcher.guildID);
    let vc = bot.guilds.get(dispatcher.guildID).me.voiceChannel;
    if(vc) vc.leave();

  }
}

   


  
module.exports.help = {
  name: "play",
  aliases: ["play"]
}