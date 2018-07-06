const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const active = new Map();
    module.exports.run = async (bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send("please connect to a voice channel.");

    if (message.guild.me.voiceChannel) return message.channel.send("sorry, the bot is already connect to a voice channel");

    if (!args[0]) return message.channel.send("sorry, please input a url following the command");

    let validate = await ytdl.validateURL(args[0]);

    if (!validate) return message.channel.send("sorry please input a **valid** url following the command.");

    let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voiceChannel.join();

    let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly'}));

    message.channel.send(`now playing: ${info.title}`);

    
        
    }



module.exports.help = {
    name: "play"
  }
