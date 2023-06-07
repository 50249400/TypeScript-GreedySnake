import {Food, ScorePanel, Snake} from './index'

//游戏控制器，控制其他所有类
class GameControl{
    //定义三个属性
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;

    //储存按键移动方向
    direction: string = '';

    //是否存活，死亡游戏结束
    isLive: boolean = true; 

    constructor(){
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();

        this.init();
    }

    //游戏初始化
    init(){
        //绑定键盘按键
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    /*
        键盘事件
        ArrowRight,
        ArrowDown,
        ArrowLeft,
        ArrowUp
    */
    keydownHandler(event: KeyboardEvent){
        //需要检查direction值是否合法
        this.direction = event.key;
    }

    //控制蛇移动的方法
    run(){
        // 获取蛇现在的坐标
        let x = this.snake.X;
        let y = this.snake.Y;
        
        switch(this.direction){
            case 'ArrowRight':
                x += 10;
                break;
            case 'ArrowLeft':
                x -= 10;
                break;
            case 'ArrowUp':
                y -= 10;
                break;
            case 'ArrowDown':
                y += 10;
                break;
        }

        try{
            this.snake.X = x;
            this.snake.Y = y;
            //检查是否吃到了食物
            if(this.checkEat(x, y)){
                alert('吃到食物了');
                // 吃到食物后改变食物位置，计数加一
                this.scorePanel.addScore();
                this.food.change();
            }
        }catch(e: any){
            alert(e.message);
            this.isLive = false;
            this.snake.X = 0;
            this.snake.Y = 0;
        }
        
        this.isLive && setTimeout(this.run.bind(this), 300);
    }

    // 检查蛇是否吃到食物
    checkEat(X: number, Y: number): boolean{
        if(X == this.food.X && Y == this.food.Y){
            return true;
        }else{
            return false;
        }
    }
}

export default GameControl