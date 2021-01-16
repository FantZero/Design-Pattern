import { Coffee } from "./Coffee";
import { Equipment } from "./Equipment";
import { Light } from "./Light";
import { Mediator } from "./Mediator";
import { TV } from "./TV";

export class ConcreteMediator implements Mediator {

    private equipmentMap: Map<string, Equipment>;

    constructor() {
        this.equipmentMap = new Map();
    }

    regEquipment(eptName: string, equipment: Equipment) {
        this.equipmentMap.set(eptName, equipment);
    }

    getMessage(status: number, eptName: string) {
        // 电饭煲：开始煮饭->打开电视  饭煮好了->关电视
        if (eptName == 'RiceCookie') {
            if (status) {
                (this.equipmentMap.get('TV') as TV).openTV();
            } else {
                (this.equipmentMap.get('TV') as TV).closeTV();
            }
        }
        // 电视机：打开电视->泡咖啡&打开灯  关电视->关掉灯
        else if (eptName == 'TV') {
            if (status) {
                (this.equipmentMap.get('Coffee') as Coffee).getCoffee();
                (this.equipmentMap.get('Light') as Light).openLight();
                console.log('-------------');
            } else {
                (this.equipmentMap.get('Light') as Light).closeLight();
                console.log('-------------');
            }
        }
        else if (eptName == 'Light') {
            console.log('电灯后续暂无安排');
            console.log('-------------');
        }
        else if (eptName == 'Coffee') {
            console.log('咖啡后续暂无安排');
            console.log('-------------');
        }
    }
}