import { Command } from "./Command";
import { LightReceiver } from "./LightReceiver";

// 实现了Command接口，持有接收对象
export class LightOnCommand implements Command {

    private lr: LightReceiver;

    constructor(lr: LightReceiver){
        this.lr = lr;
    }

    execute(): void {
        this.lr.on();
    }

    undo(): void {
        this.lr.off();
    }

}