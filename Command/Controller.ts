import { Command } from "./Command";
import { NoCommand } from "./NoCommand";

export class Controller {

    private onCommands: Command[];
    private offCommands: Command[];

    private undoCommand: Command;

    //假设有五个开关控制
    constructor() {
        this.onCommands = [];
        this.offCommands = [];
        for (let index = 0; index < 5; index++) {
            this.onCommands.push(new NoCommand());
            this.offCommands.push(new NoCommand());
        }
    }

    setCommand(idx:number, oncommand: Command, offcommand: Command){
        this.onCommands[idx] = oncommand;
        this.offCommands[idx] = offcommand;
    }

    /**
     * 开 按钮按下
     * @param idx 下标
     */
    onBtnWasPush(idx: number): void{
        this.onCommands[idx].execute();
        this.undoCommand = this.onCommands[idx];
    }

    /**
     * 关 按钮按下
     * @param idx 下标
     */
    offBtnWasPush(idx: number): void{
        this.offCommands[idx].execute();
        this.undoCommand = this.offCommands[idx];
    }

    /**
     * 撤回
     */
    undoBtnWasPush(){
        this.undoCommand.undo();
    }
}