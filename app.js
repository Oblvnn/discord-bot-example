const Discord = require('discord.js'); //Make sure to install discord.js using NPM.
const client = new Discord.Client();

const prefix = '!'; //Change the prefix to whatever you want to use on your bot.

function cmd(str, msg) { //Function for commands.
    return msg.content.startsWith(prefix + str);
}

client.on('message', message => {

    if (cmd('hex', message)) {
      let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
      let embed = new Discord.RichEmbed() //Embeds.
            .setTitle(`#${color}`)
            .setColor(`#${color}`);
     message.channel.send({embed: embed});
  }

})
client.login(TOKEN_HERE); //Replace "TOKEN_HERE" with your bots token.
