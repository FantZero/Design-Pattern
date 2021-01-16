import { Brand } from "./Brand";
import { Construct } from "./Construct";

export class KeyBoardConstruct extends Construct {
    constructor(brand: Brand) {
        super(brand);
    }

    open(){
        super.open();
        console.log('键盘手机  开机');
    }

    close(){
        super.close();
        console.log('键盘手机  关机');
    }

    call(){
        super.call();
        console.log('键盘手机  打电话');
    }
}