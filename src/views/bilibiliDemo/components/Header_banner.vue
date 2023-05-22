<template>
  <div class="bilibili-header_banner">
    <header ref="header">
        <div class="view">
            <img src="https://assets.codepen.io/2002878/bilibili-winter-view-1.jpg" alt="" class="morning">
            <img src="https://assets.codepen.io/2002878/bilibili-winter-view-2.jpg" alt="" class="afternoon">
            <video autoplay loop muted src="https://assets.codepen.io/2002878/bilibili-winter-view-3.webm" class="evening"></video>
            <img src="https://assets.codepen.io/2002878/bilibili-winter-view-3-snow.png" alt="" class="windowCover">
        </div>
        <div class="tree">
            <img src="https://assets.codepen.io/2002878/bilibili-winter-tree-1.png" alt="" class="morning">
            <img src="https://assets.codepen.io/2002878/bilibili-winter-tree-2.png" alt="" class="afternoon">
            <img src="https://assets.codepen.io/2002878/bilibili-winter-tree-3.png" alt="" class="evening">
        </div>
    </header>
  </div>
</template>

<script>
export default {
  mounted() {
    this.updateDom();
  },
  methods: {
    updateDom() {
      const header = this.$refs.header;
      let startPoint;
      header.addEventListener("mouseenter", (e) => {
        header.classList.add("moving");
        startPoint = e.clientX;
      });
      header.addEventListener("mouseout", () => {
        header.classList.remove("moving");
        header.style.setProperty("--percentage", 0.5);
      });
      header.addEventListener("mousemove", (e) => {
        let percentage = (e.clientX - startPoint) / window.outerWidth + 0.5;
        header.style.setProperty("--percentage", percentage);
      });
    },
  },
};
</script>

<style lang="less" scoped>
body {
  margin: 0;
}
header {
  height: 160px;
  position: relative;
  overflow: hidden;
  --percentage: 0.5;
}
header .view,
header .tree {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
header img,
header video {
  position: absolute;
  display: block;
  width: 120%;
  height: 100%;
  object-fit: cover;
}
header .morning {
  z-index: 20;
  opacity: calc(1 - (var(--percentage) - 0.25) / 0.25);
}
header .afternoon {
  z-index: 10;
  opacity: calc(1 - (var(--percentage) - 0.5) / 0.5);
}
header .view {
  transform: translateX(calc(var(--percentage) * 100px));
}
header .tree {
  transform: translateX(calc(var(--percentage) * 50px));
  filter: blur(3px);
}
header .view,
header .tree,
header .morning,
header .afternoon {
  transition: 0.2s ease-in;
}
header .moving .view,
header .moving .tree,
header .moving .morning,
header .moving .afternoon {
  transition: none;
}
header .windowCover {
  opacity: calc((var(--percentage) - 0.9) / 0.1);
}
</style>