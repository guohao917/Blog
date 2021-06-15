<template>
  <div class="content">
    <template v-for="item in TimeList">
      <el-timeline :key="item.name">
        <el-timeline-item :timestamp="item.time" placement="top" class="item">
          <el-card>
            <div><h4>{{item.title}}</h4></div>
            <div><p class="card-p">{{item.content}}</p></div>
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
  created () {
    console.log(this.TimeList);
    console.log(this.TimeJ);
    console.log(this.TimeO);
  },
  props: {
    TimeList: {
      type: Array,
      default: () => {}
    },
    // TimeO: {
    //   type: Object,
    //   default: () => {  真是错误的写法，默认的返回值拿不到，返回的是undefined
    //     name: 'GH1'
    //   }
    // },
    // TimeJ: {
    // type: Object,
    // default: () => ({
    //   name: 'GH2'
    // })
    // }
  },
  components: {
    // ...Menu,
    // ReMenu
  }
}
</script>

<style scoped>
  .card {
    display: flex !important;
    flex-direction:column-reverse;
    padding: 10px 0
  }
  .card-p {
    margin-top: 20px;
    margin-left: 10px;
  }
</style>
