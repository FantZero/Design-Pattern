import { Person } from "./Person";

// 访问者
export interface Action {
    
    getManResult(person: Person);

    getWomanResult(person: Person);
}