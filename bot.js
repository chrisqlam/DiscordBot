// Import the discord.js module
const Discord = require('discord.js');

//Webhook
const twitchHook = new Discord.WebhookClient(process.env.WEB_ID, process.env.WEB_TOKEN)

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
  //reacts to :moon2B:
  if (message.content.includes("565008620320849930")) {
    message.react('499898499639279626');
  }

  //test command
  if (message.content === '!ping') {
    message.channel.send('pong');
  }

  //if eli sends a message react with E L I
  if (message.author.id === '177931388115222528') {
    message.react('🇪')
      .then(() => message.react('🇱'))
      .then(()=> message.react('🇮'))
      .catch(() => message.channel.send('One of the emojis failed to react.'));
  }

  //adds role to members who wish to recieve notifactions when Jovi streams
  if (message.content === "!jovisub") {
    const guildMember = message.member;
    //removes the role if you already have the role
    if (guildMember.roles.has('642190113324924949')){
      guildMember.removeRole('642190113324924949')
      message.channel.send('You have unsubbed to Jovi')
    }
    else {
    guildMember.addRole('642190113324924949');
    message.channel.send('You are now subbed to Jovi');
    }
  }

  if (message.content === "!hook") {
    message.channel.send();
  }
  
  
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret