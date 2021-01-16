/**
 * 静态内部类式，类被装载时并不会立即实例化，而是在需要实例化时，调用 getInstance 方法，
 * 才会装载 StaticInstance 类，从而完成 StaticInnerClass 的实例化
 */
export default class StaticInnerClass {
    constructor() {}

    public static getInstance(): StaticInnerClass {
        return StaticInstance.instance;
    }

    public print():void{
        console.log('单例模式-静态内部类');
    }
}

class StaticInstance {
    static instance: StaticInnerClass = new StaticInnerClass();
}