/**
 * 抽象 Pizza 类。制作过程分为 准备-烘烤-切块-打包
 * 其中 准备 过程设为抽象方法
 */
export abstract class Pizza {
    protected type: string;

    constructor(){}

    make():void {
        this.prepare();
        this.bake();
        this.cut();
        this.box();
    }

    /**
     * 毕竟材料第一位，秘制过程由子类实现
     */
    protected abstract prepare(): void

    bake(): void{
        console.log(`正在烘烤 ${this.type} 披萨`);
    }

    cut(): void{
        console.log(`正在切块 ${this.type} 披萨`);
    }

    box(): void{
        console.log(`正在打包 ${this.type} 披萨\n`);
    }
    
    protected setType(type: string):void {
        this.type = type;
    }
}