<template>
  <div class="content">
    <div class="header">
      <div class="header-title">
        <div class="header-title-content">
          <i>Home</i>
          <i>丨</i>
          <i>关于我们</i>
          <span v-if="isShow">
            <i>丨</i>
            <button><i @click="exitLogin">退出登录</i></button>
          </span>
        </div>
      </div>
      <div class="content-bgc">
        11111111
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  methods: {
    exitLogin() {
      location.reload()
      window.sessionStorage.removeItem('TOKEN')
      window.sessionStorage.removeItem('HAS_LOGIN')
      this.$router.push({
        name: 'login'
      })
    }
  },
  data () {
    return {
      isShow :this.LOGIN_SHOW
    }
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    background-color: #f3f3f3;
  }
  .header-title {
    width: 1200px;
    padding: 10px;
    color: darkgrey;
    font-size: 16px;
    height: 40px;
    border-bottom: 1px solid darkgrey;
  }
  .header-title-content {
    float: right;
  }

  .content-bgc {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 40px;
    /* background-image: url('../../assets/img/titile-bgc.png'); */
  }
</style>