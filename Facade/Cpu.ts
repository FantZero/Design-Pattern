export class Cpu {
    private static cpu = new Cpu();

    private constructor(){}

    static getInstance(): Cpu{
        return this.cpu;
    }

    prepare(): void {
        console.log('cpu prepare...');
    }

    singleThread(): void {
        console.log('cpu singleThread...');
    }

    multiThread(): void {
        console.log('cpu multiThread...');
    }

    off(): void {
        console.log('cpu off...');
    }
}