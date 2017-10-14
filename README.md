# Discord bot example written in JavaScript using Discord.JS
Simple code examples for Discord.js
> You must have [Node](https://nodejs.org/) installed to run a discord.js bot.

## Getting started

```
$ git clone https://github.com/OblivionSan/discord-bot-example.git
$ npm install
```
Create a discord bot token [here](https://discordapp.com/developers/applications/me) and replace it where you see **TOKEN_HERE**, replace **PREFIX_HERE** to your prefered prefix.
```js
const prefix = config.prefix; //Reads prefix line in config.json.

client.login(config.token); //Reads token line in config.json.
```
**config.json** example
```json
{
  "prefix" : "PREFIX_HERE",
  "token" : "TOKEN_HERE"
}
```
Invite your bot to your discord server using the link given. Make sure to replace `<client-id>` with your bots [client id](https://discordapp.com/developers/applications/me). 
```
https://discordapp.com/oauth2/authorize?&client_id=<CLIENT ID>&scope=bot&permissions=0
```
To start your bot, simply open up command prompt in your bots directory and then type the following.
```
$ node app.js
```

## Built with
> [Discord.js](https://discord.js.org/#/) - Node Module used.

> [Node](https://nodejs.org/) - Used to run node apps and modules.

## Author
- **OblivionSan** - [@OblivionSan](https://twitter.com/OblivionSan) | [Discord Server](https://discord.gg/kxNeGRC) | [Website](https://oblivionsan.tk)
