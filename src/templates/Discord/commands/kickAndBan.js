const command = require('../command.js')
const { MessageEmbed } = require('discord.js')

module.exports = (Client) => {
    command(Client, ['ban', 'b'], message => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if(
        member.hasPermission('ADMINISTRATOR') || 
        member.hasPermission('BAN_MEMBERS')
      ) {
          const target = mentions.users.first()
          console.log(target)
          if (target) {
              const targetMember = message.guild.members.cache.get(target.id)
              targetMember.ban()
              const ban = new MessageEmbed()
                    .setColor('#00FF00')
                    .setTitle('Bannissement')
                    .setDescription(`User, **${targetMember}** has been banned by : **${tag}** !`)
                    .setTimestamp()
                    message.channel.send(ban)
          } else {
            const err = new MessageEmbed()
                .setColor('#D51700')
                .setTitle('Erreur')
                .setDescription(`${tag}, **please, specify a user.**`)
                .setTimestamp()
            message.channel.send(err)
          }
        } else {
            const errperm = new MessageEmbed()
                .setColor('#D51700')
                .setTitle('Error')
                .setDescription(`${tag}, **you do not have permission(s) !**`)
                .setTimestamp()
            message.channel.send(errperm)
        }
    })

    command(Client, 'kick', message => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if(
        member.hasPermission('ADMINISTRATOR') || 
        member.hasPermission('KICK_MEMBERS')
      ) {
          const target = mentions.users.first()
          console.log(target)
          if (target) {
              const targetMember = message.guild.members.cache.get(target.id)
              targetMember.kick()
              const kick = new MessageEmbed()
                    .setColor('#00FF00')
                    .setTitle('Expulsion')
                    .setDescription(`User, **${targetMember}** has been kicked by : **${tag}** !`)
                    .setTimestamp()
                    message.channel.send(kick)
          } else {
            const errtag = new MessageEmbed()
            .setColor('#D51700')
            .setTitle('Erreur')
            .setDescription(`${tag}, **please, specify a user.**`)
            .setTimestamp()
            message.channel.send(errtag)
          }
        } else {
            const errkickperm = new MessageEmbed()
            .setColor('#D51700')
            .setTitle('Erreur')
            .setDescription(`${tag}, **you do not have permission(s) !**`)
            .setTimestamp()
            message.channel.send(errkickperm)
        }
    })
}