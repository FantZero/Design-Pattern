import { Builder } from "./Builder";

export class CommonBuilder extends Builder {

    buildBaise(): number {
        const depth = 5;
        console.log(`普通房屋地基深度为 ${depth} 米`);
        return depth;
    }
    buildWall(): number {
        const height = 5;
        console.log(`普通房屋墙体高度为 ${height} 米`);
        return height;
    }
    printColor(): string {
        const color = '白色';
        console.log(`普通房屋墙面颜色为 ${color}`);
        return color;
    }

}