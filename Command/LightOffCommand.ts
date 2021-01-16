import { Command } from "./Command";
import { LightReceiver } from "./LightReceiver";

export class LightOffCommand implements Command {

    private lr: LightReceiver;

    constructor(lr: LightReceiver){
        this.lr = lr;
    }

    execute(): void {
        this.lr.off();
    }

    undo(): void {
        this.lr.on();
    }

}