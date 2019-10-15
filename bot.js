// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is from user TimmyTurnt
  const user = 'TimmyTurnt#9366';
  if (message.author.id === '140253409046560768') {
    // mention user TimmyTurnt
    var interval = setTimeout(() => {
      message.channel.send('<@140253409046560768>');
    }, 5000);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret