import { BadFlyBehavior } from "./BadFlyBehavior";
import { BJDuck } from "./BJDuck";
import { GoodFlyBehavior } from "./GoodFlyBehavior";
import { NoFlyBehavior } from "./NoFlyBehavior";
import { ToyDuck } from "./ToyDuck";
import { WildDuck } from "./WildDuck";

/**
 * 策略模式
 * 定义算法族，分别封装起来，让他们之间可以互相替换，
 * 把变化的代码从不变的代码中分离出来：类比该案例中的 游泳 和 飞翔 两个行为。
 * 策略模式的核心思想是：多用组合/聚合 少用继承；用行为类组合，而不是行为的继承，更有弹性。
 */
class Client {

    static main():void{
        const wildDuck = new WildDuck('野鸭子');
        wildDuck.display();

        const bjDuck = new BJDuck('北京鸭子');
        bjDuck.setFlyBehavior(new BadFlyBehavior());
        bjDuck.display();

        const toyDuck = new ToyDuck('玩具鸭子');
        toyDuck.setFlyBehavior(new NoFlyBehavior());
        toyDuck.display();
        console.log('不好意思，现在玩具鸭子好厉害');
        toyDuck.setFlyBehavior(new GoodFlyBehavior());
        toyDuck.display();
    }
}

Client.main();