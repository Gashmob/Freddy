import { REST } from '@discordjs/rest';
import { WebSocketManager } from '@discordjs/ws';
import {
    Client,
    GatewayIntentBits,
    GatewayDispatchEvents,
} from '@discordjs/core';
import { token } from '../config.json';

const rest = new REST({ version: '10' }).setToken(token);

const gateway = new WebSocketManager({
    token,
    intents: GatewayIntentBits.Guilds,
    rest,
});

const client = new Client({ rest, gateway });

client.on(GatewayDispatchEvents.GuildCreate, (event) => {
    console.log(`Join '${event.data.name}'`);
});

client.once(GatewayDispatchEvents.Ready, () => console.log('Ready!'));
gateway.connect();
