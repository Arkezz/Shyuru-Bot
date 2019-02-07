const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(config.red)
        .addField("Permission needed", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Error")
        .addField(`${user} has perms`, perms);

    message.channel.send(embed).then(m => m.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Could not find that user.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please supply a reason.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noCoins = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please specify the amount of coins.")
        .setColor(config.red);

        channel.send(embed).then(m => m.delete(5000));
}

module.exports.noMessage = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please write the message.")
        .setColor(config.red);

        channel.send(embed).then(m => m.delete(5000));
}

module.exports.specifytime = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please specify the amount of time.")
        .setColor(config.red);

        channel.send(embed).then(m => m.delete(5000));
}

module.exports.specifyrole = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please specify the role you want to remove.")
        .setColor(config.red);

        channel.send(embed).then(m => m.delete(5000));
}

module.exports.unknownrole = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Cant find that role.")
        .setColor(config.red);

        channel.send(embed).then(m => m.delete(5000));
}

module.exports.norole = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("he doesnt have that role!")
        .setColor(config.red);

        channel.send(embed).then(m => m.delete(5000));
}

module.exports.wait = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You have to wait 5 seconds!")
        .setColor(config.red);

        channel.send(embed).then(m => m.delete(5000));
}

