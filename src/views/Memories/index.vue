<template>
  <div>
    <form-list :formList="formList" />
  </div>
</template>

<script>

import formList from './formList.vue'

export default {
  components: {
    formList
  },
  data () {
    return {
      formList: [
        {
          type: 'el-input',
          label: '活动名称',
          name: 'active',
          value: '',
          rule: [
            { required: true, message: '这是必填的好吧', trigger: 'blur' }
          ]
        },
        {
          type: 'el-select',
          label: '活动区域',
          value: '',
          name: 'space',
          children: {
            type: 'el-option',
            list: [
              {
                value: 'shanghai',
                label: '上海'
              },
              {
                value: 'wuhan',
                label: '武汉'
              }
            ]
          }
        },
        {
          type: 'el-switch',
          value: '',
          label: "即时配送",
          name: 'waimai'
        },
        {
          type: 'el-checkbox-group',
          value: [],
          label: '活动性质',
          typType: '',
          name: 'xingz',
          children: {
            type: 'el-checkbox',
            list: [
              {
                label: "美食/餐厅线上活动",
              },
              {
                label: "地推活动",
              },
              {
                label: "线下主题活动",
              },
              {
                label: "单纯品牌曝光",
              }
            ]
          }
        },
        {
          type: 'el-input',
          value: '',
          label: '活动形式',
          typType: 'textarea',
          name: 'xingshi'
        }
        // {
        //   type: 'el-radio-group',
        //   value: '',
        //   children: {
        //     type: 'el-radio',
        //     list: [
        //       {
        //         value: '',
        //         label: '线上品牌商赞助'
        //       },
        //       {
        //         value: '',
        //         label: '12313'
        //       }
        //     ]
        //   }
        // }
      ]
    }
  }
}
</script>