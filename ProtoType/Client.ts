/**
 * 原型模式：浅拷贝 & 深拷贝
 */
import { Glass } from "./Glass";
import { Sheep } from "./Sheep";

class Client {

    /**
     * 浅拷贝测试
     */
    static main_shallow():void{
        const glass = new Glass('灰色', 20);
        const sheep = new Sheep(3, '', glass);
        console.log(`origin : ${JSON.stringify(sheep)}`);

        const sheep_1 = sheep.shallowCpoy();
        const sheep_2 = sheep.shallowCpoy();
        const sheep_3 = sheep.shallowCpoy();
        console.log(`sheep_1 : ${JSON.stringify(sheep_1)}\n`);

        sheep.age = 5;
        sheep.glass.color = '白色';
        console.log(`origin: ${JSON.stringify(sheep)}`);
        console.log(`sheep_2: ${JSON.stringify(sheep_2)}`);
        console.log(`sheep_1 : ${JSON.stringify(sheep_1)}\n`);

        const sheep2_2 = sheep_2;
        console.log(`sheep == sheep_3: ${sheep == sheep_3}`);
        console.log(`sheep2_2 == sheep_2: ${sheep2_2 == sheep_2}`);
    }

    /**
     * 深拷贝测试
     */
    static main_deep():void{
        const glass = new Glass('灰色', 20);
        const sheep = new Sheep(3, undefined, glass);
        console.log(`origin : ${JSON.stringify(sheep)}`);

        const sheep_1 = sheep.deepClone();
        const sheep_2 = sheep.deepClone();
        const sheep_3 = sheep.deepClone();
        console.log(`sheep_1 : ${JSON.stringify(sheep_1)}\n`);

        sheep.age = 5;
        sheep.glass.color = '白色';
        console.log(`origin: ${JSON.stringify(sheep)}`);
        console.log(`sheep_2: ${JSON.stringify(sheep_2)}\n`);
        sheep_2.canCopy();
        console.log(`${sheep_2.canNotCopy}\n`);     // undefined

        const sheep2_2 = sheep_2;
        console.log(`sheep == sheep_3: ${sheep == sheep_3}`);
        console.log(`sheep2_2 == sheep_2: ${sheep2_2 == sheep_2}`);
    }
}

Client.main_deep();