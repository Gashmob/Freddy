import { EmbedBuilder, SlashCommandBuilder } from '@discordjs/builders';
import { MessageFlags } from '@discordjs/core';
import { Command } from './command';
import { colors } from '../tools';

export default {
    name: 'status',
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Display status of the bot')
        .setDMPermission(true),
    async execute(interaction, api) {
        const nb_projects = 0;
        const nb_tasks = 0;
        const nb_users = 0;
        const embed = new EmbedBuilder()
            .setTitle('Freddy status')
            .setDescription(':green_circle: Online')
            .setColor(colors.info)
            .addFields(
                { name: '# Projects', value: `${nb_projects}` },
                { name: '# Tasks', value: `${nb_tasks}` },
                { name: '# Users', value: `${nb_users}` },
            )
            .setTimestamp()
            .toJSON();

        await api.interactions.reply(interaction.id, interaction.token, {
            embeds: [embed],
            flags: MessageFlags.Ephemeral,
        });
    },
} as Command;
