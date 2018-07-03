const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply("Usage: s!pay <person> <amount>");
    return;
  }

  if(!coins[message.author.id]){
    return message.reply("You don't have any coins!")
  }


  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!pUser) return errors.cantfindUser(message.channel);
  if(message.mentions.users.first() === message.author) return message.channel.send("No can do");
  
  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(args[1] <= 0) return message.reply("what did you expect?");
  if(args[1] > sCoins) return message.reply("not enough coins there!");
  if(!args[1]) return message.reply("specify amount");
  if(isNaN(args[1])) return message.reply("asfa")
   
  
  
  
  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

 

  message.channel.send(`${message.author} has given ${pUser} ${args[1]} coins.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


  
}

module.exports.help = {
  name: "pay"
}