import { MyIterator } from "./Iterator";

// 学院
export interface College<T> {
    getName(): string;

    // 增加一个系
    addDepartment(name: string, desc: string);

    // 返回一个迭代器
    createIterator(): MyIterator<T>;
}