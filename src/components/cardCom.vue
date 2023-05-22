<template>
    <div class="card text-center g-glossy h-100" @click="jumpPage(card.link)">
        <div class="card-body">
            <h5 class="card-title">{{card.title}}</h5>
            <img ref="img" :src="card.img" class="card-img-bottom">
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            card:{
                title:{
                    type:String,
                    default:"标题"
                },
                img:{
                    type:String
                }
            }
        },
        data(){
            return{
              
            }
        },
        mounted(){
     
        },
        methods:{
            jumpPage(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="less" scoped>
.g-glossy{
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
}
</style>