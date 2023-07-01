import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageFlags } from '@discordjs/core';
import { Command } from './command';

export default {
    name: 'status',
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Display status of the bot')
        .setDMPermission(true),
    async execute(interaction, api) {
        await api.interactions.reply(interaction.id, interaction.token, {
            content: 'Pong!',
            flags: MessageFlags.Ephemeral,
        });
    },
} as Command;
