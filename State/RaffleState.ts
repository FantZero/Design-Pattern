import { RaffleActivity } from "./RaffleActivity";
import { State } from "./State";

/**
 * 抽奖状态
 */
export class RaffleState implements State {

    private rafActivity: RaffleActivity;

    constructor(rafActivity: RaffleActivity) {
        this.rafActivity = rafActivity;
    }

    deducePoint(): void {
        console.log('已经扣除过积分啦，不用再扣啦~');
    }

    raffle(): boolean {
        if(Math.random() > 0.7){
            this.rafActivity.setState(this.rafActivity.getDispenseState());
            return true;
        }else{
            console.log('抱歉，这次没有中奖');
            this.rafActivity.setState(this.rafActivity.getNoRaffleState());
            return false;
        }
    }

    dispense(): void {
        console.log('抱歉，需要抽到奖才能发放');
    }
}