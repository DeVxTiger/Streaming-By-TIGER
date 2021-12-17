const Discord = require("discord.js");
const Tiger = new Discord.Client();
//////// playing And streaming ////////
Tiger.on("ready", () => {
  console.log(Online In Servers);
  let statuses = [BY TIGER];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Hama.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
Tiger.on("ready", () => {
  var join = Tiger.channels.get(""); /// ID VOICE
  if (join) join.join();
});
////////////////Tokin

Tiger.login ();
