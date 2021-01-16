import { College } from "./College";
import { Department } from "./Department";
import { University } from "./University";

/**
 *   组合模式（Composite Pattern），又叫部分整体模式，它创建了对象组的树形结构，将对象组合成树状
 * 结构以表示“整体-部分”的层次关系。
 *   组合模式使得用户对单个对象和组合对象的访问具有一致性，即：我们要对树上的节点和叶子进行操作时，
 * 它能够提供一致的方式，而不用考虑它是节点还是叶子
 */
class Client {

    static main(): void {
        const uvs = new University('华中科技大学', '一流大学~');

        const clg_es = new College('软件学院', '软件学院考数据结构');
        const clg_cs = new College('计算机学院', '计算机学院考408！');

        const dpt1 = new Department('软件工程', '软件工程学费贵');
        const dpt2 = new Department('网络安全', '网络安全势头很足');
        const dpt3 = new Department('计算机科学与技术', '老牌计算机专业');
        const dpt4 = new Department('人工智能', '数学功底要求比较高');

        clg_es.add(dpt1.getName(), dpt1);
        clg_es.add(dpt2.getName(), dpt2);
        clg_cs.add(dpt3.getName(), dpt3);
        clg_cs.add(dpt4.getName(), dpt4);

        uvs.add(clg_es.getName(), clg_es);
        uvs.add(clg_cs.getName(), clg_cs);

        uvs.print();
        clg_cs.print();
    }
}

Client.main();