<template>
  <div>
    <template>
      <!--
      <app-link :to="home">
        <el-menu-item :class="{'submenu-title-noDropdown':!isNest}">
          <item :title="title" />
        </el-menu-item>
      </app-link>-->
      <app-link :to="home">
        <el-menu-item style="font-size: 20px;">
          <span><img :src="icon"></span>
          <item :title="title" />
        </el-menu-item>
      </app-link>
      <!--
      <el-divider></el-divider>
      -->
    </template>

  </div>
</template>

<script>
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SidebarItem',
  components: {
    Item,
    AppLink
  },
  mixins: [FixiOSBug],
  props: {
    // route object
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {
      home: '/home',
      title: '平台基础功能',
      icon: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  }
}
</script>

<style>
  img {
    width: 28px;
    height: 28px;
    margin-right: 5px;
    position: relative;
    left: -7px;
  }

  /*
  .el-divider--horizontal{
       margin: 4px 0;
       background: 0 0;
       border-top: 1px dashed #889AA4;
       border-bottom: 0;
   }*/
</style>
