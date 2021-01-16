export class House {

    private baiseDepth: number;
    private wallHeight: number;
    private color: string;

    constructor(baiseDepth: number, wallHeight: number, color: string) {
        this.baiseDepth = baiseDepth;
        this.wallHeight = wallHeight;
        this.color = color;
    }

    getBaiseDepth(): number{
        return this.baiseDepth;
    }
    
    getWallHeight(): number{
        return this.wallHeight;
    }

    getColor(): string{
        return this.color;
    }
}