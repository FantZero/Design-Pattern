export abstract class SoyaMilk {

    // 模板方法，将四个步骤汇总成 make 方法
    make():void{
        this.select();
        if(this.wantAddCondiments()){
            this.addCondiments();
        }
        this.addCondiments();
        this.soak();
        this.beat();
    }

    select():void{
        console.log('第一步：选择好新鲜黄豆');
    }

    /**
     * 添加配料，具体的由子类去实现
     */
    abstract addCondiments():void;

    soak():void{
        console.log('第三步：浸泡');
    }

    beat():void{
        console.log('第四步：打碎');
    }

    /**
     * 钩子方法，决定是否需要添加配料
     */
    wantAddCondiments():boolean{
        return true;
    }
}