import { Equipment } from "./Equipment";
import { Mediator } from "./Mediator";

export class Light extends Equipment {

    constructor(name: string, mediator: Mediator) {
        super(name, mediator);
        mediator.regEquipment(name, this);
    }

    sendMessage(status: number): void {
        this.getMediator().getMessage(status, super.getName());
    }

    openLight(): void {
        console.log('打开点灯');
    }

    closeLight(): void {
        console.log('关闭点灯');
    }
}