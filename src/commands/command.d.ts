import { SlashCommandBuilder } from '@discordjs/builders';
import { API, APIApplicationCommandInteraction } from '@discordjs/core';

export declare interface Command {
    name: string;
    data: SlashCommandBuilder;
    execute: (
        interaction: APIApplicationCommandInteraction,
        api: API,
    ) => Promise<void>;
}
