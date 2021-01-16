import { BJFactory } from "./Order/BJFactory";
import { Order } from "./Order/Order";
import { SHFactory } from "./Order/SHFactory";

class Client {

    static order: Order

    static main():void {
        new Order(new BJFactory(), 'chess');
        new Order(new SHFactory(), 'pepper');
    }
}

Client.main();