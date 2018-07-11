const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const queue = new Map();
const bot = new Discord.Client();




module.exports.run = async (bot, message, args) => {
	let searchString = args.slice(1).join(' ');
	let url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	let serverQueue = queue.get(message.guild.id);
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) {
        return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
    }
    if (!permissions.has('SPEAK')) {
        return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
    }
    const songInfo = await ytdl.getInfo(args[0]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url
    }
    if(!serverQueue) {
        queueConstruct = {
            textchannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(message.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`i couldnt join the voice channel: ${error}`)
            queue.delete(message.guild.id);
            return message.channel.send(`i couldnt join the voice channel: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        return message.channel.send(`song addded to queue`);
    }
    return undefined;
    

    



async function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if(!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    

    const dispatcher = connection.playStream(ytdl(song.url))
    .on(`end`, e => {
        console.log("song ended");
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
        
    })
    .on(`error`, error => console.error(error));
    dispatcher.setVolumeLogarithmic(5 / 5);


}
}
module.exports.help = {
    name: "plays"
  }