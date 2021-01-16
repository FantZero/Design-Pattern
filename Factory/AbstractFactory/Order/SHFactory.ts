import { Pizza } from "../Pizza/Pizza";
import { SHChessPizza } from "../Pizza/SHChessPizza";
import { SHPepperPizza } from "../Pizza/SHPepperPizza";
import { AbsFactory } from "./AbsFactory";

export class SHFactory implements AbsFactory{
    constructor() {}

    /**
     * @override
     * @param type 
     */
    createPizza(type: string): Pizza {
        if(type === 'chess'){
            return new SHChessPizza();
        }else if(type === 'pepper'){
            return new SHPepperPizza();
        }
    }
}