<!-- 权限管理-列表 -->
<template>
  <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <el-form-item
      label="权限"
      prop="age"
    >
      <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'AuthorityManage',
  data() {
    return {
      numberValidateForm: {
        age: ''
      }
    }
  },
  methods: {

  }
}
</script>

