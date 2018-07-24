const Discord = require("discord.js");
const math = require("mathjs");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("please input an equation")

    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send("Sorry, please input a valid equation.");
    }

    const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle(`Math Equation`)
    .addField('Input', `\`\`\`js\n${args.join(" ")}\`\`\``)
    .addField('Output', `\`\`\`js\n${resp}\`\`\``);

    message.channel.send(embed);

}


module.exports.help = {
    name: "math",
    aliases: ["math"]
}