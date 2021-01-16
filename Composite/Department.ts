import { Organization } from "./Organization";

export class Department extends Organization {

    constructor(name: string, desc: string) {
        super(name, desc);
    }

    print(): void {
        console.log(`${this.getName()} —— ${this.getDesc()}`)
    }
}