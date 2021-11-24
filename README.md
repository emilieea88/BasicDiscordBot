# BasicDiscordBot
A very basic Discord bot for beginners with Node.js, discord.js, and JavaScript in general. I am a complete beginner as well (I had never even seen JavaScript before and I wrote this bot in under two days), so some of this code may not be the most efficient or beautiful, but it does work.

## Acknowledgments 
I used the following resources to create this bot:
- [CodeLyon's "Code Your Own Discord Bot" videos](https://www.youtube.com/watch?v=j_sD9udZnCk&list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4)
- [@AvyAvocado's Node.js 16 starter](https://replit.com/talk/learn/Nodejs-16-on-replit/85501)
- [Node.js](https://nodejs.org) and [Discord.js](https://discord.js.org)

## How to Use this Repo to Create Your Own Bot
### Setting Up the Bot
1. If you don't already have a [Discord](https://discord.com) account, create one. 
2. Go to the [developer portal](https://discord.com/developers). Click the "New Application" button to create your app. 
3. Once the app is created, in the sidebar, go to Bots and select "Add Bot." Give your bot a name! Choose if you want your bot to be public or private. 

![image](https://user-images.githubusercontent.com/61885885/143278662-2729f474-607b-45e4-baa0-d459b3797571.png)

4. Go to the OAuth2 section on the sidebar, and then to URL Generator. Check the "bot" box as your scope. Then, select the permissions you want your bot to have. For the commands defined in this repo, all you need are "Read Messages/View Channels," "Send Messages," and "Embed Links." The URL generated below these selections will be the URL to send to people (or visit it yourself) to have your bot join their (or your) server. You can do this now or later.
5. If you don't already have a server set up, it is a good idea to make one. It helps when you want to test the bot.

### Setting up the Code
1. Fork this repo to your GitHub account.
2. Create a [replit](https://repl.it) account if you don't already have one. This is where the bot will run. (Note: You can also run it locally by downloading [Node.js](https://nodejs.org/en/) and running it in your shell. However, you will have to always have your computer running for the bot to run.)
3. Select "create a new repl" and in the top right corner, select "Import from GitHub." 
4. Go back to the [Discord developer portal](https://discord.com/developers). Go to the Bots section on the sidebar. Copy your token and remember to **keep it secret**! Discord should notify you if it gets leaked. 
5. Back in your repl, go to the Secrets section of the sidebar (it looks like a lock icon). Where it says "key," you can give your token a name and paste the actual token into the values section. This is how you will keep your token secret and still have a usable bot. I am calling it "mytoken" but you can choose any name you want, just remember to change it in the index.js file where it reads `const mySecret`.

![image](https://user-images.githubusercontent.com/61885885/143288133-9b1fd27c-73e6-403b-8863-f2de1e08fe1f.png)

6. Go to the index.js file. Where it reads `const prefix`, you can input whatever prefix you want your bot to recognize. It can be a symbol alone, text alone, or a symbol and text, it really just depends on how you want your bot to recognize commands, and if you have other bots on your server. You can also leave it as is.

### The Basic Commands
1. The basic commands I'm using in this repo are "cat" and "dog," but you can change them to whatever you want your bot to do. All you need to do is change the code where it checks for the command (for example, `command == 'dog'`). 
2. In the commands folder, you will also need to change/add the files there if you are changing your commands. [CodeLyon explains this better than I ever could](https://youtu.be/nTGtiCC3iQM?t=356).
3. To add more commands, simply follow the same pattern, starting with `else if` after the curly bracket, give your command a name, and copy one of the commands in the commands folder.

### The Pics Command
This command sends a random photo from a folder in your GitHub repo, and is therefore why it's pretty much necessary to have this repl connected to GitHub.
1. For this command to work as written, your photos need to have a consistent naming convention with sequential numbers at the end of the file name, with no missing numbers. For example, in this repo they are called "kitty_1.jpg", "kitty_2.jpg". 
2. MacOS makes it really easy to rename files. You can select all the files you want to rename, right click and select "rename {n} items." In the window that pops up, where it says "Custom Format," you can input your naming convention ("kitty_" for example). Where it says "start numbers at" you can leave it as 1. I don't know how this works on Windows or Linux, but no matter what OS you use you can always manually rename your photos. 
   - Then just drag and drop the photos into the photos folder in the GitHub repo that you forked. 
   - Click on one of the new photos and view the raw image. The URL should look something like raw(.)githubusercontent(.)com/{yourusername}/.... Copy the part from your username all the way to the number of the photo. For example, up to the _ before 2 in kitty_2.jpg.
4. Back in the pics file in your repl, paste this part that you copied in after the =, between the quotes, where it says `const str2 =''`. 
5. After that, you should be good to go. Adding new photos to the photos folder on GitHub will not mess up the code, but it will require you to rerun the bot.

### Running the Bot
1. Go to version control in the replit sidebar (it looks like a fork). Push your commits to your GitHub repo.
2. Run your bot by clicking the run button at the top of the page in replit. It should say "BasicDiscordBot is online!" in the console. 
   - If it does not say this, or if it throws an error, something is wrong. Google your error, because seeing as I am also a beginner, I don't think I would be able to help you much.
3. Keeping the bot up:
   - If you have the free version of replit, your bot will go to sleep after an hour without a command and you will have to rerun it to get it working again. 
   - You could also try [this method](https://replit.com/talk/learn/Hosting-discordjs-bots-on-replit-Works-for-both-discordjs-and-Eris/11027) to constantly ping it so it doesn't fall asleep, but it adds a complexity to the code that I can't help with. 
   - You could also shell out $7 a month for the "Hacker" subscription on replit, which allows you to have 5 "always on" repls. If you choose this method, just go to the top of your repl where it says your username / your bot name and click there. There is a toggle for "always on."
4. If you haven't already added your bot to your Discord server, visit the URL you generated in step 4 in the ["Setting Up the Bot"](https://github.com/emilieea88/BasicDiscordBot#setting-up-the-bot) section above. Choose the server you're inviting the bot to. 

## Thank you!
If you enjoyed this tutorial, consider [buying me a coffee](https://ko-fi.com/emilieea88).
