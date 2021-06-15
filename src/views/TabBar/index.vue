<template>
  <div class="wrapper">
    <div class="wrapper-list">
        <li 
          v-for="(item,index) in tabBarList" 
          :key='index' 
          class="isActive"
          @click="handleTo(item)"
          >{{ item.title }}</li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabBarList: [
        {
          title: '首页',
          name:'homepage'
        },
        {
          title: '随笔',
          name: 'essay'
        },
        {
          title: '韶华追忆',
          name:'memories'
        },
        {
          title: '时间线',
          name: 'personal'
        }
      ]
    }
  },
  methods: {
    handleTo (item) {
      this.$router.replace({name: item.name})
    }
  }
}
</script>

<style scoped>
 .wrapper {
   width: 100%;
   background-color: #cecdb4;
 }

 .wrapper-list {
   width: 1200px;
   display: flex;
   align-items: center;
   height: 60px;
   background-color: #cecdb4;
 }

  .wrapper-list li {
    width: 150px;
    height: 100%;
    padding: 8px;
    text-align: center;
    font-size: 30px;
  }
  .wrapper-list li:hover {
    border-top: 3px solid coral;
    background-color: #fffbf0;
  }
</style>