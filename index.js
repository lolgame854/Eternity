const config = require('./config.json')
const Discord = require('discord.js')
const fs = require('fs')

const bot = new Discord.Client()

var maintenance = false // Si on redemarre le bot, il n'y a plus de maintenance
var list_commandes = ["8ball", "aide", "avatar", "chat", "chien", "clear", "help", "mute", "ping", "prefix", "project", "say", "sayembed", "sondage", "unmute"] // Liste de toute les commandes du bot
var messageAuthorIsSTAFF = false // Si l'auteur de la commande est un membre du staff

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);

    let jsFile = files.filter(f => f.split('.').pop() == 'js');
    if(jsFile.length <= 0){
        console.log('Je ne trouve pas la commande.')
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props);
    })
})

bot.on('ready', async () => {
    console.log(`${bot.user.username} est en ligne !`)
    bot.user.setStatus('online')
    bot.user.setActivity("Besoin Aide ? => e!help")
})

bot.on('message', async message => {
    if(message.author.bot)return;
    if(message.channel.type === 'dm') return;
    messageAuthorIsSTAFF = false
    


    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        }
    }

    let prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);

    const main1 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Maintenance")
    .setDescription("Le bot est actuellement en maintenance !")
    .setFooter("Eternity © 2019 | by lolgame854")

    const main2 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Maintenance")
    .setDescription("Maintenance activé !")
    .setFooter("Eternity © 2019 | by lolgame854")

    const main3 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Maintenance")
    .setDescription("Maintenance désactivé !")
    .setFooter("Eternity © 2019 | by lolgame854")

    const noperm = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Maintenance")
    .setDescription("Seul le createur peut mettre le bot en maintenance.")
    .setFooter("Eternity © 2019 | by lolgame854")

    if (message.author.id === "411817236332806165") messageAuthorIsSTAFF = true // ID du staff du bot

    if (maintenance){
        list_commandes.forEach(function(item, index, array) {
            if (message.content.startsWith(prefix + item)){
                if (!messageAuthorIsSTAFF) {
                    message.channel.send(main1)
                    maintenance = true
                } 
            }
        });
    }

    if (!messageAuthorIsSTAFF && maintenance) return

    if(message.content === prefix + "maintenance"){
        if (message.author.id === "411817236332806165") {
            if (maintenance){
                maintenance = false
                message.channel.send(main3)
            } else {
                maintenance = true
                message.channel.send(main2)
            } 
        } else {
            message.channel.send(noperm)
        }
    }

    let commandFile = bot.commands.get(command.slice(prefix.length));
    if(commandFile) commandFile.run(bot, message, args)



})
bot.login(config.token);