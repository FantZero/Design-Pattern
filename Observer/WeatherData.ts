import Observer from "./Observer";
import Subject from "./Subject";

class WeatherData implements Subject{

    private temperature:number;
    private pressure:number;
    private humidity:number;

    private observerMap:Map<string, Observer>;

    constructor() {
        this.observerMap = new Map<string, Observer>();
    }

    /**
     * 每次设置新的参数值时，边通知所有观察者
     * @param temperature 
     * @param pressure 
     * @param humidity 
     */
    setData(temperature:number, pressure:number, humidity:number):void{
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.notifyObservers();
    }

    /**
     * @override
     * @param o register object
     */
    registerObserver(o: Observer) {
        if(this.observerMap.get(o.obsName())){
            console.log(`${o.obsName()} has been registered!`);
        }else{
            this.observerMap.set(o.obsName(), o);
        }
    }

    /**
     * @override
     * @param o remove object
     */
    removeObserver(o: Observer) {
        if(this.observerMap.get(o.obsName())){
            this.observerMap.delete(o.obsName());
        }else{
            console.log(`${o.obsName()} not exits!`);
        }
    }

    /**
     * notify all observers
     * @override
     */
    notifyObservers() {
        this.observerMap.forEach((v, k, m) =>{
            v.update(this.temperature, this.pressure, this.humidity);
        });
    }
}

export default WeatherData;