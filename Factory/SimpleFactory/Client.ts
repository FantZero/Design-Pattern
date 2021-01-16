import { Order } from "./Order/Order";

class Client {

    static main():void {
        new Order('BJ');
        new Order('SH');
    }
}

Client.main();