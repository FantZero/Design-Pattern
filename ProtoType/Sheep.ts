import { Glass } from "./Glass";

export class Sheep {
    age: number;
    hair: string;
    glass: Glass;

    constructor(age: number=0, hair: string='', glass: Glass=null) {
        this.age = age;
        this.hair = hair;
        this.glass = glass;
    }

    canCopy(): void{
        console.log('can copy');
    }

    canNotCopy(): void{
        console.log('can not copy');
    }

    /**
     * 浅拷贝：基本数据类型的成员变量，浅拷贝会直接进行值传递。引用数据类型的成员变量，会进行引用传递。
     */
    shallowCpoy(): Sheep{
        return new Sheep(this.age, this.hair, this.glass);
    }

    /**
     * 深拷贝：模拟 Java 中的输入输出流来实现序列化和反序列化
     * this关键字会获取到类中所有属性（包括子类的级联属性）
     * stringify 和 parse 过程会失去类中原有的 Function，需要手动在克隆对象后面加上支持拷贝的函数
     * @param glass 
     */
    deepClone(): Sheep{
        const serializaStr = JSON.stringify(this);
        const cloneObj = (JSON.parse(serializaStr) as Sheep);
        cloneObj.canCopy = this.canCopy;
        return cloneObj;
    }
}