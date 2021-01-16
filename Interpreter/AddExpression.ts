import { Expression } from "./Expression";
import { SymbolExpression } from "./SymbolExpression";

export class AddExpression extends SymbolExpression {
    constructor(left: Expression, right: Expression) {
        super(left, right);
    }

    interpreter(map_var: Map<string, number>): number {
        return this.left.interpreter(map_var) + this.right.interpreter(map_var)
    }
}