import { College } from "./College";
import { ComputerIterator } from "./ComputerIterator";
import { Department } from "./Department";
import { MyIterator } from "./Iterator";

export class ComputerCollege implements College<Department> {

    departmentList: Department[] = [];  // 数组形式保存 department

    constructor() {
        this.addDepartment('Java', '面向对象');
        this.addDepartment('PHP', '易于搭建');
        this.addDepartment('Python', '脚本语言');
    }

    getName(): string {
        return '计算机学院';
    }
    addDepartment(name: string, desc: string) {
        this.departmentList.push(new Department(name, desc));
    }
    createIterator(): MyIterator<Department> {
        return new ComputerIterator(this.departmentList);
    }
}