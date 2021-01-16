import { Equipment } from "./Equipment";

export interface Mediator {
    // 注册 设备 到中介者中
    regEquipment(eptName: string, equipment: Equipment);

    // 根据发出的状态 1-开，0-关 获取相应的信息
    getMessage(status: number, eptName: string);
}