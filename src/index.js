const { Client, GatewayIntentBits,Collection } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

console.log(" ");
    console.log(" _   _                     _____   _             ");
    console.log("| \\ | |                   |  __ \\ | |            ");
    console.log("|  \\| |  _ __  __      __ | |__) || |  __ _   _   _ ");
    console.log("| . ` | | '__| \\ \\ /\\ / / |  ___/ | | / _` | | | | |");
    console.log("| |\\  | | |     \\ V  V /  | |     | || (_| | | |_| |");
    console.log("|_| \\_| |_|      \\_/\\_/   |_|     |_| \\__,_|  \\__, |");
    console.log("                                               __/ |");
    console.log("                                              |___/ ");
    console.log("By https://nrwplay.de");
    console.log(" ");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.token)
})();

