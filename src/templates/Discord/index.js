// ? Dependencies import
const Discord = require('discord.js');
const Client = new Discord.Client();

// * Local import
const clear = require('./commands/clear');
const kickAndBan = require('./commands/kickAndBan');

Client.on('ready', async () => {
    
    setInterval(() => {

        // ? Get the number of online user(s).
        const allMember = Client.guilds.cache.get(process.env.SERVERID);
        // ? Set a variable
        const memberCount = allMember.members.cache.filter(member => member.presence.status !== "offline").size;
        
        // * Update the presence.
        Client.user.setPresence({
            activity: {
                name: `${memberCount} user(s) !`,
                type: 'WATCHING'
            }
        });
        // * Update the prsence evry 1 second ; (You can put every interval you want).
    }, 1000)
        
        
        console.log(`Bot started with ${Client.user.username}`);
        
        clear(Client);
        kickAndBan(Client);
});

// * Login with the bot's credential.
Client.login(process.env.TOKEN);