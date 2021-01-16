import { Equipment } from "./Equipment";
import { Mediator } from "./Mediator";

export class TV extends Equipment {

    constructor(name: string, mediator: Mediator) {
        super(name, mediator);
        mediator.regEquipment(name, this);
    }

    sendMessage(status: number): void {
        this.getMediator().getMessage(status, super.getName());
    }

    openTV(): void {
        console.log('打开电视');
        this.sendMessage(1);
    }

    closeTV(): void {
        console.log('关闭电视');
        this.sendMessage(0);
    }
}