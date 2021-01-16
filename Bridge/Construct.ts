import { Brand } from "./Brand";

export abstract class Construct {

    private brand: Brand;

    constructor(brand: Brand) {
        this.brand = brand;
    }

    open():void{
        this.brand.open();
    };
    
    close():void{
        this.brand.close();
    };

    call():void{
        this.brand.call();
    };
}