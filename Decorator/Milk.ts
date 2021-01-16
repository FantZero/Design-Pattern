import { Decorator } from "./Decorator";
import { Drink } from "./Drink";

export class Milk extends Decorator {
    constructor(drink: Drink) {
        super(drink);
        this.setDesc('牛奶');
        this.setPrice(3);
    }
}