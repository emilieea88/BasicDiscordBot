const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// Here is where you choose your prefix for the bot to recognize 
const prefix = '!bdb ';
 
const fs = require('fs');

// You can change your secret token below, replace mytoken with the name of your token key 
const mySecret = process.env['mytoken']

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

// You can change the console log message or delete the next 3 lines entirely if you don't want to see the log
client.once('ready', () => {
    console.log('BasicDiscordBot is online!');
});

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'commands'){
        client.commands.get('commands').execute(message,args);
    } else if (command == 'cat'){
        client.commands.get('cat').execute(message,args);
    } else if (command == 'dog'){
        client.commands.get('dog').execute(message,args);
    } else if (command == 'pic'){
        client.commands.get('pic').execute(message,args);
    }
});

// Your login info always needs to be the last line in this file
client.login(mySecret);