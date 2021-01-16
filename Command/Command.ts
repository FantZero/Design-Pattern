export interface Command {
    /**
     * 执行
     */
    execute(): void;

    /**
     * 撤销
     */
    undo(): void;
}