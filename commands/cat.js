module.exports = {
    name: 'cat',
    description: 'this is cat command',
    execute(message,args){
        message.channel.send('=^._.^=');
    }
}