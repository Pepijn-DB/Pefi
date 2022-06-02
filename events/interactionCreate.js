module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		const wait = require('node:timers/promises').setTimeout;
		const { Client, Collection, Intents } = require('discord.js');
		const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		async function test() {
			if (interaction.isSelectMenu()){

				//F1 guess select menu
				//F1 guess Bahrain
				if (interaction.customId === 'Bahrain') {
					const value = interaction.values;
					await interaction.deferUpdate();
					await wait(2000);
					await value == interaction.values;
					
		
					if (value == 'Bahrain') {
						await interaction.channel.send({ content: 'This anwser is correct!', ephemeral: true});
					}
					else if (value !== 'Bahrain') {
						await interaction.channel.send({ content: 'This anwser is incorrect!', ephemeral: true});
					}
				}
			}
		
		
		
			// Als interaction is een button
			if (interaction.isButton()){
		
				//F1 close and reveal
				if (interaction.customId === 'Close') {
					if (anwser) return;
					const anwser = test
					interaction.editReply(`The anwser was : ${anwser}`)
				}
			}
		}

		test()
	}	
};