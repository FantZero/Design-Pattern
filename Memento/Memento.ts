/**
 * 备忘录对象，与需要记录的类的属性一致，负责保存记录，最佳方案应该是通过 原型模式 生成该类
 */
export class Memento {

    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _vit: number;
    public get vit(): number {
        return this._vit;
    }
    public set vit(value: number) {
        this._vit = value;
    }

    private _def: number;
    public get def(): number {
        return this._def;
    }
    public set def(value: number) {
        this._def = value;
    }

    constructor(name:string, vit:number, def:number) {
        this.name = name;
        this.vit = vit;
        this.def = def;
    }
}