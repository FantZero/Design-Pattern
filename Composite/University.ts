import { Organization } from "./Organization";

export class University extends Organization {

    // 核心代码，将子节点存放于 orgList 中
    private orgList = new Map<string, Organization>();

    constructor(name: string, desc: string) {
        super(name, desc);
    }

    /**
     * @override
     * @param name 
     * @param org 
     */
    add(name: string, org: Organization): void {
        this.orgList.set(name, org);
    }

    /**
     * @override
     * @param name 
     */
    remove(name: string): void {
        this.orgList.delete(name);
    }

    print(): void {
        console.log(`--${this.getName()} —— ${this.getDesc()}--`);
        this.orgList.forEach((v, k, m) => {
            v.print();
        });
    }
}