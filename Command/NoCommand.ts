import { Command } from "./Command";

export class NoCommand implements Command {

    execute(): void {
        console.log('emmm...');
    }

    undo(): void {
        console.log('emmm...');
    }
}