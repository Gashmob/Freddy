import { REST } from '@discordjs/rest';
import { WebSocketManager } from '@discordjs/ws';
import {
    Client,
    GatewayDispatchEvents,
    GatewayIntentBits,
    InteractionType,
} from '@discordjs/core';
import { client_id, token } from '../config.json';
import commands from './commands';
import './utils';

const rest = new REST({ version: '10' }).setToken(token);

const gateway = new WebSocketManager({
    token,
    intents: GatewayIntentBits.Guilds,
    rest,
});

const client = new Client({ rest, gateway });

commands.forEach((command, name) => {
    client.api.applicationCommands
        .createGlobalCommand(client_id, command.data.toJSON())
        .then(() => console.log(`Command ${name} created`));
});

client.on(
    GatewayDispatchEvents.InteractionCreate,
    async ({ data: interaction, api }) => {
        if (
            interaction.type !== InteractionType.ApplicationCommand ||
            !commands.has(interaction.data.name)
        ) {
            return;
        }

        const name = interaction.data.name;
        console.log(`Receive command ${name}`);

        await commands.get(name)?.execute(interaction, api);
    },
);

client.on(GatewayDispatchEvents.GuildCreate, (event) => {
    console.log(`Join '${event.data.name}'`);
});

client.once(GatewayDispatchEvents.Ready, () => console.log('Ready!'));
gateway.connect();
