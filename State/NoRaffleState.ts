import { RaffleActivity } from "./RaffleActivity";
import { State } from "./State";

/**
 * 不能抽奖状态，与 RaffleActivity 相互引用
 */
export class NoRaffleState implements State {

    private rafActivity: RaffleActivity;

    constructor(rafActivity: RaffleActivity) {
        this.rafActivity = rafActivity;
    }

    deducePoint(): void {
        console.log('已成功扣除50积分，您可以抽奖啦！');
        this.rafActivity.setState(this.rafActivity.getRaffleState());
    }

    raffle(): boolean {
        console.log('需要先使用50积分参与抽奖哦');
        return false;
    }
    
    dispense(): void {
        console.log('需要先使用50积分参与抽奖哦');
    }
}