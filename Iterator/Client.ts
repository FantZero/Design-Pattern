import { College } from "./College";
import { ComputerCollege } from "./ComputerCollege";
import { Department } from "./Department";
import { InfoCollege } from "./InfoCollege";
import { Output } from "./Output";

/**
 * 迭代器模式，提供一种遍历集合元素的统一接口，用一致的方法遍历集合元素，
不需要知道集合对象的底层表示，即：不暴露其内部的结构。
 */
class Client {

    static main(): void {
        const colleges: College<Department>[] = [];
        colleges.push(new ComputerCollege());
        colleges.push(new InfoCollege());

        const output = new Output(colleges);
        output.print();
    }
}

Client.main();