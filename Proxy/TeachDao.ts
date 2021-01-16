import { ITeachDao } from "./ITeachDao";

export class TeachDao implements ITeachDao{

    /**
     * @override
     */
    teach(): void {
        console.log('正在教学...')
    }
}