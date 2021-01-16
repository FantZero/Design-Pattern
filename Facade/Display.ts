export class Display {
    private static display = new Display();

    private constructor(){}

    static getInstance(): Display{
        return this.display;
    }

    on(): void {
        console.log('display on...');
    }

    lock(): void {
        console.log('display pause...');
    }

    off(): void {
        console.log('display off...');
    }
}