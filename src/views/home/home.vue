<template>
    <div>
        <NavBar class="home-nav"><div slot="center">首页</div></NavBar>
        <carrousel :banners="banners"></carrousel>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import {getHomeMultidata} from "../../network/home";
    import carrousel from "../../components/common/swiper/carrousel";

    export default {
        name: "home",
        components:{
            NavBar,
            carrousel
        },
        data(){
          return{
              banners:[],
              recommends:[]
          }
        },
        created() {
            getHomeMultidata().then((res)=>{
                this.banners=res.data.data.banner.list;
                this.recommends = res.data.data.recommend.list;
            })
        }
    }
</script>

<style scoped>
    .home-nav{
        background-color: #db9393;
    }
</style>