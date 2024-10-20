const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

console.log(c.blue + " ");
    console.log(c.blue + " _   _                     _____   _             ");
    console.log(c.blue + "| \\ | |                   |  __ \\ | |            ");
    console.log(c.blue + "|  \\| |  _ __  __      __ | |__) || |  __ _   _   _ ");
    console.log(c.blue + "| . ` | | '__| \\ \\ /\\ / / |  ___/ | | / _` | | | | |");
    console.log(c.blue + "| |\\  | | |     \\ V  V /  | |     | || (_| | | |_| |");
    console.log(c.blue + "|_| \\_| |_|      \\_/\\_/   |_|     |_| \\__,_|  \\__, |");
    console.log(c.blue + "                                               __/ |");
    console.log(c.blue + "                                              |___/ ");
    console.log(c.blue + "By https://nrwplay.de");
    console.log(c.blue + " ");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.token)
})();

