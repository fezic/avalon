<template>
  <div class="bg">
    <div class="container p-4 mt-2">
      <div class="row">
        <div class="col-6">
          <Card :card="bilibiliDemo" />
        </div>
        <div class="col-6">
          <Card :card="backManage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/cardCom.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      bilibiliDemo: {
        title: "bilibiliDemo",
        link:"/bilibili",
        img:require("../static/bilibili.jpg")
      },
      backManage:{
        title:"backManage",
        link:"backManage",
        img:require("../static/backManage.jpg")
      }
    };
  },
};
</script>

<style lang="less" scoped>
.bg {
  background:url("@/assets/homeBg.jpeg") no-repeat;
  min-height: 100vh;
  background-size: 100% 100%;
  background-attachment:fixed;
  overflow: hidden;
}
</style>