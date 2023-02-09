<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>
          <Breadcrumb />
          <!-- 绑定路由出口(router-view)每个列表的内容就会变化 -->
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './common/Header.vue';
import Footer from './common/Footer.vue';
import Menu from './common/Menu.vue';
import Breadcrumb from './common/Breadcrumb.vue';
export default {
  components: {
    Header,
    Footer,
    Menu,
    Breadcrumb
  },
  data() {
    return {

    }
  }
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}

.content {
  position: absolute;
  width: 100%;
  top: 69px;
  bottom: 0;
}

.cont {
  margin: 20px 0;
}
</style>