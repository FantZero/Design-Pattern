import { Decorator } from "./Decorator";
import { Drink } from "./Drink";

export class YeGuo extends Decorator {
    constructor(drink: Drink) {
        super(drink);
        this.setDesc('椰果');
        this.setPrice(2);
    }
}