import { College } from "./College";
import { Department } from "./Department";
import { InfoIterator } from "./InfoIterator";
import { MyIterator } from "./Iterator";

export class InfoCollege implements College<Department> {

    departmentList: Map<string, Department> = new Map();  // 数组形式保存 department

    constructor() {
        this.addDepartment('PLC', '工业应用广');
        this.addDepartment('单片机', '容易上手，但精通很难');
        this.addDepartment('DSP', '比较难');
    }

    getName(): string {
        return '信息学院';
    }
    addDepartment(name: string, desc: string) {
        this.departmentList.set(name, new Department(name, desc));
    }
    createIterator(): MyIterator<Department> {
        return new InfoIterator(this.departmentList);
    }
}