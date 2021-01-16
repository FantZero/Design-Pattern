import { AddExpression } from "./AddExpression";
import { Expression } from "./Expression";
import { Stack } from "./Stack";
import { SubExpression } from "./SubExpression";
import { VarExpression } from "./VarExpression";

export class Calculator {

    private expression: Expression;

    // 使用栈，将合并成一个“浓缩”的Expression
    constructor(expStr: string) {
        const stack = new Stack<Expression>();
        let left: Expression;
        let right: Expression;

        for (let index = 0; index < expStr.length; index++) {
            switch (expStr[index]) {
                case '+':
                    left = stack.pop();
                    right = new VarExpression(expStr[++index]);
                    stack.push(new AddExpression(left, right));
                    break;
                case '-':
                    left = stack.pop();
                    right = new VarExpression(expStr[++index]);
                    stack.push(new SubExpression(left, right));
                    break;
                default:
                    stack.push(new VarExpression(expStr[index]));
                    break;
            }
        }
        this.expression = stack.pop();
    }

    run(map_var: Map<string, number>): number {
        return this.expression.interpreter(map_var);
    }
}