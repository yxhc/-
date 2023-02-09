<template>
    <div>
        <el-header>
            <div class="title">通用管理系统</div>
            <div>{{ name }}</div>
        </el-header>
    </div>
</template>
<script>
import { getToken } from '@/utils/setToken';
export default {
    data() {
        return {
            name: ''
        }
    },
    created() {
        this.name = getToken('username')
    }

}
</script>
<style lang="scss">
.el-header {
    background: #409eff;
    color: #fff;
    line-height: 60px;
    display: flex;
    justify-content: space-between;

    .title {
        width: 200px;
        font-size: 24px;
    }
}
</style>