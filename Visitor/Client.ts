import { Failure } from "./Failure";
import { Man } from "./Man";
import { PersonStructure } from "./PersonStructure";
import { Success } from "./Success";
import { Woman } from "./Woman";

/**
 * 封装一些作用于某种数据结构的各元素的操作，
它可以在不改变数据结构的前提下定义作用于这些元素的新的操作。
主要将数据结构与数据操作分离，解决 数据结构和 操作耦合性问题
  如果一个系统有比较稳定的数据结构，又有经常变化的功能需求，那么访问
者模式就是比较合适的
 */
class Client {

    static main():void{

        // 评委们，包括 男人 和 女人
        const personStructure = new PersonStructure();
        personStructure.attach(new Man('张三'));
        personStructure.attach(new Man('李四'));
        personStructure.attach(new Woman('赵熙'));

        // 给出成功评价
        const success = new  Success();
        personStructure.display(success);

        // 给出失败评价
        const failure = new Failure();
        personStructure.display(failure);
    }
}

Client.main();