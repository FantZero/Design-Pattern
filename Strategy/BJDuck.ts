import { Duck } from "./Duck";

export class BJDuck extends Duck {

    private name: string;

    constructor(name: string){
        super();
        this.name = name;
    }

    display(): void {
        console.log(`\n我是${this.name}`);
        this.fly();
        this.swim()
    }
}