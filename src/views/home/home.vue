<template>
    <div>
        <NavBar class="home-nav"><div slot="center">首页</div></NavBar>
        <carrousel :banners="banners" style="margin-top: 44px"></carrousel>
        <RecommendView :recommends="recommends"></RecommendView>
        <feature></feature>
        <tabcontrol :titles="['流行','新款','精选']" @clickindex="clickindex"></tabcontrol>
        <GoodsList :goods="goods[currentCheck].list"></GoodsList>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import {getHomeMultidata,getHomeGoods} from "../../network/home";
    import carrousel from "../../components/common/swiper/carrousel";
    import RecommendView from "./RecommendView";
    import Feature from "./Feature";
    import tabcontrol from "../../components/content/tabcontrol";
    import GoodsList from "../../components/content/goods/GoodsList";

    export default {
        name: "home",
        components:{
            NavBar,
            carrousel,
            RecommendView,
            Feature,
            tabcontrol,
            GoodsList
        },
        data(){
          return{
              banners:[],
              recommends:[],
              goods:{
                  'pop':{page:0,list:[]},
                  'new':{page:0,list:[]},
                  'sell':{page:0,list:[]}
              },
              currentCheck: 'pop'
          }
        },
        created() {
            this.getHomeMultidata();
            this.getHomeGoods('pop');
            this.getHomeGoods('new');
            this.getHomeGoods('sell');
        },
        methods:{
            getHomeMultidata:function () {
                getHomeMultidata().then((res)=>{
                    this.banners=res.data.data.banner.list;
                    this.recommends = res.data.data.recommend.list;
                })
            },
            getHomeGoods:function (type) {
                const page = this.goods[type] + 1
                getHomeGoods(type,page).then((res)=>{
                    this.goods[type].list.push(...res.data.data.list);
                    this.goods[type].page += 1;
                })
            },
            clickindex:function (index) {
                switch (index) {
                    case 0:
                        this.currentCheck='pop'
                        break;
                    case 1:
                        this.currentCheck='new'
                        break;
                    case 2:
                        this.currentCheck='sell'
                        break;
                }
            }

        }
    }
</script>

<style scoped>
    .home-nav{
        background-color: #db9393;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 10;
    }
</style>