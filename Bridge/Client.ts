import { KeyBoardConstruct } from "./KeyBoardConstruct";
import { SlideConstruct } from "./SlideConstruct";
import { Vivo } from "./Vivo";
import { Xiaomi } from "./Xiaomi";

/**
 *   Bridge模式基于类的最小设计原则，通过使用封装、聚合及继承等行为让不同
 * 的类承担不同的职责。它的主要特点是把抽象(Abstraction)与行为实现(Implementation)
 * 分离开来，从而可以保持各部分的独立性以及应对他们的功能扩展
 */
class Client {

    static main():void{
        const brand_xiaomi = new Xiaomi();
        const brand_vivo = new Vivo();

        const slide_xiaomi = new SlideConstruct(brand_xiaomi);
        const keyboard_vivo = new KeyBoardConstruct(brand_vivo);

        slide_xiaomi.open();
        slide_xiaomi.close();
        slide_xiaomi.call();

        console.log('\n');
        keyboard_vivo.open();
        keyboard_vivo.close();
        keyboard_vivo.call();
    }
}

Client.main();