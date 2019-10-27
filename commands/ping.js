const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send(`🏓 Pinging....`);


    const embed = new Discord.RichEmbed()
    .setAuthor("Pong !")
    .addField("Temps de reaction :", `${msg.createdTimestamp - message.createdTimestamp}ms`)
    .addField("API latence est de :", `${Math.round(bot.ping)}ms`)
    .setTimestamp()

    msg.edit(embed);
}

module.exports.help = {
    name: "ping"
}