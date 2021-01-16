import { Voltage220V } from "./Voltage220V";
import { Voltage5V } from "./Voltage5V";

export class VoltageAdapter extends Voltage220V implements Voltage5V{

    output5V(): number {
        const src = this.output220V();
        const dst = src / 44;
        console.log(`适配转换：${src}V -> ${dst}V`);
        return dst;
    }
}