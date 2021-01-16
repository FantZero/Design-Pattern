import { MyAdapter } from "./MyAdapter";

class Client {

    static main():void{
        const myAdapter = new MyAdapter();

        myAdapter.m1 = ()=> {
            console.log('重写 m1 方法\n新方法1');
        }
        myAdapter.m1();

        myAdapter.m1 = ()=> {
            console.log('重写 m1 方法\n新方法2');
        }
        myAdapter.m1();
    }
}

Client.main();