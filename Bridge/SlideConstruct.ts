import { Brand } from "./Brand";
import { Construct } from "./Construct";

export class SlideConstruct extends Construct {
    constructor(brand: Brand) {
        super(brand);
    }

    open(){
        super.open();
        console.log('滑盖 open...');
    }

    close(){
        super.close();
        console.log('滑盖 close...');
    }

    call(){
        super.call();
        console.log('滑盖 call...');
    }
}