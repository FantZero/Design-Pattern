import { Action } from "./Action";
import { Person } from "./Person";

export class Man extends Person{
    constructor(name: string) {
        super(name);
    }

    // 核心：将自己（this）交给访问者
    acceptAction(action: Action) {
        action.getManResult(this);
    }
}