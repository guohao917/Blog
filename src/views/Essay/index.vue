<template>
  <div>
    <div class="essay-header">
      <h2>随笔</h2>
      <div class="essat-d"></div>
      <button @click="handleBack">返回首页</button>
    </div>
    <essay-content
    v-for="(item,index) in essContent"
    :key="item.name"
    :essContent="essContent[index]"
    @handleMouseOver="handleMouseOver"
    @handleMouseOut="handleMouseOut"
    ></essay-content>
  </div>
</template>

<script>

import EssayContent from '@/components/EssayContent'

export default {
  components: {
    EssayContent
  },
  data() {
    return {
      essContent: [
        {
          createTime: '2020-6-7',
          content: '关山难过关关过，前路漫漫亦灿灿'
        },
        {
          createTime: '2020-6-4',
          content: '完成了时间线页面的组件二次封装，本想着用用自己去封装组件写，但是实在麻烦写得还不见的好看，还是用一下组件库吧'
        },
        {
          createTime: '2020-6-3',
          content: '完成登录页面的布局，还是很丑，设计不出来好看的样式布局。在公司进步变慢了，遇到了瓶颈',
        },
        {
          createTime: '2021-6-2',
          content: '完成项目登录认证和鉴权'
        },
        {
          createTime: '2021-6-1',
          content: '完成个人归档多级菜单组件封装。6.1又惹兰兰生气了，没有把兰兰当小孩'
        },
        {
          createTime: '2021-5-30',
          content: '随笔页面完成(后续功能待完善)'
        },
        {
          createTime: '2021-5-29',
          content: '随笔页面的布局写好了，还需要将模块独立出去，封装成单独的组件'
        },
        {
          createTime: '2021-5-28',
          content: '完成首页'
        },
        {
          createTime: '2021-5-27',
          content: '123'
        }
      ],
      currentIndex: '1'
    }
  },
  methods: {
    handleBack() {
      this.$router.replace({name: 'homepage'})
    },
    handleMouseOver (data) {
      data.classList.add('isActive')
    },
    handleMouseOut (data) {
      data.classList.remove('isActive')
    }
  }
}
</script>

<style scoped>
  .essay-header {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    padding: 10px;
    border-bottom: 5px solid #db6d4c;
  }

  .essat-d{
    flex: 1;
  }

</style>