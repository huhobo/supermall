<template>
    <tab-bar>
        <tab-bar-item path="/home">
            <img src="../../assets/img/tabbar/首页.svg" alt="" slot="item_icon">
            <img src="../../assets/img/tabbar/首页_active.svg" alt="" slot="item_icon_active">
            <div slot="item_text">首页</div>
        </tab-bar-item>

        <tab-bar-item path="/category">
            <img src="../../assets/img/tabbar/分类.svg" alt="" slot="item_icon">
            <img src="../../assets/img/tabbar/分类_active.svg" alt="" slot="item_icon_active">
            <div slot="item_text">分类</div>
        </tab-bar-item>

        <tab-bar-item path="cart">
            <img src="../../assets/img/tabbar/购物车.svg" alt="" slot="item_icon">
            <img src="../../assets/img/tabbar/购物车_active.svg" alt="" slot="item_icon_active">
            <div slot="item_text">购物车</div>
        </tab-bar-item>

        <tab-bar-item path="profile">
            <img src="../../assets/img/tabbar/我的.svg" alt="" slot="item_icon">
            <img src="../../assets/img/tabbar/我的_active.svg" alt="" slot="item_icon_active">
            <div slot="item_text">我的</div>
        </tab-bar-item>

    </tab-bar>
</template>

<script>
    import TabBarItem from "../common/TabBarItem";
    import TabBar from "../common/TabBar";

    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>