import { BJChessPizza } from "../Pizza/BJChessPizza";
import { BJPepperPizza } from "../Pizza/BJPepperPizza";
import { Pizza } from "../Pizza/Pizza";
import { AbsFactory } from "./AbsFactory";

export class BJFactory implements AbsFactory{
    constructor() {}

    /**
     * @override
     * @param type 
     */
    createPizza(type: string): Pizza {
        if(type === 'chess'){
            return new BJChessPizza();
        }else if(type === 'pepper'){
            return new BJPepperPizza();
        }
    }
}