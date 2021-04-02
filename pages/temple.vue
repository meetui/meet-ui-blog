<template>
    <left-menu :list="list" :activeName="activeName"></left-menu>
</template>
<script>
import LeftMenu from '@/components/leftMenu'
export default {
    components:{
        LeftMenu
    },
    data(){
        return{
            activeName: '/temple/hello',
            list:[]
        }
    },
    created(){
        try {
            this.list = this.$ConfigData.js;
        } catch (error) {}
    }
}
</script>