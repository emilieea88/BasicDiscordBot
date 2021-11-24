module.exports = {
    name: 'commands',
    description: 'this is all commands',
    execute(message,args){
        message.channel.send('Current commands are !bdb cat, !bdb dog, and !bdb pic');
    }
}