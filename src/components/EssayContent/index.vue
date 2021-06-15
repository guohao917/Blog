<template>
  <div>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2581633_9z6no6rpub5.css">
    <div class="essay-content"
        @mouseenter="handleMouseOver"
        @mouseleave="handleMouseOut"
        ref="essayDiv">
      <span class="icon font-jisuanqi">{{this.essContent.createTime}}</span>
      <span><p>{{essContent.content}}</p></span>
      </div>
  </div>  
</template>


<script>
export default {
  name: 'EssayContent',
  data() {
    return {
      currentIndex: ''
    }
  },
  // computed: {
  //   contentIndex: function() {
  //     return this.contentIndex
  //   }
  // },
  props: {
    essContent: {
      type: Object,
      defalut: () => []
    }
  },
  methods: {
    handleMouseOver() {
      this.$emit('handleMouseOver', this.$refs.essayDiv)
    },
    handleMouseOut(essayDiv) {
      this.$emit('handleMouseOut',  this.$refs.essayDiv)
    }
  }
}
</script>

<style scoped>
  .essay-content {
    padding: 20px;
    height: 150px;
    background-color: #fafafa;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    margin-bottom: 20px;
  }

  .essay-content span {
    display: block;
    font-size: 20px;
  }

  .isActive {
    background-color: #f4f2f2;
  }
</style>