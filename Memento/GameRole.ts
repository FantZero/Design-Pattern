import { Memento } from "./Memento";

export class GameRole {
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

    constructor(name:string){
        this.name = name;
    }

    public createMemento(name: string, vit:number, def:number):Memento{
        return new Memento(name, vit, def);
    }

    public restorGameRole(memeto: Memento):void{
        this.vit = memeto.vit;
        this.def = memeto.def;
    }

    public display():void{
        console.log(`${this.name}:   vit: ${this.vit}--def: ${this.def}`);
    }
}