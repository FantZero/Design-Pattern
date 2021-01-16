/**
 * 没办法，JS没有栈（Stack）类，手动造一个Stack
 */
export class Stack<T> {

    private arr: T[];
    private idx: number;

    constructor() {
        this.arr = [];
        this.idx = -1;
    }

    push(item: T): void {
        this.arr[++this.idx] = item;
    }

    pop(): T {
        if (this.idx >= 0) {
            return this.arr[this.idx--];
        } else {
            throw new Error("has no element..");
        }
    }

    quantity(): number {
        return this.idx + 1;
    }
}