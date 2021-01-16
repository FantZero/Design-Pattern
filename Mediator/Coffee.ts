import { Equipment } from "./Equipment";
import { Mediator } from "./Mediator";

export class Coffee extends Equipment {

    constructor(name: string, mediator: Mediator) {
        super(name, mediator);
        mediator.regEquipment(name, this);
    }

    sendMessage(status: number): void {
        this.getMediator().getMessage(status, super.getName());
    }

    getCoffee(): void {
        console.log('冲一杯咖啡');
    }
}