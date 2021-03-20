<template>
    <div class="tab-control-wrap">
        <div class="tab-control-item"v-for="(title,index) in titles" @click="tabItemClick(index)">
            <span :class="{active:index===currentIndex}">{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabcontrol",
        props:{
            titles:{
                type:Array,
                default:function(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex: 0
            }
        },
        methods:{
            tabItemClick:function (index) {
                this.currentIndex = index;
                this.$emit('clickindex',index)
            }
        }
    }
</script>

<style scoped>
    .tab-control-wrap{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        background-color: #fff;
        position: sticky; /*粘性定位*/
        top: 44px; /*粘性定位的顶部位置*/
        z-index: 9;
    }
    .tab-control-item{
        flex: 1;
    }
    .active{
        color: #ff8198;
        border-bottom: 2px solid #ff8198;
        padding: 5px;
    }
</style>