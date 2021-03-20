<template>
    <div class="good">
        <slot name="good-image"></slot>
        <div class="good-info">
            <slot name="title"></slot>
            <slot name="price"></slot>
            <slot name="cfav"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsItem"
    }
</script>

<style scoped>
    .good{
        width: 48%;
        position: relative;
        padding-bottom: 40px;
    }
    .good img{
        width: 100%;
        border-radius: 10px;
    }
    .good-info {
        font-size: 12px;
        overflow: hidden;
        text-align: center;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .good-info p{
        white-space: nowrap;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 5px;
        margin-bottom: 2px;
    }
</style>