import {PeanutSoyaMilk} from "./PeanutSoyaMilk";
import { PureSoyaMilk } from "./PureSoyaMilk";
import {RedBeanSoyaMilk} from "./RedBeanSoyaMilk";

class Client {

    static main():void{
        // 制作花生豆浆
        const peanutSoyaMilk = new PeanutSoyaMilk();
        console.log('\n制作花生豆浆');
        peanutSoyaMilk.make();

        // 制作红豆豆浆
        const redBeanSoyaMilk = new RedBeanSoyaMilk();
        console.log('\n制作红豆豆浆');
        redBeanSoyaMilk.make();

        // 制作纯豆浆
        const pureSoyaMilk = new PureSoyaMilk();
        console.log('\n制作纯豆浆');
        pureSoyaMilk.make();
    }
}

Client.main();