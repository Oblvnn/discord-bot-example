const Discord = require('discord.js'); //Make sure to install discord.js using NPM.
const client = new Discord.Client();

const config = require('./config.json'); //Gets config.json
const prefix = config.prefix; //Reads prefix line in config.json.

function cmd(str, msg) { //Function for commands.
	return msg.content.startsWith(prefix + str);
}

client.on('ready', () => {
	console.log(`[Bot is online | Node: ${process.version} | Discord.js: ${Discord.version}]\nConnected as: ${client.user.username} (ID: ${client.user.id})\nGuilds Connected: ${client.guilds.size}`); //Sends statistics to console.
	client.user.setGame(`prefix = ${config.prefix} | ${client.guilds.size} Servers`); //SetGame shows prefix and guild size.
});

client.on('message', message => {
	if (message.author.bot) return; //If author is a bot returns nothing.
	if (message.channel.type === 'dm') return; //Disables commands in dms.

	if (cmd('ping', message)) {
		message.channel.send(`🏓 Pong! - API Lantancy: **${Date.now() - message.createdTimestamp}**ms`);
	}

	if (cmd('hex', message)) {
		let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
		let embed = new Discord.RichEmbed() //Embeds.
			.setTitle(`#${color}`)
			.setColor(`#${color}`);
		message.channel.send({ embed: embed });
	}

});
client.login(config.token); //Reads token line in config.json.
