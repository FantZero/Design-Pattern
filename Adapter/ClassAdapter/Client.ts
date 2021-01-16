import { Phone } from "./Phone";
import { VoltageAdapter } from "./VoltageAdapter";

/**
 * 类适配器：以类给到，在Adapter里，就是将src当做类，继承
 */
class Client {

    static main():void{
        const phone = new Phone();
        const va = new VoltageAdapter();
        phone.charging(va);
    }
}

Client.main();