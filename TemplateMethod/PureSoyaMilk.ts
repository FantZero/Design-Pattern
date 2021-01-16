import { SoyaMilk } from "./SoyaMilk";

export class PureSoyaMilk extends SoyaMilk{

    addCondiments(): void {}
    wantAddCondiments():boolean{
        return false;
    }
}