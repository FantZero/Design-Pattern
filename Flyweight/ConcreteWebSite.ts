import { User } from "./User";
import { WebSite } from "./Website";

export class ConcreteWebSite extends WebSite{

    /**
     * 共享的部分，内部状态
     * 内部状态指对象共享出来的信息，存储在享元对象内部且不会随环境的改变而改变
     */
    private type: string;

    constructor(type: string){
        super();
        this.type = type;
    }

    use(user: User): void {
        console.log(`网站发布形式：${this.type}，使用者是：${user.getName()}`);
    }
}