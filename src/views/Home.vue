<template>
  <div>
    <div class="showcase">
      <video src="../assets/home.mp4" autoplay muted loop></video>
      <div class="overlay"></div>
      <div class="text">
        <h2>champions</h2>
        <h3>are made in the ring</h3>
        <p>This is my individual works</p>
        <router-link to="/home">let's start</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.showcase {
  position: absolute;
  min-height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 100px;
  z-index: 2;
  video{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    object-fit: cover;
  }
  .text {
    z-index: 10;
    h2 {
      font-size: 5em;
      font-weight: 800;
      line-height: 1em;
      text-transform: uppercase;
    }
    h3 {
      font-size: 4em;
      font-weight: 700;
      line-height: 1em;
      text-transform: uppercase;
    }
    p {
      font-size: 1.1em;
      margin: 20px 0;
      font-weight: 400;
      max-width: 700px;
    }
    a {
      display: inline-block;
      font-size: 1em;
      font-weight: 550;
      background: #fff;
      padding: 10px 30px;
      text-decoration: none;
      color: #111;
      margin-top: 10px;
      transition: 0.2s;
    }
    a:hover{
        letter-spacing: 6px;
    }
  }
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        background: darkkhaki;
        mix-blend-mode: overlay;
    }
}
@media(max-width: 991px){
    .showcase{
        padding: 40px;
    }
    .text h2{
        font-size: 3em !important;
    }
    .text h3{
        font-size: 2em !important;
    }
}
</style>