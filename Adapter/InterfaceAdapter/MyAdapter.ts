import { MyInterface } from "./MyInterface";

/**
 * 当不需要全部实现接口提供的方法时，可先设计一个抽象类实现接口，并为该接
 * 口中每个方法提供一个默认实现（空方法），那么该抽象类的子类可有选择地覆
 * 盖父类的某些方法来实现需求
 */
export class MyAdapter implements MyInterface {
    m1(): void {}
    m2(): void {}
    m3(): void {}
}