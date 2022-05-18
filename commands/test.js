const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton } = require('discord.js');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('This is a test command (test)')
		.setDefaultPermission(false),
	async execute(interaction) {
		const commandid = interaction.commandId;
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('Bahrain')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'SYESe',
							description: 'This is a description',
							value: 'Bahrain',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					])
			);


		await interaction.reply({ content: commandid + "\n test", components: [row] });
    }
};