import { BJPizza } from "../Pizza/BJChessPizza";
import { Pizza } from "../Pizza/Pizza";
import { SHPizza } from "../Pizza/SHChessPizza";

/**
 * 简单工厂模式 也称 静态工厂模式
 */
export class SimpleFactory {
    constructor() {}

    static createPizza(type: string): Pizza {
        if(type === 'BJ'){
            return  new BJPizza();
        }else if(type === 'SH'){
            return  new SHPizza();
        }
    }
}