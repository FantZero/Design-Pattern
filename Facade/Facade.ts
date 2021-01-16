import { Cpu } from "./Cpu";
import { Display } from "./Display";
import { Graphic } from "./Graphic";
import { Memory } from "./Memory";

export class Facade {
    private cpu: Cpu;
    private graphic: Graphic;
    private memory: Memory;
    private display: Display;

    constructor() {
        this.cpu = Cpu.getInstance();
        this.graphic = Graphic.getInstance();
        this.memory = Memory.getInstance();
        this.display = Display.getInstance();
    }

    on(): void {
        this.cpu.prepare();
        this.cpu.singleThread();
        this.graphic.prepare();
        this.memory.work();
        this.display.on();
    }

    working(): void {
        this.cpu.multiThread();
        this.graphic.work();
        this.memory.work();
        this.display.lock();
    }

    off(): void {
        this.cpu.off();
        this.graphic.off();
        this.memory.off();
        this.display.off();
    }
}