<template>
    <div>
        <el-tree :data="menus" show-checkbox node-key="name" :props="defaultProps" ref="tree">
        </el-tree>
        <el-button @click="getCheckedNodes
        ">通过node获取</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menus: [],
            defaultProps: {
                label: 'name',
                children: 'children'
            }
        }
    },
    created() {
        //路由守卫
        this.menus = [...this.$router.options.routes]
        //权限管理和动态路由思路
        //根据不同的用户登录上来，返回对应的路由权限菜单
        //一般可以通过树型控件达到权限的精准控制，根据不同角色，勾选不同的菜单权限，将表单数据交给后端进行保存
        //后端保存后，在用户进行登录的时候就会查询该用户或该角色所拥有的表单数据，最终进行动态的渲染展示
        //动态路由使用router.addRouter进行动态路由添加
    },
    methods: {
        getCheckedNodes() {
            let arr = this.$refs.tree.getCheckedNodes()
            console.log(arr)
        }
    }
}
</script>