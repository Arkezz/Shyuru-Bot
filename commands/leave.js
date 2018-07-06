const Discord = require("discord.js");
const ytdl = require("ytdl-core");

    module.exports.run = async (bot, message, args) => {
        if(!message.member.voiceChannel) return message.channel.send("please connect to a voice channel.");

        if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("sorry you arent connected to a voiced channel.");

        if(!message.guild.me.voiceChannel) return message.channel.send("soory, the bot isnt connected to the guild");
        
        message.guild.me.voiceChannel.leave();

        message.channel.send("leaving channel...");
    }

    module.exports.help = {
        name: "leave"
      }