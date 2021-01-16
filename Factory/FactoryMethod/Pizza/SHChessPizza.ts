import { Pizza } from "./Pizza";

export class SHChessPizza extends Pizza{
    type: string = '上海芝士';

    constructor() {
        super();
        super.setType(this.type);
    }

    prepare(): void {
        console.log(`正在准备 ${this.type} 披萨，有侬喜欢的芝士`);
    }
}