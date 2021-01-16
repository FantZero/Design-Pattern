import { Pizza } from "../Pizza/Pizza";

export abstract class Order {

    constructor(){}

    orderPizza(pizzaType: string): void{
        this.createPizza(pizzaType).make();
    }

    protected abstract createPizza(pizzaType: string):Pizza
}