import { CareTaker } from "./CareTaker";
import { GameRole } from "./GameRole";

class Client {

    static main1():void{

        // step1 开战前，将 攻击、防御 值保存下来
        const gameRole = new GameRole('A');
        gameRole.vit = 100;
        gameRole.def = 100;
        console.log('step1 开战前');
        gameRole.display();

        const careTaker = new CareTaker();
        careTaker.memento = gameRole.createMemento(gameRole.name, gameRole.vit, gameRole.def);

        // step2 开战中
        gameRole.vit = 50;
        gameRole.def = 20;
        console.log('\nstep2 开战中');
        gameRole.display();

        // step3 结束战斗，恢复一下
        gameRole.restorGameRole(careTaker.memento);
        console.log('\nstep3 结束战斗，恢复一下');
        gameRole.display();
    }

    static main2():void{
        // step1 开战前，将 A,B 攻击、防御 值保存下来
        const gameRole_A = new GameRole('A');
        const gameRole_B = new GameRole('B');
        gameRole_A.vit = 100;
        gameRole_A.def = 100;
        gameRole_B.vit = 100;
        gameRole_B.def = 100;
        console.log('step1 开战前');
        gameRole_A.display();
        gameRole_B.display();

        const careTaker = new CareTaker();
        careTaker.setMementoOfMap(gameRole_A.name, 1, gameRole_A.createMemento(gameRole_A.name, gameRole_A.vit, gameRole_A.def));
        careTaker.setMementoOfMap(gameRole_B.name, 1, gameRole_B.createMemento(gameRole_B.name, gameRole_B.vit, gameRole_B.def));

        // step2 开战中
        gameRole_A.vit = 50;
        gameRole_A.def = 20;
        gameRole_B.vit = 80;
        gameRole_B.def = 10;
        console.log('\nstep2 开战中');
        gameRole_A.display();
        gameRole_B.display();

        // step3 结束战斗，恢复一下
        gameRole_A.restorGameRole(careTaker.getMementoOfMap(gameRole_A.name, 1));
        gameRole_B.restorGameRole(careTaker.getMementoOfMap(gameRole_B.name, 1));
        console.log('\nstep3 结束战斗，恢复一下');
        gameRole_A.display();
        gameRole_B.display();
    }
}

Client.main1();
console.log('\n============\n');
Client.main2();