export class LightReceiver {
    
    private location: string;

    constructor(location: string){
        this.location = location;
    }

    on(): void {
        console.log(`${this.location}灯泡开了`);
    }

    off(): void {
        console.log(`${this.location}灯泡关了`);
    }
}