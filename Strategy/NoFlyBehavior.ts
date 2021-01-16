import { FlyBehavior } from "./FlyBehavior";

export class NoFlyBehavior implements FlyBehavior{
    constructor() {}

    fly(): void {
        console.log('不会飞');
    }
}