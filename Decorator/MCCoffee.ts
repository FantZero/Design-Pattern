import { Coffee } from "./Coffee";

export class MCCoffee extends Coffee {
    constructor(){
        super();
        this.setDesc('抹茶咖啡');
        this.setPrice(5);
    }
}