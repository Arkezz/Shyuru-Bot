    module.exports.run = async (bot, message, args) => {
        let active = new Map();
        let fetched = active.get(message.guild.id);  

        if(fetched) return message.channel.send("there currently isnt any music playing in this guild");

        if (message.author.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("sorry you arent in the same channel as me!");

        if(fetched.dispatcher.paused) return message.channel.send("already paused it");

        fetched.dispatcher.pause();

        message.channel.send(`Succesfully Paused ${fetched.queue[0].songTitle}`);

    }
  module.exports.help = {
    name: "pause"
  }