import { Drink } from "./Drink";

/**
 * 精华：继承+抽象
 */
export class Decorator extends Drink{

    private drink: Drink;

    constructor(drink: Drink){
        super();
        this.drink = drink;
    }

    getDesc(): string {
        return `${this.drink.getDesc()} + [${super.getDesc()}--${super.getPrice()}]`;
    }

    getPrice(): number {
        return this.drink.getPrice() + super.getPrice();
    }
    
}