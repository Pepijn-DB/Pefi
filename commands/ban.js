const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Ban someone')
        .setDefaultPermission(false)
        .addSubcommand(subcommand =>
            subcommand
                .setName('perm')
                .setDescription('Permanently ban an user')
                .addUserOption(option => option.setName('user').setDescription('The user that needs to be permanently banned').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('The reason why the user needs to be banned')))
                
        .addSubcommand(subcommand =>
            subcommand
                .setName('temp')
                .setDescription('Temporary ban someone')
                .addUserOption(option => option.setName('user').setDescription('The user that needs to be temporary banned').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('The reason why the user needs to be banned'))),
        //


        async execute(interaction) {
            const commandid = interaction.commandId;
            if (interaction.options.getSubcommand() === 'perm') {
                const user = interaction.options.getUser('user');
                const reason = interaction.options.getString('reason');
                const mod = interaction.user;
                if (!reason){
                    interaction.guild.bans.create(user, options = {reason: `${mod} banned him with an unknown reason`} )  
                }
                else{
                    interaction.guild.bans.create(user, options = {reason: `${mod} banned him with the reason ${reason}`})
                }
                
                await interaction.reply({ content: `${user} is permanently banned`, ephemeral: true});
            }
        }
};