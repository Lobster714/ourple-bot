require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const TOKEN = process.env.TOKEN;

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

eventHandler(client);

client.login(TOKEN)