import { RaffleActivity } from "./RaffleActivity";
import { State } from "./State";

/**
 * 发放奖品状态
 */
export class DispenseState implements State {

    private rafActivity: RaffleActivity;

    constructor(rafActivity: RaffleActivity) {
        this.rafActivity = rafActivity;
    }

    deducePoint(): void {
        console.log('发放奖品状态，不能扣积分');
    }

    raffle(): boolean {
        console.log('发放奖品状态，不能抽奖');
        return false;
    }

    dispense(): void {
        if(this.rafActivity.getCount() > 0){
            console.log('恭喜你，成功领取到奖品！');
            this.rafActivity.setState(this.rafActivity.getNoRaffleState());
        }else{
            console.log('抱歉，奖品已经发放完了~');
            this.rafActivity.setState(this.rafActivity.getDispenseOverState());
        }
    }
}