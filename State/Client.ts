import { RaffleActivity } from "./RaffleActivity";

/**
 *  状态模式将每个状态的行为封装到对应的一个类中，主要用来解决对象在多种状态转换时，需要对外
  输出不同的行为的问题。状态和行为是一一对应的，状态之间可以相互转换
  当一个对象的内在状态改变时，允许改变其行为
 */
class Client {

    static main():void{
        const raffleActity = new RaffleActivity(1);

        for (let index = 0; index < 30; index++) {
            console.log(`---这是第${index + 1}次抽奖---`)
            raffleActity.deducePoint();
            raffleActity.raffle();
        }
    }
}

Client.main();