import { Brand } from "./Brand";

export class Vivo implements Brand {
    open(): void {
        console.log('Vivo手机开机');
    }
    close(): void {
        console.log('Vivo手机关机');
    }
    call(): void {
        console.log('Vivo手机打电话');
    }
}