import { Collection, ReadonlyCollection } from '@discordjs/collection';
import { Command } from './command';
import status from './status';
import help from './help';

const commands: ReadonlyCollection<string, Command> = new Collection([
    [status.name, status],
    [help.name, help],
]);

export default commands;
