import { User } from "./User";
import { WebSite } from "./Website";
import { WebSiteFactory } from "./WebSiteFactory";

/**
 * 享元模式（Flyweight Pattern） 也叫 蝇量模式: 运用共享技术有效地支持大量 细粒度 的对象
 * 常用于系统底层开发，解决系统的性能问题。像数据库连接池，里面都是创建好的连接对象，能够解决重复对象的内存浪费的问题。
 */
class Client {

    static main(): void {
        const wsf = new WebSiteFactory();

        // 新闻形式
        const ws1: WebSite = wsf.getWebSite('新闻');
        ws1.use(new User('央视记者'));

        // 微博形式
        const ws2: WebSite = wsf.getWebSite('微博');
        ws2.use(new User('网红探子'));

        // 微信公众号形式
        const ws3: WebSite = wsf.getWebSite('微信公众号');
        ws3.use(new User('官方微信'));

        console.log(`\n形式统计总和：${wsf.getWebSiteCount()}`);
    }
}

Client.main();