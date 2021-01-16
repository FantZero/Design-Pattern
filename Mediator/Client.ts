import { Coffee } from "./Coffee";
import { ConcreteMediator } from "./ConcreteMediator";
import { Light } from "./Light";
import { RiceCookie } from "./RiceCookie";
import { TV } from "./TV";

/**
 *  中介者模式，用一个中介对象来封装一系列的对象交互。中介者使各个对象不需要
 * 显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。
 */
class Client {

    static main(): void {
        const concreteMediator = new ConcreteMediator();

        const riceCookie = new RiceCookie('RiceCookie', concreteMediator);
        const tv = new TV('TV', concreteMediator);
        const light = new Light('Light', concreteMediator);
        const coffee = new Coffee('Coffee', concreteMediator);

        riceCookie.openRiceCookie();
        riceCookie.closeRiceCookie();

        console.log('看看打开电视的后续工作...');
        tv.sendMessage(1);

        light.sendMessage(1);
        coffee.sendMessage(1)
    }
}

Client.main();