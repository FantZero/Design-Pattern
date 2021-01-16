/**
 * 懒汉式 
 */
export class LazyType {
    private static instance: LazyType;

    private constructor() {}

    public static getInstance(): LazyType{
        if(!this.instance){
            this.instance = new LazyType();
        }
        return this.instance;
    }

    public print():void{
        console.log('单例模式-懒汉式');
    }
}