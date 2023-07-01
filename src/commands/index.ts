import { Collection, ReadonlyCollection } from '@discordjs/collection';
import { Command } from './command';
import status from './status';
import help from './help';
import credits from './credits';

const commands: ReadonlyCollection<string, Command> = new Collection([
    [status.name, status],
    [help.name, help],
    [credits.name, credits],
]);

export default commands;
