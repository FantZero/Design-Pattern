import { BJChessPizza } from "../Pizza/BJChessPizza";
import { BJPepperPizza } from "../Pizza/BJPepperPizza";
import { Pizza } from "../Pizza/Pizza";
import { Order } from "./Order";

export class BJOrder extends Order{

    constructor() {
        super();
    }

    createPizza(pizzaType: string): Pizza {
        if (pizzaType === 'chess'){
            return new BJChessPizza();
        }else if (pizzaType === 'pepper'){
            return new BJPepperPizza();
        }
    }
}