// 抽象迭代器（同Java中的 Iterator 接口）
export interface MyIterator<T> {
    // 是否有下一个元素
    hasNext(): boolean;

    // 获取下一个元素，内部会移动下标
    next(): T;
}