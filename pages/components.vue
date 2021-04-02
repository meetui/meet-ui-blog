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
            activeName: '/components/hello',
            list:[]
        }
    },
    created(){
        try {
            this.list = this.$ConfigData.componts;
        } catch (error) {}
    }
}
</script>