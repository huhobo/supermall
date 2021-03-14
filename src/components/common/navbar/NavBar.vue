<template>
    <div class="navbar ac">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .navbar{
        display: flex;
        line-height: 44px;
        height: 44px;
        box-shadow:  3px 2px 7px 0px #928282;
    }
    .left,.right{
        flex: 1 1 20%;
    }
    .center{
        flex: 1 1 80%;
    }
</style>