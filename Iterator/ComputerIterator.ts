import { Department } from "./Department";
import { MyIterator } from "./Iterator";

export class ComputerIterator implements MyIterator<Department> {

    private departments: Department[] = [];
    private idx: number = 0;

    constructor(departments: Department[]) {
        this.departments = departments;
    }

    hasNext(): boolean {
        if (this.idx >= this.departments.length || !this.departments[this.idx]) {
            return false;
        }
        return true;
    }

    next(): Department {
        return this.departments[this.idx++];
    }
}