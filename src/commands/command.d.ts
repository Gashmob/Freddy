import { SlashCommandBuilder } from '@discordjs/builders';
import { API, APIInteraction } from '@discordjs/core';

export declare interface Command {
    name: string;
    data: SlashCommandBuilder;
    execute: (interaction: APIInteraction, api: API) => Promise<void>;
}
