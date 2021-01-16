import Observer from "./Observer";

class Baidu implements Observer{

    private name:string;

    private temperature:number;
    private pressure:number;
    private humidity:number;

    constructor(name:string) {
        this.name = name;
    }

    /**
     * @override
     */
    obsName(): string {
        return this.name;
    }

    /**
     * @override
     * @param temperature 
     * @param pressure 
     * @param humidity 
     */
    update(temperature: number, pressure: number, humidity: number): void {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.display();
    }

    display():void{
        console.log(`${this.obsName()}-温度： ${this.temperature}`);
        console.log(`${this.obsName()}-气压： ${this.pressure}`);
        console.log(`${this.obsName()}-湿度： ${this.humidity}`);
    }
}

export default Baidu;