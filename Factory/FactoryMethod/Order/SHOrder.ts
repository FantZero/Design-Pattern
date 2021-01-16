import { Pizza } from "../Pizza/Pizza";
import { SHChessPizza } from "../Pizza/SHChessPizza";
import { SHPepperPizza } from "../Pizza/SHPepperPizza";
import { Order } from "./Order";

export class SHOrder extends Order{

    constructor() {
        super();
    }

    createPizza(pizzaType: string): Pizza {
        if (pizzaType === 'chess'){
            return new SHChessPizza();
        }else if (pizzaType === 'pepper'){
            return new SHPepperPizza();
        }
    }
}