<template>
  <div>
    <div @click="handleClick">
        <slot name="title">
        </slot>
    </div>
    <div class="asubmenu"  v-show="isShow">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    handleClick () {
      this.isShow =! this.isShow
      this.$emit('handleClick')
    }
  }
}
</script>

<style scoped>
.asubmenu {
  margin-left: 30px;
  margin-top: 5px
}

.asubmenu:hover {
}
</style>