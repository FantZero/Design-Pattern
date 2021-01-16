export class User {

    /**
     * 外部状态
     * 外部状态指对象得以依赖的一个标记，是随环境改变而改变的、不可共享的状态
     */
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string{
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }
}