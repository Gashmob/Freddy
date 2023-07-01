import { EmbedBuilder, SlashCommandBuilder } from '@discordjs/builders';
import { MessageFlags } from '@discordjs/core';
import { Command } from './command';
import { colors } from '../tools';

export default {
    name: 'help',
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Display some help')
        .setDMPermission(true),
    async execute(interaction, api) {
        const embed = new EmbedBuilder()
            .setTitle('Help')
            .setColor(colors.default)
            .addFields([
                {
                    name: 'Documentation',
                    value: 'https://github.com/Gashmob/Freddy/doc',
                },
                {
                    name: 'Issues',
                    value: 'https://github.com/Gashmob/Freddy/issues',
                },
            ])
            .toJSON();

        await api.interactions.reply(interaction.id, interaction.token, {
            embeds: [embed],
            flags: MessageFlags.Ephemeral,
        });
    },
} as Command;
