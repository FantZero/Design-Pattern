import { Mediator } from "./Mediator";

export abstract class Equipment {

    private mediator: Mediator;
    private name: string;

    constructor(name: string, mediator: Mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    // 如果设备有工作方法完成，需要进一步指示更多工作，则调用 sendMessage 给中介者
    abstract sendMessage(status: number): void;

    getMediator(): Mediator {
        return this.mediator;
    }

    getName(): string {
        return this.name;
    }
}