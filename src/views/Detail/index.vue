<template>
  <div class="letter">
    <div class="handleClose"><button @click="handleClose">关闭</button></div>
    <div class="kobe" v-if="this.ForWho === 'kobe'">
      这是给科比的信
    </div>
    <div class="lanzi" v-else-if="this.ForWho === 'lanzi5.1'">
         
    </div>
    <div class="dudu" v-else-if="this.ForWho === 'dudu'">
      这是给王先生的信
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ForWho: {
      type: String,
      default: '1'
    }
  },
  methods: {
    handleClose () {
      this.$emit('handleClose')
    }
   }
}
</script>

<style scoped>
.letter {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/love.jpg");
}

.lanzi {
  font-size: 30px;
  font-family:cursive;
}

.handleClose button{
  position: absolute;
  top: 0px;
  right: 0px;
  color: red;
}
</style>