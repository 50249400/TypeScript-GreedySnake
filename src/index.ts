import useCounter from './store/index'
class Food{
    element: HTMLElement;

    constructor(){
        this.element = document.getElementById('food')!; //叹号向编译器说明此元素一定存在
    }

    // 定义一个获取食物X轴的方法
    get X(){
        return this.element.offsetLeft;
    }

    // 定义一个获取食物Y轴的方法
    get Y(){
        return this.element.offsetTop;
    }

    //更改食物的位置
    change(){
        // 生成随机数
        let x = Math.round(Math.random() * 29) * 10;
        let y = Math.round(Math.random() * 29) * 10;

        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    }
}

//计分板类
class ScorePanel{
    score = 0;
    //加分方法
    addScore(){
        this.score++;
        const counterStore = useCounter();
        counterStore.score = this.score;
    }
}

//蛇类
class Snake{
    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体
    bodies: HTMLCollection;

    constructor(){
        this.head = document.querySelector('#snake > div')!;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    }

    // 获取蛇头X轴的方法
    get X(){
        return this.head.offsetLeft;
    }

    // 获取蛇头Y轴的方法
    get Y(){
        return this.head.offsetTop;
    }

    // 设置蛇头坐标x轴
    set X(value: number){
        // 轴向没有变化，直接退出
        if(this.X === value){
            return;
        }
        if(value < 0 || value > 304){
            throw new Error('嚯，死了啦，都是你害的啦！');
        }
        this.head.style.left = value + 'px';
    }

    // 设置蛇头坐标y轴
    set Y(value: number){
         // 轴向没有变化，直接退出
        if(this.Y === value){
            return;
        }
        if(value < 0 || value > 309){
            throw new Error('嚯，死了啦，都是你害的啦！');
        }
        this.head.style.top = value + 'px';
    }

}

export {
    Food,
    ScorePanel,
    Snake
}