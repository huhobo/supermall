<template>
    <div class="recommends">
        <div v-for="recommend in recommends" class="recommend">
            <a :href="recommend.link">
                <img :src="recommend.image">
                <div>{{recommend.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
            recommends:{
                type:Array
            }
        }
    }
</script>

<style scoped>
    .recommends {
        display: flex;
        background-color: #fff;
        font-size: 12px;
        padding: 10px 0 20px;
        border-bottom: 10px solid #ededed;}
    .recommend{
        flex: 1;
        text-align: center;}
    .recommend img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>