<template>
  <div class="conetent">
    <div class="conetnt-input">
      <div class="input-first">
        <input type="text" v-model="userInfo" placeholder="账号">
      </div>
      <div class="input-second">
        <input type="password" v-model="userPas" placeholder="密码">
      </div>
      <div class="content-button">
        <button class="first" @click="handleLogin">登录</button>
        <button class="second" @click="handleIn">我是游客</button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {

  data () {
    return {
      userInfo: '',
      userPas: '',
    }
  },
  computed: {
    ...mapState ({
      user: state => state.userInfo.user,
      password: state => state.userInfo.password,
      adminToken: state => state.userInfo.token,
      yuokeToken: state => state.youke.token,
      HAS_LOGIN: state => state.HAS_LOGIN
    }),
  },
  methods: {
    ...mapMutations([
      'SET_HAS_LOGIN'
    ]),
    handleLogin() {
      location.reload()
      if (this.userInfo && this.userPas) {
        if (this.userInfo === this.user && this.userPas === this.userPas) {
          this.SET_HAS_LOGIN (true)
          window.sessionStorage.setItem('HAS_LOGIN', this.HAS_LOGIN)
          window.sessionStorage.setItem('TOKEN', this.adminToken)
          this.$router.push({
            name: 'homepage'
          })
        }
          else alert("账号或者密码错误")
      }
      else alert('输入账号或密码')
    },
    handleIn() {
      location.reload()
      this.SET_HAS_LOGIN (true)
      window.sessionStorage.setItem('HAS_LOGIN',this.HAS_LOGIN,)
      window.sessionStorage.setItem('TOKEN',this.yuokeToken,)
      this.$router.push({
        name: 'homepage'
      })
    }
  }
}
</script>

<style scoped>
  .content {
    position: relative;
  }

  .conetnt-input {
    padding: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    background-color: rgb(220, 225, 226);
  }

  .input-second {
    margin-top: 30px;
  }

  .content-button {
    margin-left: 100px;
    margin-top: 30px;
  }

  .second {
    margin-left: 30px;
  }
</style>