import { Pizza } from "../Pizza/Pizza";

export interface AbsFactory {
    createPizza(type: string): Pizza;
}