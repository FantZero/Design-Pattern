import { FlyBehavior } from "./FlyBehavior";

export abstract class Duck {
    private flyBehavior: FlyBehavior;

    constructor() {}

    abstract display(): void;

    protected swim(): void{
        console.log('会游泳');
    }

    protected fly(): void{
        if(this.flyBehavior){
            this.flyBehavior.fly();
        }else{
            console.log('会飞翔');
        }
    }

    setFlyBehavior(flyBehavior: FlyBehavior){
        this.flyBehavior = flyBehavior;
    }
}