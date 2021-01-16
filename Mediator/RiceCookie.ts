import { Equipment } from "./Equipment";
import { Mediator } from "./Mediator";

export class RiceCookie extends Equipment {

    constructor(name: string, mediator: Mediator) {
        super(name, mediator);
        mediator.regEquipment(name, this);
    }

    sendMessage(status: number): void {
        this.getMediator().getMessage(status, super.getName());
    }

    openRiceCookie(): void {
        console.log('电饭煲开始煮饭');
        this.sendMessage(1);
    }

    closeRiceCookie(): void {
        console.log('电饭煲煮好饭了');
        this.sendMessage(0);
    }
}