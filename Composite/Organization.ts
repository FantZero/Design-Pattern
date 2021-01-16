export abstract class Organization {

    private name: string;

    private desc: string;

    constructor(name: string, desc: string) {
        this.name = name;
        this.desc = desc;
    }

    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }

    public getDesc(): string {
        return this.desc;
    }
    public setDesc(value: string) {
        this.desc = value;
    }

    protected add(name: string, org: Organization): void { };
    protected remove(name: string): void { };
    abstract print(): void;
}