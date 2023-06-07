<script setup lang="ts">
import GameControl from './Gamecontroll';
import { onMounted, reactive } from "vue";
import useCounter from './store/index';
const counterStore = useCounter();

onMounted(() => {
  const gameConrtol = new GameControl();
});
</script>

<template>
  <div id="main">
    <!-- 设置游戏舞台 -->
    <div id="start">
      <!-- 蛇 -->
      <div id="snake">
        <div></div>
      </div>

      <!-- 食物 -->
      <div id="food">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <!-- 设置游戏积分版 -->
    <div class="score-rank">
      scode: {{ counterStore.score }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
$bg-color: #b7d4a8;
#main{
  width: 360px;
  height: 420px;
  background: $bg-color;
  border: 10px solid black;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  #start{
    width: 304px;
    height: 309px;
    border: 2px solid black;
    margin-top: 20px;
    position: relative;
    
    // 设置蛇的样式
    #snake{
      display: flex;
      &>div{
        width: 10px;
        height: 10px;
        background-color: #000;
        border: 1px solid $bg-color;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    #food{
      width: 10px;
      position: absolute;
      left: 40px;
      top: 100px;
      display: flex;
      flex-wrap: wrap;
      &>div{
        width: 5px;
        height: 5px;
        background-color: #000;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
