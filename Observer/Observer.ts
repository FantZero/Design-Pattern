interface Observer{
    obsName():string;
    update(temperature:number, pressure:number, humidity:number):void;
}

export default Observer;