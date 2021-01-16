export interface Expression {
    // 解释函数，具体对变量map怎么解释处理交给子类
    interpreter(map_var: Map<string, number>): number;
}