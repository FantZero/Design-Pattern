import { Brand } from "./Brand";

export class Xiaomi implements Brand {
    open(): void {
        console.log('小米手机开机');
    }
    close(): void {
        console.log('小米手机关机');
    }
    call(): void {
        console.log('小米手机打电话');
    }
}