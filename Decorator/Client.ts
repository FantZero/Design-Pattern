import { Drink } from "./Drink";
import { MCCoffee } from "./MCCoffee";
import { Milk } from "./Milk";
import { YeGuo } from "./YeGuo";

/**
 * 装饰者模式就像打包一个快递，动态的将新功能附加到对象上。在对象功能扩展方面，它比继承更有弹性，装饰者模式也体现了开闭原则(ocp)
 * 主体(Component) 比如：陶瓷、衣服 
 * 被装饰者包装(Decorator)比如：报纸填充、塑料泡沫、纸板、木板
 */
class Client {

    static main():void{
        const mcCoffee: Drink = new MCCoffee();

        let order: Drink = new Milk(mcCoffee);
        console.log(`抹茶咖啡+牛奶（共计${order.getPrice()}）: ${order.getDesc()}`);

        order = new YeGuo(order);
        console.log(`抹茶咖啡+牛奶+椰果（共计${order.getPrice()}）: ${order.getDesc()}`);
    }
}

Client.main();