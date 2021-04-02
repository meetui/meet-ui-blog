<template>
    <header class="m-top-nav-main">
         <nuxt-link to="/" >
            <logo/>
            <span class="m-title-top">Meet-UI</span>
         </nuxt-link>
        <nav class="m-right-link">
            <div class="link-act" v-for="item in list" :key="item.id">
                <nuxt-link :to="item.link"  :class="num == item.id ? 'link-rot-act' :  'link-style'">{{item.name}}</nuxt-link>
            </div>
            <div class="link-act">
                <a href="https://github.com/meetui/meet-ui" target="_balck">Github</a>
            </div>
        </nav>
    </header>
</template>
<script>
import logo from '@/components/logo'
export default {
    components:{
        logo,
    },
    data(){
        return{
            num: null,
            list:[]
        }
    },
    created(){
       try {
           this.list =  this.$ConfigData.topNavData;
       } catch (error) {}
    },
    methods:{
        target(item){
            this.num = item.id;
        }
    }
}
</script>
<style scoped lang="less">
.m-top-nav-main{
    width: 100%;
    z-index: 10;
    position: fixed;
    padding: .7rem 6rem;
    line-height: 38px;
    height: 58px;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
    .m-title-top{
        font-size: 1.3rem;
        font-weight: 600;
        color: #2c3e50;
        position: relative;
    }
    .m-right-link{
        padding-left: 1.5rem;
        box-sizing: border-box;
        background-color: #fff;
        white-space: nowrap;
        font-size: .9rem;
        position: absolute;
        right: 6rem;
        top: .7rem;
        display: flex;
        .link-act{
            display: inline-block;
            margin-left: 1.5rem;
            line-height: 2rem;
            font-weight: 500;
            a{
                color: #2c3e50;
                position: relative;
            }
            .link-rot-act::after{
                content: '';
                position: absolute;
                height: 2px;
                background: #4fa6ff;
                width: 100%;
                left: 0;
                bottom: -10px;
            }
        }
    }
}
</style>