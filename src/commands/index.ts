import { Collection, ReadonlyCollection } from '@discordjs/collection';
import { Command } from './command';
import status from './status';

const commands: ReadonlyCollection<string, Command> = new Collection([
    [status.name, status],
]);

export default commands;
