import { Action } from "./Action";
import { Person } from "./Person";

export class PersonStructure {
    
    private persons: Map<string, Person> = new Map();

    attach(person: Person){
        this.persons.set(person.getName(), person);
    }

    detach(person: Person){
        this.persons.delete(person.getName());
    }

    display(action: Action){
        this.persons.forEach((v, k, m) =>{
            v.acceptAction(action);
        });
    }

}