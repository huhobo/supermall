<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="banner in banners">
            <a :href="banner.link">
                <img :src="banner.image" style="width: 100%">
            </a>
        </swiper-slide>
    </swiper>
</template>

<script>
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOptions: {
                    loop: true, // 循环模式选项
                    grabCursor : true,//指针变手掌
                    initialSlide :1,//初始化时显示第几张图片
                    speed:1000,
                    autoplay:{
                        disableOnInteraction:false,  //触摸、拖动后继续自动播放
                        delay:3000,
                    },
                    effect:"cube",//3D转换特效
                    cubeEffect:{
                        sideshslideShadows: true,
                        shadow: false,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    }
                }
            }
        },
        props:{
            banners:{
                type:Array
            }
        },
    }
</script>