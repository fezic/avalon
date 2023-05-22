<template>
    <div>
        <div class="d-grid gap-2 ">
            <!-- <Alert/> -->
            <Card :card="card"/>
        </div>
    </div>
</template>

<script>
// import Alert from "../alertCom.vue"
import Card from "../cardCom.vue"
    export default {
        components:{
            // Alert,
            Card
        },
        data(){
            return{
                card:{
                    title:"后台管理系统"
                }
            }
        }
    }
</script>

<style lang="less" scoped>

</style>