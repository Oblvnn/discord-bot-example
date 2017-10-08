const Discord = require('discord.js'); //Make sure to install discord.js using NPM.
const client = new Discord.Client();

const config = require('./config.json'); //Gets config.json.
const prefix = config.prefix; //Reads prefix line in config.json.

function cmd(str, msg) { //Function for commands.
	return msg.content.startsWith(prefix + str);
}

client.on('ready', () => {
	console.log(`[Bot is online | Node: ${process.version} | Discord.js: ${Discord.version}]\nConnected as: ${client.user.username} (ID: ${client.user.id})\nGuilds Connected: ${client.guilds.size}`); //Sends statistics to console.
	client.user.setGame(`prefix = ${prefix} | ${client.guilds.size} Servers`); //SetGame shows prefix and guild size.
});

client.on('message', message => {
	if (message.author.bot) return; //If author is a bot returns nothing.
	if (message.channel.type === 'dm') return; //Disables commands in dms.
	const args = message.content.split(/[ ]+/); //Defines args.

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

	if (cmd("kick", message)) {
		if (!message.member.permissions.has("KICK_MEMBERS")) //Checks if user has permissions.
			return message.channel.send(`⚠️ **${message.author.username}**, You don't have the permissions to kick users.`);
		if (message.member.permissions.has("KICK_MEMBERS")) {
			var member = message.mentions.members.first();
			if (!member)
				return message.channel.send(`⚠️ **${message.author.username}**, Please mention a valid user of this server.`);
			if (!member.kickable)
				return message.channel.send(`⚠️ **${message.author.username}**, You can't kick **${member.user.tag}**.`);
			message.guild.member(message.mentions.users.first()).kick(); //Performs the kick on given user.
			message.channel.send(`✅ **${message.author.username}** has kicked **${member.user.tag}**`);
		}
	}

	if (cmd("ban", message)) {
		if (!message.member.permissions.has("BAN_MEMBERS")) //Checks if user has permissions.
			return message.channel.send(`⚠️ **${message.author.username}**, You don't have the permissions to ban users.`);
		if (message.member.permissions.has("BAN_MEMBERS")) {
			let member = message.mentions.members.first();
			if (!member)
				return message.channel.send(`⚠️ **${message.author.username}**, Please mention a valid user of this server.`);
			if (!member.bannable)
				return message.channel.send(`⚠️ **${message.author.username}**, You can't ban **${member.user.tag}**.`);
			message.guild.member(message.mentions.users.first()).ban(); //Performs the ban on given user.
			message.channel.send(`✅ **${message.author.username}** has banned **${member.user.tag}**`);
		}
	}

	if (cmd("prune", message)) {
		const deleteCount = parseInt(args[0], 10);
		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.channel.send(`⚠️ **${message.author.username}**, please provide a number between 2 and 100 for the number of messages to delete`);
		const fetched = message.channel.fetchMessages({ count: deleteCount });
		message.channel.bulkDelete(fetched).catch(error => message.channel.send(`⚠️ **${message.author.username}**, couldn't delete messages because of: ${error}`));
	}

});
client.login(config.token); //Reads token line in config.json.
