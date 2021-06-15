<template>
  <div>
    <el-form ref="form" label-width="80px" :model="valueList" :rules="rule">
      <el-form-item 
        v-for="(item, i) in formList" 
        :key="`${_uid}_${i}`"
        :label="item.label"
        :rules="item.rule"
        :prop="item.name"
        >
        <component :is="item.type" 
              v-model="valueList[item.name]"
              :type="item.typType"
        >
          <template v-if="item.children">
            <component 
              v-for="(child, index) in item.children.list"
              :key="`${_uid}_${i}_${index}`"
              :is="item.children.type"
              :value="child.value"
              :label="child.label"
              >
            </component>
          </template>
        </component>
      </el-form-item>
      <el-button type="" @click="handleClick">重置</el-button>
      <el-button type="" @click="handlelick">dayin</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
     rule: {},
     initValueList: [],
     valueList: {}
    }
  },
  created () {
    this.setInitValue()
  },

  watch: {
    formList () {
      this.setInitValue ()
    }
  },
  methods: {
    setInitValue () {
      let rule= {}
      let valueList = {}   //from表单双向绑定的对象
      let initValueList = {}  //初始化的form表单数据
      this.formList.forEach(item => {
        rule[item.name] = item.rule
        valueList[item.name] = item.value
        initValueList[item.name] = item.value
      });
      this.rule = rule
      this.valueList = valueList
      this.initValueList = initValueList
    },
    handleClick () {
      // this.valueList = this.initValueList 
      // 这是错误的写法 因为当你把initValueList赋给valueList时候
      // 是一个浅拷贝，两个指向同一个地址，当你第二次填数据时候，数据会绑定在他们共同的内存地址中，
      // 所以在第二次使用重置功能的时候，重置功能会失效
      this.valueList = JSON.parse(JSON.stringify(this.initValueList))
    },
    handlelick () {
      console.log(this.valueList);
      console.log(this.initValueList,'11');
    }
  },
  props: {
    formList: {
      type: Array,
      default: () => []
    }
  }
}
</script>