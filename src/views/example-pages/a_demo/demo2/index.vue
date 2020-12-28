<!--  -->
<template>
  <div>
    <h1>三级菜单-2222222222</h1>
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
export default {
  name: 'Demo2',
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

