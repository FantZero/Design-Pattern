import { Expression } from "./Expression";

// 变量表达式
export class VarExpression implements Expression {

    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    interpreter(map_var: Map<string, number>): number {
        return map_var.get(this.key);
    }
}