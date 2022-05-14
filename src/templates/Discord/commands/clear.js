const command = require('../command');
const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    command(client, ['clear', 'c'], (message) => {

        const { member } = message

        const tag = `<@${member.id}>`

        if (message.member.hasPermission('MANAGE_MESSAGES', 'ADMINISTRATOR')) {
            message.channel.messages.fetch().then(result => {
                message.channel.bulkDelete(result);
                const embed = new MessageEmbed()
                    .setColor('#00FF00')
                    .setTitle('Clear')
                    .setDescription(`Channel, ${message.channel.name} has been cleared !`)
                    .setTimestamp()
                    message.channel.send(embed)
            })
        } else {
            const clearEmbed = new MessageEmbed()
                    .setColor('#D51700')
                    .setTitle('Error')
                    .setDescription(`${tag}, you don't have permission(s) to.`)
                    .setTimestamp()
                    message.channel.send(clearEmbed)
        }
    });
};