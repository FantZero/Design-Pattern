import { Drink } from "./Drink";

export class Coffee extends Drink {

    getDesc(): string {
        return super.getDesc() + '--' + super.getPrice();
    }

    getPrice(): number {
        return super.getPrice();
    }
    
}