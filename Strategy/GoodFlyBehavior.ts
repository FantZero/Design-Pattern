import { FlyBehavior } from "./FlyBehavior";

export class GoodFlyBehavior implements FlyBehavior{
    constructor() {}

    fly(): void {
        console.log('会飞翔');
    }
}