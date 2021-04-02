<template>
    <Layout>
        <Layout>
            <Sider>
                <Menu :active-name="activeName" class="meet-ui-menu">
                    <MenuGroup :title="item.title" v-for="item in list" :key="item.id">
                        <MenuItem :name="title.link" :to="title.link" v-for="title in item.list" :key="title.id">
                            <!-- <Icon type="md-document" /> -->
                            {{title.name}}
                        </MenuItem>
                    </MenuGroup>
                </Menu>
            </Sider>
            <Content>
                <nuxt-child />
            </Content>
        </Layout>
    </Layout>
</template>
<script>
export default {
    props:{
        activeName:{
            type:String,
            default: null
        },
        list: {
            type: Array,
            default: ()=>{
                return []
            }
        }
    }
}
</script>