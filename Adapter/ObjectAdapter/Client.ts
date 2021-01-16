import { Phone } from "./Phone";
import { Voltage220V } from "./Voltage220V";
import { VoltageAdapter } from "./VoltageAdapter";

/**
 * 对象适配器：以对象给到，在Adapter里，将src作为一个对象，持有
 * 根据合成复用原则，使用组合替代继承， 所以它解决了类适配器必须继承src的局限性问题
 */
class Client {

    static main():void{
        const phone = new Phone();
        phone.charging(new VoltageAdapter(new Voltage220V));
    }
}

Client.main();