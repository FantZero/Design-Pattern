import { FlyBehavior } from "./FlyBehavior";

export class BadFlyBehavior implements FlyBehavior{
    constructor() {}

    fly(): void {
        console.log('飞翔能力一般');
    }
}