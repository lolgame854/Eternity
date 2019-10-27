const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    if(message.member.id != "411817236332806165")
    return message.channel.send("Désolé mais seul le créateur peut exécuter cette commande.")
    
    var memberID = message.guild.members.filter(m=>m.roles.has('636554898397462528')).map(m=>m.id)
    var memberID2 = message.guild.members.filter(m=>m.roles.has('636554898397462528')).map(m=>m.id)
    const args1 = message.content.trim().split(/ +/g)
    const repons = args1.slice(1).join(" ")

    const embed = new Discord.RichEmbed()
    .setAuthor("GREEN")
    .setAuthor(`Help me !`)
    .setTitle(`${message.author.username} a besoin de ton aide  ! :wave: `)
    .setDescription(repons)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)

    const niquel = new Discord.RichEmbed()
    .setAuthor(bot.user.username)
    .setColor("GREEN")
    .setDescription("Je viens bien t'informé le staff ! :ok_hand:")

    if(!args[0])
    return message.reply("Veuillez mettre un message a la suite.")
 
    message.channel
    .send(niquel)
    .then(m => m.delete(2000))
    memberID.map(u => bot.users.get(u).send(embed)); 
}

module.exports.help = {
    name: "aide"
}