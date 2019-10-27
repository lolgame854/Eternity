const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setAuthor(`Serveur info - ${message.guild.name} ${message.guild.iconURL}`)
      .addField("Nom :", message.guild.name)
      .addField("ID du serveur :", message.guild.id)
      .addField("Propriétaire :", message.guild.owner)
      .addField("Nombre de joueur :", message.guild.memberCount)
      .addField("Nombre de role :", message.guild.roles.size)
      .setFooter("Eternity © 2019 | by lolgame854")
}

module.exports.help = {
    name: "serverinfo"
}