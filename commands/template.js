const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
message.channel.send('Template!')
};

exports.config = {
  name: "template",
  guildOnly: true,
  aliases: [],
};
