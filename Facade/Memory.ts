export class Memory {
    private static memory = new Memory();

    private constructor(){}

    static getInstance(): Memory{
        return this.memory;
    }

    work(): void {
        console.log('memory work...');
    }

    off(): void {
        console.log('memory off...');
    }
}