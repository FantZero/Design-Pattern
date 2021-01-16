import { Action } from "./Action";
import { Person } from "./Person";

export class Failure implements Action {

    getManResult(person: Person) {
        console.log(`${person.getName()} 先生给的评价是失败 o(╥﹏╥)o`);
    }
    getWomanResult(person: Person) {
        console.log(`${person.getName()} 女士给的评价是失败 o(╥﹏╥)o`);
    }
    
}