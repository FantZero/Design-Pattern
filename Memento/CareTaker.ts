import { Memento } from "./Memento";

export class CareTaker {

    // 保存一个备忘录对象的单个时间的状态
    private _memento: Memento;
    public get memento(): Memento {
        return this._memento;
    }
    public set memento(value: Memento) {
        this._memento = value;
    }

    // 保存多个备忘录对象的多个时间的状态
    private mementoMap = new Map<string, Array<Memento>>();
    public getMementoOfMap(key:string, status:number):Memento {
        return this.mementoMap.get(key)[status];
    }
    public setMementoOfMap(key:string, status:number, memento:Memento) {
        if(this.mementoMap.has(key)){
            this.mementoMap.get(key)[status] = memento;
        }else{
            const arr = new Array<Memento>();
            arr[status] = memento;
            this.mementoMap.set(key, arr);
        }
    }
}