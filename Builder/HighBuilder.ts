import { Builder } from "./Builder";

export class HighBuilder extends Builder {

    buildBaise(): number {
        const depth = 50;
        console.log(`摩天大厦地基深度为 ${depth} 米`);
        return depth;
    }
    buildWall(): number {
        const height = 100;
        console.log(`摩天大厦墙体高度为 ${height} 米`);
        return height;
    }
    printColor(): string {
        const color = '高级灰';
        console.log(`摩天大厦墙面颜色为 ${color}`);
        return color;
    }

}