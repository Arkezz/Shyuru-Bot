const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const queue = new Map();
const bot = new Discord.Client();




module.exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) return message.channel.send('there currently isnt any song playing.');
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("sorry you arent connected to the same channel as the bot.");
    let userCount = message.member.voiceChannel.members.size;
    let required = Math.ceil(userCount/2);
    if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
    if(fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, you already voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required.`);
    fetched.queue[0].voteSkips.push(message.member.id);
    ops.active.set(message.guild.id, fetched);
    if(fetched.queue[0].voteSkips.length >= required) {
        message.channel.send("succesfully skipped the song!");
        return fetched.dispatcher.emit(`end`);
    }
    message.channel.send(`Succesfully voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required`);
}
module.exports.help = {
    name: "skip"
  }