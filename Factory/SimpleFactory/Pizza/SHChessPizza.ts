import { Pizza } from "./Pizza";

export class SHPizza extends Pizza{
    type: string = '上海';

    constructor() {
        super();
        super.setType(this.type);
    }

    prepare(): void {
        console.log(`正在准备 ${this.type} 披萨，侬喜欢吗？`);
    }
}