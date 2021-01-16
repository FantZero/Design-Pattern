import { Action } from "./Action";
import { Person } from "./Person";

export class Woman extends Person{
    constructor(name: string) {
        super(name);
    }

    acceptAction(action: Action) {
        action.getWomanResult(this);
    }
}