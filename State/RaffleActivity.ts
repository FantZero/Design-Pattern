import { DispenseOverState } from "./DispenseOverState";
import { DispenseState } from "./DispenseState";
import { NoRaffleState } from "./NoRaffleState";
import { RaffleState } from "./RaffleState";
import { State } from "./State";

export class RaffleActivity {

    private state: State;
    private count: number;  // 奖品数量

    private noRaffleState = new NoRaffleState(this);
    private raffleState = new RaffleState(this);
    private dispenseState = new DispenseState(this);
    private dispenseOverState = new DispenseOverState(this);

    constructor(count: number) {
        this.state = this.getNoRaffleState();   // 初始化时，状态为：不能抽奖状态
        this.count = count;
    }

    deducePoint(): void {
        this.state.deducePoint();
    }

    raffle(): void {
        if(this.state.raffle()){
            this.state.dispense();
        }
    }

    getCount(): number{
        return this.count--;
    }

    getState(): State {
        return this.state;
    }

    setState(state: State): void {
        this.state = state;
    }

    getNoRaffleState(){
        return this.noRaffleState;
    }

    getRaffleState(){
        return this.raffleState;
    }

    getDispenseState(){
        return this.dispenseState;
    }

    getDispenseOverState(){
        return this.dispenseOverState;
    }

}