const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .addField(":upside_down: Nom :", bot.user.username)
    .addField(":gear: Commandes :", config.commande)
    .addField(":sunglasses: Nombre de serveur ou je suis :", bot.guilds.size)
    .addField(":tools: Mon createur :", "lolgame854#3470")
    .addField(":page_facing_up: Version du bot :", config.version)
    message.chanenl.send(embed)
}

module.exports.help = {
    name: "bot"
}