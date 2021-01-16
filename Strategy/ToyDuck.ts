import { Duck } from "./Duck";

export class ToyDuck extends Duck {

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

    /**
     * @override
     */
    protected swim(){
        console.log('不会游泳');
    }
}