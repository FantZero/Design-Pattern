import { RaffleActivity } from "./RaffleActivity";
import { State } from "./State";

/**
 * 奖品已发放完状态
 */
export class DispenseOverState implements State {

    private rafActivity: RaffleActivity;

    constructor(rafActivity: RaffleActivity) {
        this.rafActivity = rafActivity;
    }

    deducePoint(): void {
        console.log('抱歉奖品已发放完了，不能扣积分，请下次参加');
    }

    raffle(): boolean {
        console.log('抱歉奖品已发放完了，不能抽奖，请下次参加');
        return false;
    }

    dispense(): void {
        console.log('抱歉奖品已发放完了，不能发奖品，请下次参加');
    }
}