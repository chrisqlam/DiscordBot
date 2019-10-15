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
  // If the message is from Charmander bot ping user Eli
  if (message.author.id === '177931388115222528') {
    var interval = setTimeout(() => {
      message.channel.send('<@177931388115222528>');
    }, 15000);
  }

  if (message.content.includes(":moon2b:")) {
    message.react('499898499639279626');
  }

  if (message.content === '!ping') {
    message.channel.send('pong');
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret