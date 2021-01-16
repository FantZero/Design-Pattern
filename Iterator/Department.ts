export class Department {

    private name: string;
    private desc: string;

    getName(): string {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }

    getDesc(): string {
        return this.desc;
    }
    setDesc(desc: string) {
        this.desc = desc;
    }

    constructor(name: string, desc: string) {
        this.name = name;
        this.desc = desc;
    }
}