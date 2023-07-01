import { EmbedBuilder, SlashCommandBuilder } from '@discordjs/builders';
import { MessageFlags } from '@discordjs/core';
import { Command } from './command';
import { colors } from '../tools';

export default {
    name: 'credits',
    data: new SlashCommandBuilder()
        .setName('credits')
        .setDescription('Display credits')
        .setDMPermission(true),
    async execute(interaction, api) {
        const embed = new EmbedBuilder()
            .setTitle('Credits')
            .setColor(colors.info)
            .addFields([
                { name: 'Author', value: 'Gashmob' },
                { name: 'Sources', value: 'https://github.com/Gashmob/Freddy' },
            ])
            .toJSON();

        await api.interactions.reply(interaction.id, interaction.token, {
            embeds: [embed],
            flags: MessageFlags.Ephemeral,
        });
    },
} as Command;
