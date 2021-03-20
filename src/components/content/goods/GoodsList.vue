<template>
    <div class="goods">
        <GoodsItem v-for="item in goods">
            <img :src="item.show.img" slot="good-image">
            <p class="title" slot="title">{{item.title}}}</p>
            <span class="price" slot="price">价格：{{item.price}}</span>
            <span class="collect" slot="cfav">收藏：{{item.cfav}}</span>
        </GoodsItem>
    </div>
</template>

<script>
    import GoodsItem from "./GoodsItem";
    export default {
        name: "GoodsList",
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{

        },
        components:{
            GoodsItem
        }
    }
</script>

<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>