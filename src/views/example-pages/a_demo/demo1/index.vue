<!--  -->
<template>
  <div>
    <h1 v-permission="['admin']">三级菜单-11111111111111----admin</h1>
    <h1 v-permission="['editor']">三级菜单-11111111111111----editor</h1>
    <el-form ref="numberValidateForm" :model="numberValidateForm" label-width="100px" class="demo-ruleForm">
      <el-form-item
        label="年龄"
        prop="age"
      >
        <el-input v-model.number="numberValidateForm.age" type="age" autocomplete="off" />
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import permission from '@/directive/permission/index.js' // 权限判断指令
export default {
  name: 'Demo1',
  directives: { permission },
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

