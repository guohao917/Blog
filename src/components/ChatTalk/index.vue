<template>
  <div class="chat">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2581633_an6grt1hjjm.css">
    <div class="chat-img">
      <img :src="imgUrlList" alt="" width="450px" height="300px">
    </div>
    <div class="chat-content" 
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut">
      <h3>{{this.chatContent.title}}</h3>
      <p>{{this.chatContent.content}}</p>
      <button @click="handleDetails">[详情]</button>
      <div class="chat-content-icon">
        <span class="icon font-bianqian">{{this.chatContent.Titletype}}</span>
        <span class="icon font-shijian">{{this.chatContent.creatTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatTalk',
  computed: {
    imgUrlList:function() {
      return require(`@/assets/img/${this.chatContent.imgUrl}`)
    } 
  },
  data() {
    return {
    }
  },

  methods: {
    handleDetails() {
      this.$emit('handleDetails');
    },
    handleMouseOver() {
      this.$emit('handleMouseOver')
    },
    handleMouseOut() {
      this.$emit('handleMouseOut')
    }
  },

  props: {
    chatContent: {
      type: Object,
      defalut:() => {}
    }
  }
}
</script>

<style scoped>
.chat {
  display: flex;
  justify-content: space-between;
  padding: 30px 0 30px;
  border-bottom: 3px solid #bfab86;
}

.chat-content {
  width: 500px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.chat-img {
  margin-right: 50px;
}

.chat-content-icon {
  position: absolute;
  margin-top: 200px;
}


.chat-content-icon span {
  font-size: 20px;
}

.chat-content-icon span:last-child {
  margin-left: 30px;
}
</style>