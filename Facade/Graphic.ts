export class Graphic {
    private static graphic = new Graphic();

    private constructor(){}

    static getInstance(): Graphic{
        return this.graphic;
    }

    prepare(): void {
        console.log('graphic prepare...');
    }

    work(): void {
        console.log('graphic work...');
    }

    off(): void {
        console.log('graphic off...');
    }
}