module.exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send("There currently nothing playing.");
  
    if(!fetched) return message.channel.send("there currently is any music playing.");
  
    if(fetched.dispatcher.paused) return message.channel.send("the song is already paused.");
  
    fetched.dispatcher.pause();
  
    message.channel.send(`succesfully paused ${fetched.queue[0].songTitle}`);
}    
module.exports.help = {
    name: "test",
    aliases: ["test"]
}