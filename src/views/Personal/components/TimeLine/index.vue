<template>
  <div class="content">
    <template v-for="item in TimeList">
      <el-timeline :key="item.name">
        <el-timeline-item :timestamp="item.time" placement="top">
          <el-card class="card">
            <h4>{{item.title}}</h4>
            <p class="card-p">{{item.content}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </template>
    <!-- 注释部分为自己封装的多级菜单组件 -->
    <!-- <amenu>
      <template v-for="(item, index) in list">
        <menu-item v-if="!item.children" :key="`menu_item_${index}`" class="menuItem">{{item.title}}</menu-item>
        <re-menu v-else :parent="item" :key="`menu_item_${index}`" :index="index"></re-menu>
      </template>
    </amenu> -->
  </div>
</template>

<script>
// import Menu from '@/components/Menu'
// import ReMenu from '@/components/Menu/ReMenu'
export default {
  data () {
    return {
      
    }
  },
  props: {
    TimeList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    // ...Menu,
    // ReMenu
  }
}
</script>

<style scoped>
  .card {
    padding: 10px 0
  }
  .card-p {
    margin-top: 20px;
    margin-left: 10px;
  }
</style>
