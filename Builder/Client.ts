import { CommonBuilder } from "./CommonBuilder";
import { HighBuilder } from "./HighBuilder";
import { House } from "./House";
import { HouseBuildDirector } from "./HouseBuildDirector";

/**
 *   建造者模式（Builder Pattern） 又叫生成器模式，是一种对象构建模式。它可以
 * 将复杂对象的建造过程抽象出来（抽象类别），使这个抽象过程的不同实现方法可以
 * 构造出不同表现（属性）的对象。
 *   建造者模式 是一步一步创建一个复杂的对象，它允许用户只通过指定复杂对象的类型
 * 和内容就可以构建它们，用户不需要知道内部的具体构建细节。 
 */
class Client {

    static main():void{
        let house: House;

        const houseBuildDirector = new HouseBuildDirector();

        const commonBuilder = new CommonBuilder();
        const highBuilder = new HighBuilder();

        console.log('建造普通房子');
        houseBuildDirector.setBuilder(commonBuilder);
        house = houseBuildDirector.buildHouse();
        console.log(house.getBaiseDepth(),
            house.getWallHeight(),
            house.getColor());

        console.log('\n建造摩天大楼');
        houseBuildDirector.setBuilder(highBuilder);
        house = houseBuildDirector.buildHouse();
        console.log(house.getBaiseDepth(),
            house.getWallHeight(),
            house.getColor());
    }
}

Client.main();