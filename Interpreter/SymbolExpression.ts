import { Expression } from "./Expression";

/**
 * 计算表达式
 * 包含 左、右 两个表达式，为 VarExpression、AddExpression等，如 1 + 2、 4-2 + 3
 */
export abstract class SymbolExpression implements Expression {

    // 核心，左右两边的表达式运行时会递归执行
    protected left: Expression;
    protected right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    /**
     * @override
     * @param map_var 变量 map
     */
    abstract interpreter(map_var: Map<string, number>): number;
}