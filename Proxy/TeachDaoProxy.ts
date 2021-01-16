import { ITeachDao } from "./ITeachDao";

export class TeachDaoProxy implements ITeachDao{
    private iTeachDao: ITeachDao;

    constructor(iTeachDao: ITeachDao) {
        this.iTeachDao = iTeachDao;
    }

    /**
     * @override
     */
    teach(): void {
        console.log('开始上课');
        this.iTeachDao.teach();
        console.log('结束下课');
    }
}