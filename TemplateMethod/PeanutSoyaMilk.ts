import {SoyaMilk} from "./SoyaMilk";

export class PeanutSoyaMilk extends SoyaMilk{

    /**
     * @override
     */
    addCondiments(): void {
        console.log('第二步：添加花生');
    }
}