import { Department } from "./Department";
import { MyIterator } from "./Iterator";

export class InfoIterator implements MyIterator<Department> {

    // 遍历 Map 时将 key 搜集到数组中，再根据key来遍历Map
    private departments: Map<string, Department> = new Map();
    private keys: string[] = [];
    private idx: number = 0;

    constructor(departments: Map<string, Department>) {
        this.departments = departments;
        this.departments.forEach((v, k, m) => {
            this.keys.push(k);
        });
    }

    hasNext(): boolean {
        if (this.idx >= this.keys.length || !this.keys[this.idx]) {
            return false;
        }
        return true;
    }

    next(): Department {
        return this.departments.get(this.keys[this.idx++]);
    }
}