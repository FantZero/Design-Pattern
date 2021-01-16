/**
 * 饿汉式，类加载时立即实例化
 */
export class HungryType {
    private static instance: HungryType = new HungryType();

    private constructor() {}

    public static getInstance(): HungryType {
        return this.instance;
    }

    public print():void{
        console.log('单例模式-饿汉式');
    }
}
