import { BJOrder } from "./Order/BJOrder";
import { Order } from "./Order/Order";
import { SHOrder } from "./Order/SHOrder";

class Client {

    static order: Order

    static main():void {
        this.order = new BJOrder();
        this.order.orderPizza('chess');
        this.order.orderPizza('pepper');

        this.order = new SHOrder();
        this.order.orderPizza('chess');
        this.order.orderPizza('pepper');
    }
}

Client.main();