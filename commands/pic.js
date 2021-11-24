const fs = require('fs');
// ./photos refers to the photos folder in this repl. If your photos are elsewhere, this needs to be changed.
const photos = './photos';

// If your photos are hosted elsewhere, just change these constants and/or add/delete them to fit your needs
const str1 = 'https://raw.githubusercontent.com/';
const str2 =  '';
const str3 = '.jpg';

module.exports = {
    name: 'pic',
    description: 'random pic',
    execute(message, args){
      // This generates a random number between 0 and the number of photos in your photos folder and then concatenates that with the strings above to create the URL for your photo.
        message.channel.send(str1.concat(str2, String((Math.floor(Math.random()*(fs.readdirSync(photos).length)))), str3));
    }
}