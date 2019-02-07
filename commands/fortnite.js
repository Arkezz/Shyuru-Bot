const Discord = require("discord.js")
const keys = require("../data/apikeys.json")
const Client = require(`fortnite`);
const fortnite = new Client(`2632c97b-d782-44be-a28f-2b45ef38ec1f`);
const errors = require("../utils/errors.js");


module.exports.run = async (bot, message, args) => {
 let username = args.slice(2).join(" ");
  let platform = args[1].toLowerCase() || `pc`;
  let gamemode = args[0].toLowerCase();

  if(gamemode != `solo` && gamemode != `duo` && gamemode != `squad` && gamemode != `lifetime`) return message.reply("Usage: s!fornite <mode> <platform> <user>");


if(!username) return errors.cantfindUser(message.channel)
  
  let data = fortnite.user(username,platform).then(data => {
    

      let stats = data.stats;

if(gamemode === `solo`){
   let solostats = stats.solo;

   let score = solostats.score;
   let kd = solostats.kd;
   let matches = solostats.matches;
   let kills = solostats.kills;
   let wins = solostats.wins;
   let top3 = solostats.top_3;

   

   let soloembed = new Discord.RichEmbed()
    .setTitle("Fortnite Tracker Solo Stats")
   .setColor("#0000FF")
   .addField("Wins", wins, true)
   .addField("Kills", kills, true)
   .addField("Score", score, true)
   .addField("Matches Played", matches, true)
   .addField("Top 3s", top3, true)
   .addField("Kill/Death Ratio", kd, true);
    
message.channel.send(soloembed);
}else if(gamemode === `duo`){
  let duostats = stats.duo;

  let score = duostats.score;
  let kd = duostats.kd;
  let matches = duostats.matches;
  let kills = duostats.kills;
  let wins = duostats.wins;
  let top3 = duostats.top_3;



  let duoembed = new Discord.RichEmbed()
  .setTitle("Fortnite Tracker Duo Stats")
 .setColor("#0000FF")
 .addField("Wins", wins, true)
 .addField("Kills", kills, true)
 .addField("Score", score, true)
 .addField("Matches Played", matches, true)
 .addField("Top 3s", top3, true)
 .addField("Kill/Death Ratio", kd, true);
  
message.channel.send(duoembed);
}else if(gamemode === `squad`){
  let squadstats = stats.squad;

  let score = squadstats.score;
  let kd = squadstats.kd;
  let matches = squadstats.matches;
  let kills = squadstats.kills;
  let wins = squadstats.wins;
  let top3 = squadstats.top_3;

  

  let squadembed = new Discord.RichEmbed()
  .setTitle("Fortnite Tracker Squad Stats")
 .setColor("#0000FF")
 .addField("Wins", wins, true)
 .addField("Kills", kills, true)
 .addField("Score", score, true)
 .addField("Matches Played", matches, true)
 .addField("Top 3s", top3, true)
 .addField("Kill/Death Ratio", kd, true);
  
message.channel.send(squadembed);
}else{


      let lifetime = stats.lifetime;
      let score = lifetime[6][`Score`];
      let mplayed = lifetime[7][`Matches Played`];
      let wins = lifetime[8][`Wins`];
      let winper = lifetime[9][`Win%`];
      let kills = lifetime[10][`Kills`];
      let kd = lifetime[11][`K/d`];


      
      

      let lifetimeembed = new Discord.RichEmbed()
      .setTitle("Fortnite Tracker Lifetime Stats")
      .setColor("#0000FF")
      .addField("Wins", wins, true)
      .addField("Kills", kills, true)
      .addField("Score", score, true)
      .addField("Matches Played", mplayed, true)
      .addField("Win Percentage", winper, true)
      .addField("Kill/Death Ratio", kd, true);
      
  message.channel.send(lifetimeembed);
}


});

  }


  module.exports.help = {
    name: "fortnite",
    aliases: ["Fortnite"]
}