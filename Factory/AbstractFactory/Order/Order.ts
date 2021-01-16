import { Pizza } from "../Pizza/Pizza";
import { AbsFactory } from "./AbsFactory";

export class Order {

    private factory: AbsFactory;

    constructor(factory: AbsFactory, type: string) {
        this.factory = factory;
        this.orderPizza(type).make();
    }

    orderPizza(type: string): Pizza{
        return this.factory.createPizza(type);
    }
}