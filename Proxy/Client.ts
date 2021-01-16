/**
 * 静态代理 & 动态代理
 * 仅实现了 静态代理
 */
import { TeachDao } from "./TeachDao";
import { TeachDaoProxy } from "./TeachDaoProxy";

class Client {

    static main():void{
        // 创建目标对象（被代理对象）
        const teachDao = new TeachDao();

        // 创建代理对象，同时将被代理对象传递给目标对象
        const teachDaoProxy = new TeachDaoProxy(teachDao);

        // 调用代理对象的方法，代理对象再去调用目标对象的方法
        teachDaoProxy.teach();
    }
}

Client.main();