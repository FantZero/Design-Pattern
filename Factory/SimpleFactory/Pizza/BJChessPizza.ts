import { Pizza } from "./Pizza";

export class BJPizza extends Pizza{
    type: string = '北京';;

    constructor() {
        super();
        super.setType(this.type);
    }

    prepare(): void {
        console.log(`正在准备 ${this.type} 披萨，加入了蜜汁烤鸭`);
    }
}