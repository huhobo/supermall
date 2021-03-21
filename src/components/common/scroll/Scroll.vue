<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BetterScroll from "better-scroll"

    export default {
        name: "Scroll",
        data(){
          return{
              iscroll:null,
          }
        },
        mounted() {
            this.$nextTick(() => {
                this.iscroll = new BetterScroll(this.$refs.wrapper, {
                    observeDOM: true,
                    click:true
                })
                console.log(this.iscroll)
/*                setTimeout(()=>{
                    this.iscroll = new BetterScroll(this.$refs.wrapper, {})
                    console.log(this.iscroll)
                },500)*/
            })
        }
    }
</script>

<style scoped>
    .wrapper{
        height: 100vh;
        overflow: hidden;
    }
</style>