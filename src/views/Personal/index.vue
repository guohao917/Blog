<template>
  <div class="personal">
    <time-line :TimeList="TimeList"></time-line>
  </div>
</template>

<script>

import TimeLine from './components/TimeLine'
export default {
  components: {
    TimeLine
  },
  data () {
    return {
      TimeList: [
        {
          time: '2021-6-2',
          title: '321',
          content: '123',
          name: '4'
        },
        {
          time: '2021-6-2',
          title: '321',
          content: '123',
          name: '3'
        },
        {
          time: '2021-6-2',
          title: '321',
          content: '123',
          name: '2'
        },
        {
          time: '2021-6-2',
          title: '321',
          content: '123',
          name: '1'
        },
        {
          time: '2018-9-17',
          title: '第一次正式见面',
          content: `第一次的见面，就有人喝的醉醉呼呼，还是被我搀扶回去。
          当时第一次见面心里想着这娃儿怎么像个初中生，
          这哪个黑心人下得手啊，没想到最后我成了这个黑心人。`,
          name: '2'
        },
      ]
    }
  }
}
</script>

<style scoped>
  .personal {
    margin-top: 30px;
  }
</style>
