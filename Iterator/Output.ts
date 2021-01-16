import { College } from "./College";
import { Department } from "./Department";

export class Output {

    private colleges: College<Department>[] = [];

    constructor(colleges: College<Department>[]) {
        this.colleges = colleges;
    }

    print() {
        for (const col of this.colleges) {
            console.log(`====${col.getName()}====`);
            const itreator = col.createIterator();
            while (itreator.hasNext()) {
                const dept = itreator.next();
                console.log(`${dept.getName()} - ${dept.getDesc()}`);
            }
        }
    }
}