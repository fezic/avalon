<template>
  <div class="b-header">
    <div class="bilibili-header_bar">
      <ul class="left-entry">
        <li>
          <a href="//www.bilibili.com/"></a>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              :d="home_icon"
              fill="currentColor"
            ></path>
          </svg>
          <span>首页</span>
        </li>
        <li>
          <span>番剧</span>
        </li>
        <li v-popover>
          <span>直播</span>
        </li>
        <li v-popover>
          <span>游戏中心</span>
        </li>
        <li>
          <span>会员购物</span>
        </li>
        <li>
          <span>漫画</span>
        </li>
        <li>
          <span>赛事</span>
        </li>
        <li>
          <span>放放假</span>
        </li>
        <li>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path :d="down_icon.down_1" fill="currentColor"></path>
            <path :d="down_icon.down_2" fill="currentColor"></path>
          </svg>
          <span>下载客户端</span>
        </li>
      </ul>
    </div>
    <Banner/>
  </div>
</template>

<script>
import { bilibiliHome, down } from "@/utils/svg";
import Banner from "./Header_banner.vue";
export default {
  components: {
    Banner,
  },
  data() {
    return {
      home_icon: bilibiliHome,
      down_icon: down,
    };
  },
  mounted() {
   
  },
};
</script>

<style lang="less" scoped>
.bilibili-header_bar{
    position: absolute;
    top: 0;
    z-index: 1000;
    display: flex;
    width: 100%;
    height: 64px;
    padding: 0 24px;
    justify-content: space-between;
    align-items: center;
    .left-entry{
        display: flex;
        align-items: center;
        flex-shrink:0;
        li{
            margin-right: 20px;
            color: #fff;
        }
    }
}
</style>