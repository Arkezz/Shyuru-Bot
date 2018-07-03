const urban = require("relevant-urban");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    

    if(!args[0]) return message.channel.send(`**Please specify some text**`);
    let res = await urban(args.join(" ")).catch(e => {
        return message.channel.send("**sorry that word was not found**");
    });

    let embed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setTitle(res.word)
    .setURL(res.urbanURL)
    .setDescription(`**Definition**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`)
    .addField(`Author`, res.author, true)
    .addField(`Rating`, `**\`UPvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`);



    message.channel.send(embed);
 
}

module.exports.help = {
    name: "urban"
  }