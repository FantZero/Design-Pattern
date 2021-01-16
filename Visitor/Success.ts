import { Action } from "./Action";
import { Person } from "./Person";

export class Success implements Action {

    getManResult(person: Person) {
        console.log(`${person.getName()} 先生给的评价是成功！`);
    }
    getWomanResult(person: Person) {
        console.log(`${person.getName()} 女士给的评价是成功！`);
    }
    
}