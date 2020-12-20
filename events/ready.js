const chalk = require('chalk');
const Discord = require('discord.js');
const moment = require('moment');
const config = require('../config.json');
var prefix = config.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
client.user.setPresence({
        game: {
            name: `${prefix}help`,
            type: 'watching'
        },
        status: 'idle'
    })
    console.log(`Başarılı`);
}