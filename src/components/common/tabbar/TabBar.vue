<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        box-shadow: 6px -3px 7px 0px #928282;
    }
</style>