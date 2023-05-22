<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
        <a href="#" class="navbar-brand">资源站</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-target="#collapse-nav"
          data-bs-toggle="collapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-around"
          id="collapse-nav"
        >
          <ul class="navbar-nav">
            <li class="nav-item"><div class="nav-link">首页</div></li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><div class="nav-link">主题切换</div></li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><div class="nav-link">新人必读</div></li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><div class="nav-link">新人必读</div></li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><div class="nav-link">更多</div></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    
  }
};
</script>

<style lang="less" scoped>
.nav-active{
  color: rgb(108,38,165);
}
.nav-hover{
  color: rgb(91,79,153);
}
.container-fluid {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}
</style>