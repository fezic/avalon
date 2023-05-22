<template>
  <div class="popover" v-if="visible" ref="popover">
    <div class="game">
      <div class="game-left">
        <a href="https://game.bilibili.com/fgo/news.html#!news/0/1/12194">
          <div class="game-left-img">
            <img
              style="border-radius: 8px"
              width="100%"
              height="100%"
              src="@/static/fgo.jpg"
              alt=""
            />
            <div class="game-left-title">命运-冠位指定(Fate/GO)</div>
          </div>
        </a>
        <div class="game-left-pannel">
          <a
            class="game-left-panel-item"
            href="https://game.bilibili.com/blhx/sixth-anniversary-2023/"
          >
            <img class="game-left-img" src="@/static/blhx.png" alt="" />
            <div class="game-left-pannel-title">碧蓝航线</div>
          </a>
          <a
            class="game-left-panel-item"
            href="https://game.bilibili.com/gt/anniversary2hb/"
          >
            <img class="game-left-img" src="@/static/kg.png" alt="" />
            <div class="game-left-pannel-title">
              坎特伯雷公主与骑士唤醒冠军之剑的奇幻冒险
            </div>
          </a>
          <a
            class="game-left-panel-item"
            href="https://game.bilibili.com/sklr3/randoujie/"
          >
            <img class="game-left-img" src="@/static/dnf.png" alt="" />
            <div class="game-left-pannel-title">时空猎人3</div></a
          >
        </div>
      </div>
      <div class="game-right">
        <div class="game-right-title">新游预告</div>
        <div class="game-right-list">
          <a
            href="https://crossworlds.biligame.com/yycj"
            class="game-right-list-item"
            >二之国：交错世界</a
          >
          <a
            href="https://www.biligame.com/detail/?id=104284"
            class="game-right-list-item"
            >斯露德</a
          >
          <a
            href="https://www.biligame.com/detail/?id=107684"
            class="game-right-list-item"
            >尘白禁区</a
          >
          <a href="https://smhx.biligame.com/yy" class="game-right-list-item"
            >宿命回响：弦上的叹息</a
          >
          <a
            href="https://www.biligame.com/detail/?id=109876"
            class="game-right-list-item"
            >百面千相</a
          >
          <a
            href="https://www.biligame.com/detail/?id=109785"
            class="game-right-list-item"
            >全明星街球派对</a
          >
          <a
            href="https://www.biligame.com/detail/?id=109702"
            class="game-right-list-item"
            >白夜极光</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.popover {
  z-index: 1030;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e3e5e7;
  color: #18191c;
  .game {
    width: 424px;
    height: 295px;
    background: #ffffff;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    .game-left {
      width: 230px;
      height: 129px;
      box-sizing: border-box;
      padding-right: 20px;
      position: relative;
      .game-left-title {
        position: absolute;
        left: 10px;
        bottom: 20px;
        color: #000000;
        font-weight: 500;
      }
      .game-left-pannel {
        display: flex;
        justify-content: space-between;
        .game-left-panel-item {
          width: 66px;
          margin-top: 15px;
          .game-left-img {
            width: 100%;
            height: 66px;
          }
          .game-left-pannel-title {
            font-size: 13px;
            color: #000000;
            text-align: center;
            line-height: 17px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden; //溢出内容隐藏
            text-overflow: ellipsis; //文本溢出部分用省略号表示
            display: -webkit-box; //特别显示模式
            -webkit-line-clamp: 2; //行数
            line-clamp: 2;
            -webkit-box-orient: vertical; //盒子中内容竖直排列
            &:hover {
              color: #00aeec;
            }
          }
        }
      }
    }
    .game-right {
      box-sizing: border-box;
      padding: 0 20px;
      text-align: left;
      border-left: 1px solid #CCCCCC;
      .game-right-title {
        font-size: 20px;
        line-height: 28px;
        margin: 0 0 10px 8px;
      }
      .game-right-list {
        .game-right-list-item {
          width: 120px;
          height: 29px;
          cursor: pointer;
          font-size: 13px;
          line-height: 29px;
          color: #61666d;
          padding: 0 8px;
          margin-bottom: 2px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          text-overflow: -o-ellipsis-lastline;
          text-overflow: ellipsis;
          word-break: break-word !important;
          word-break: break-all;
          line-break: anywhere;
          -webkit-line-clamp: 1;
          transition: background 0.2s linear;
        }
      }
    }
  }
}
</style>