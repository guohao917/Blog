<template>
  <div>
    <div class="homepage">
      <div class="homepage-image">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in imageList" :key="item.id">
            <img :src = item.imgSrc alt="" width="500px" height="300px">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="homepage-title">
          <span>
            <h3>关于博主：</h3>
            <p>
              个人资料：女,00后,法语专业。外号：柚子。
            </p>
            <p>喜好：西瓜，草莓，韩剧，综艺。</p>
            <p>梦想：发财,躺着赚钱</p>
            </span>
          <span><h3>关于柚子xx:</h3>
            <p>
              是一个项目的练手，也是一次自检
            </p>
          </span>
      </div>
    </div>
    <div class="homepage-span">
      <span>最新文章</span><span>韶华追忆({{this.chatContent.length}})</span>
    </div>
    <chatTalk
    :class= "{isActive: currentIndex === index}" 
    v-for="(item, index) 
    in chatContent" 
    :key="index" 
    :chatContent = chatContent[index]
    @handleDetails="handleDetails(item.type)"
    @handleMouseOver="handleMouseOver(index)"
    @handleMouseOut="handleMouseOut(index)"></chatTalk>
    <detail 
    @handleClose="handleClose"
    v-show="isShow"
    class="letter" 
    :ForWho="forWho"></detail>
  </div>
</template>

<script>

import ChatTalk from '@/components/ChatTalk'
import Detail from '../Detail'

export default {
  
  components: {
    ChatTalk, 
    Detail
  },

  data () {
    return {
      chatContent : [{
        imgUrl: 'book.jpg',
        title: '给嘟嘟的一封信',
        content: '这是给嘟嘟的一封信',
        Titletype: '韶华追忆',
        creatTime: '2021-5-31 14:34:31',
        type: 'dudu'
      },
      {
        imgUrl: 'kobe.jpg',
        title: '给kobe的一封信',
        content: '这是给kobe的一封信',
        Titletype: '韶华追忆',
        creatTime: '2021-4-31 10:34:31',
        type: 'kobe'
      },
      {
        imgUrl: 'book.jpg',
        title: '给兰子的一封信',
        content: '这是给兰子的一封信',
        Titletype: '韶华追忆',
        creatTime: '2021-6-1 00:00:00',
        type: 'lanzi5.1'
      }
      ],
      content: {
       type: 'pop',
       page: 1
      },
      imageList: [
        {
          id: 1,
          imgSrc: require("@/assets/img/1.png")
        },
        {
          id: 2,
          imgSrc: require("@/assets/img/2.png")
        },
        {
          id: 3,
          imgSrc: require("@/assets/img/3.png")
        }
      ],
      currentIndex: '',
      forWho: '',
      isShow: false
    }
  },

  created () {},
  mouted () {},
  methods: {
    handleDetails(val) {
      this.forWho = val
      this.isShow =! this.isShow
    },
    handleMouseOver(index) {
      this.currentIndex = index
    },
    handleMouseOut(index) {
      this.currentIndex = ''
    },
    handleClose() {
      console.log(22);
      this.isShow =! this.isShow
    }
  },
}
</script>

<style scoped>
  .homepage {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  .homepage-image {
    width: 500px;
  }

  .homepage-title span {
    padding: 20px;
    width: 500px;
    height: 100%;
    background-color: #fffff7;
  }
   .homepage-title span:last-child {
     background-color: #fafcfd;
   }

  .homepage-title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    width: 500px;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .homepage-span {
    display: flex;
    flex: 1;
    margin-top: 10px;
    padding: 10px;
    border-bottom: 5px solid #db6d4c;
  }

  .isActive {
    background-color: #fafcfd;
  }

  .letter {
    width: 1000px;
    height: 1000px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -500px;
    margin-left: -500px;
    background-color: pink;
    z-index: 99;
  }
</style>