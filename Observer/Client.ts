import Baidu from "./Baidu";
import Tencent from "./Tencent";
import WeatherData from "./WeatherData";

class Client {

    static main():void{
        const weatherData = new WeatherData();
        const baidu_music = new Baidu('BaiduMusic');
        const baidu_map = new Baidu('BaiduMap');
        const baidu_map2 = new Baidu('BaiduMap');
        const baidu_map3 = new Baidu('BaiduMap3');
        const tencent_QQ = new Tencent('TencentQQ');
        const tencent_weixin = new Tencent('TencentWX');

        // 注册
        weatherData.registerObserver(baidu_music);
        weatherData.registerObserver(baidu_map);
        weatherData.registerObserver(baidu_map2);
        weatherData.registerObserver(tencent_QQ);
        weatherData.registerObserver(tencent_weixin);

        // 观察者监听
        weatherData.setData(10, 500, 20);

        // 删除
        weatherData.removeObserver(baidu_music);
        weatherData.removeObserver(baidu_map3);

        // 观察者监听
        console.log('=================');
        weatherData.setData(20, 600, 30);
    }
}

Client.main();