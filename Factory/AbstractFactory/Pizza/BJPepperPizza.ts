import { Pizza } from "./Pizza";

export class BJPepperPizza extends Pizza{
    type: string = '北京胡椒';

    constructor() {
        super();
        super.setType(this.type);
    }

    prepare(): void {
        console.log(`正在准备 ${this.type} 披萨，加入了秘制胡椒`);
    }
}