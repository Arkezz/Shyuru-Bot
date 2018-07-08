
const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
    let member =  message.mentions.members.first();
    if(!args[0])  member = message.member;
    
    
    

    let global = await db.fetch(`globalMessages_${member.id}`);
    let guild = await db.fetch(`guildMessages_${member.guild.id}_${member.id}`);

    message.channel.send(`**Global Messages: \`${global}\`\nGuild Messages: \`${guild}\`**`);
    


};

module.exports.help = {
    name:"messages"
}