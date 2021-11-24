const fs = require('fs');
const photos = './photos';

const str1 = 'https://raw.githubusercontent.com/';
const str2 =  '';
const str3 = '.jpg';

module.exports = {
    name: 'pic',
    description: 'random pic',
    execute(message, args){
        message.channel.send(str1.concat(str2, String((Math.floor(Math.random()*(fs.readdirSync(photos).length)))), str3));
    }
}