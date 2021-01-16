import { Action } from "./Action";

// 被访问者
export abstract class Person {

    private name: string;
    getName(): string{
        return this.name;
    }

    constructor(name: string) {
        this.name = name;
    }

	// 提供一个方法，让访问者可以访问
    abstract acceptAction(action: Action);
}