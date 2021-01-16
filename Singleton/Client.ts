import { HungryType } from "./HungryType";
import { LazyType } from "./LazyType";
import StaticInnerClass from "./StaticInnerClass";

class Client {

    static main():void{
        // 饿汉式
        const hungryType = HungryType.getInstance();
        hungryType.print();

        // 懒汉式
        const lazyType = LazyType.getInstance();
        lazyType.print();

        // 静态内部类式
        const staticInnerClass = StaticInnerClass.getInstance();
        staticInnerClass.print();
    }
}

Client.main();