import { Voltage220V } from "./Voltage220V";
import { Voltage5V } from "./Voltage5V";

/**
 * 将 输入源 适配为 输出对象
 */
export class VoltageAdapter implements Voltage5V{

    private voltage220V: Voltage220V;
    
    constructor(voltage220V: Voltage220V){
        this.voltage220V = voltage220V;
    }

    output5V(): number {
        const src = this.voltage220V.output220V();
        const dst = src / 44;
        console.log(`适配转换：${src}V -> ${dst}V`);
        return dst;
    }
}