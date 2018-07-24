const db = require("quick.db");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
db.startsWith(`guildMessages_${message.guild.id}`, { sort: `data` }).then(resp => {

    resp.length = 15;

    let finalOutput = `**Leaderboard!:**\n\n`;
    for(var i in resp) {
        finalOutput += `${bot.users.get(resp[i].ID.split('_')[2]).username} -- ${resp[i].data} messages\n`;
    }


message.channel.send(finalOutput);
});

}

module.exports.help = {
    name: "messageslb",
    aliases: ["messageslb"]
}