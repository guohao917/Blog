<template>
  <div>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2581633_an6grt1hjjm.css">
    <a-submenu @handleClick="handleClick">
      <div class="remenu" slot="title">{{ parent.title }}
          <span :class="[isActive ? 'transForm' : '']"><i class=""></i></span>
      </div>
      <template v-for="(item, i) in parent.children">
        <menu-item  v-if="!item.children" :key="`menu_item_${index}_${i}`" >{{item.title}}</menu-item>
        <re-menu v-else :key="`menu_item_${index}_${i}`" :parent="item"></re-menu>
      </template>
    </a-submenu>
  </div>
</template>

<script>
import Menu from '../../Menu'
const {ASubmenu, MenuItem} = Menu
export default {
  name: 'ReMenu',
  data () {
    return {
      isActive: true
    }
  },
  components: {
    ASubmenu,
    MenuItem
  },
  props: {
    parent: {
      type: Object,
      defalut: ()=> ({})
    },
    index: {
      type: [Number,String],
      defalut: ''
    }
  },
  methods: {
    handleClick() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>

  .transForm {
    display: inline-block;
    animation-name: trans;
    animation-duration: 1s;
    transform: rotateZ(180deg);
  }

  .remenu {
    margin-top: 10px;
  }
</style>