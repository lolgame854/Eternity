const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor(`Avatar de ${message.author.username}`)
    .setImage(message.author.displayAvatarURL)
    .setTimestamp()
    message.channel.send(embed)
}

module.exports.help = {
    name: "avatar"
}