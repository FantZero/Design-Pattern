import { Controller } from "./Controller";
import { LightOffCommand } from "./LightOffCommand";
import { LightOnCommand } from "./LightOnCommand";
import { LightReceiver } from "./LightReceiver";

/**
 *   调用者只要调用命令对象的execute()方法就可以让接收者工作，而不必知道具体的接收者对
 * 象是谁、是如何实现的，命令对象会负责让接收者执行请求的动作。
 *   请求发起者 和 请求执行者 之间的解耦是通过命令对象实现的，命令对象起到了纽带桥梁的作用。
 */
class Client {

    static main():void{
        const lightRev_bedroom = new LightReceiver('卧室');
        const lightOnCmd_bedroom = new LightOnCommand(lightRev_bedroom);
        const lightOffCmd_bedroom = new LightOffCommand(lightRev_bedroom);

        const lightRev_bathroom = new LightReceiver('洗手间');
        const lightOnCmd_bathroom = new LightOnCommand(lightRev_bathroom);
        const lightOffCmd_bathroom = new LightOffCommand(lightRev_bathroom);

        const controller = new Controller();

        controller.setCommand(0, lightOnCmd_bedroom, lightOffCmd_bedroom);
        controller.onBtnWasPush(0);
        controller.offBtnWasPush(0);
        controller.undoBtnWasPush();

        controller.setCommand(1, lightOnCmd_bathroom, lightOffCmd_bathroom);
        controller.onBtnWasPush(1);
        controller.undoBtnWasPush();
        controller.offBtnWasPush(1);
    }
}

Client.main();