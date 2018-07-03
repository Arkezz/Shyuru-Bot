const Discord = require("discord.js");
let coins = require("../coins.json");


module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinembed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
.setColor("#00FF00")
.addField("💸", uCoins);
  
message.channel.send(coinembed).then(m => m.delete(3000));


  

}

module.exports.help = {
  name: "coins"
}
