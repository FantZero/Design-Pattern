import { Calculator } from "./Calculator";

/**
 * 表达式 -> 解释器(可以有多种) -> 结果
 * 解释器模式：是指给定一个语言(表达式)，定义它的文法的一种表示，
  并定义一个解释器，使用该解释器来解释语言中的句子(表达式)。
 */
class Client {

    static main(): void {
        const expStr = this.getExpStr();
        const calculator = new Calculator(expStr);
        const map_var = this.getMap_Var(expStr);
        map_var.forEach((v, k, m) => {
            console.log(k + ':' + v)
        });
        console.log(`${expStr} 的计算的结果为：${calculator.run(map_var)}`);
    }

    // 假装输入的表达式是 a+b-c+d-e
    static getExpStr() {
        return 'a+b-c+d-e';
    }

    /**
     * 假设对应 expStr（a+b-c+d-e）的各个变量的值为
     * { a: 2, b: 5, c: 3, d: 8, e: 6 }
     * @param expStr 
     */
    static getMap_Var(expStr: string): Map<string, number> {
        let map_var = new Map<string, number>();
        const var_value = [2, 5, 3, 8, 6];  // 与 expStr 中的变量从左到右挨个对应
        for (let index = 0; index < expStr.length; index++) {
            const ch = expStr[index];
            if (ch != '-' && ch != '+'){
                map_var.set(ch, var_value.shift());
            }
        }
        return map_var;
    }
}

Client.main();