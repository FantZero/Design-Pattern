import { VoltageAdapter } from "./VoltageAdapter";

export class Phone {
    charging(voltageAdapter: VoltageAdapter): void{
        if(voltageAdapter.output5V() == 5){
            console.log('是5v，能充电');
        }else{
            console.log('不是5v，不能充电');
        }
    }
}