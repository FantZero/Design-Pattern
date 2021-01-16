export abstract class Drink {
    
    private desc: string;

    private price: number;

    setDesc(desc: string): void {
        this.desc = desc
    }

    getDesc(): string {
        return this.desc;
    }

    setPrice(price: number): void{
        this.price =price;
    }

    getPrice(): number{
        return this.price
    };
}