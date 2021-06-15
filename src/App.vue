<template>
  <div id="app">
    <div>
      <header-title />
      <tabBar v-if="isShow" />
      <div class="content-router">
        <router-view/>
      </div>
    </div>
    <div class="login">
      <router-view name="login" />
    </div>
  </div>
</template>

<script>

import  HeaderTitle from '@/views/HeaderTitle'
import  TabBar from '@/views/TabBar'

export default {
  computed: {
    isShow () {
      return window.sessionStorage.getItem('HAS_LOGIN')
    }
  },
  components: {
    HeaderTitle,
    TabBar,
  }
}
</script>

<style>
  #app {
    background-color: #fffbf0;
  }

  .content-router {
    width: 800px;
  }
</style>
