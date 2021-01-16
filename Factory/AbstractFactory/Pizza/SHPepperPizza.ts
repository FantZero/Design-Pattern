import { Pizza } from "./Pizza";

export class SHPepperPizza extends Pizza{
    type: string = '上海胡椒';

    constructor() {
        super();
        super.setType(this.type);
    }

    prepare(): void {
        console.log(`正在准备 ${this.type} 披萨，胡椒emmm...`);
    }
}