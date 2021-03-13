<template>
    <div class="tab-bar-item" @click="btnclick">
        <slot name="item_icon" v-if="!isactive"></slot>
        <slot name="item_icon_active" v-else></slot>
        <div :style="isactive?{color:textcolor}:{}"><slot name="item_text"></slot></div>
    </div>
</template>

<script>

    export default {
        name: "TabBarItem",
        computed:{
          isactive:{
              get:function () {
                return this.$route.path.indexOf(this.path) !== -1   //判断当前路由与哪个小组件相对应，对应则为活跃状态
              },
              set:function () {

              }
          }
        },
        props:{           //接受App父组件传来的数据，父传子
            path:{
                type:String
            },
            textcolor:{
                type: String,
                default:'red'
            }
        },
        methods:{
            btnclick:function () {
                this.$router.push(this.path);
                this.isactive=false
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }
    .active{
        color: red;
    }
</style>