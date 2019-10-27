const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(message.member.id != "411817236332806165")
    return message.channel.send("Désolé mais seul le créateur peut exécuter cette commande.")

    const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setAuthor(bot.user.username)
    .setDescription("Tout les project pour le bot.")
    .addField("**> Commande :**", "sondage | annonce | ban | mute | unmute\nkick | report | clear | ect...")
    .setTimestamp()
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter(bot.user.username, bot.user.displayAvatarURL)
    message.channel.send(embed)
}

module.exports.help = {
    name: "project"
}