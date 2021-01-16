import { ConcreteWebSite } from "./ConcreteWebSite";
import { WebSite } from "./Website";

export class WebSiteFactory {

    /**
     * 核心：用唯一标识码判断，如果在内存中有，则返回这个唯一标识码所标识的对象，用 Map 存储
     */
    private pool = new Map<string, WebSite>();

    getWebSite(type: string): WebSite{
        if(!this.pool.has(type)){
            this.pool.set(type, new ConcreteWebSite(type));
        }
        return this.pool.get(type);
    }

    getWebSiteCount(){
        return this.pool.size;
    }
}