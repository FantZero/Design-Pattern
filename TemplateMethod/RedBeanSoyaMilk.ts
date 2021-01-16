import {SoyaMilk} from "./SoyaMilk";

export class RedBeanSoyaMilk extends SoyaMilk{

    /**
     * @override
     */
    addCondiments(): void {
        console.log('第二步：添加红豆');
    }
}