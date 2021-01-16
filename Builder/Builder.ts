import { House } from "./House";

export abstract class Builder {

    private house: House;

    abstract buildBaise(): number;
    abstract buildWall(): number;
    abstract printColor(): string;

    build(): House{
        this.house = new House(this.buildBaise(), this.buildWall(), this.printColor());
        return this.house;
    }
}