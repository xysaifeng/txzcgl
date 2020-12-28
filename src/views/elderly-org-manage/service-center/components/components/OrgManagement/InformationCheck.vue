
<template>
  <div>
    <el-form
      ref="formRef"
      :model="form"
      :rules="this.isEditForm?rulesForm:null"
      label-width="150px"
    >
    <!-- 安全信息管理 -->
    <el-divider content-position="left" class="divider-custom">安全信息管理</el-divider>

    <div class="form-item-panel-custom" v-for="(items,index) in form.security_information_management" :key="items.name">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">{{items.name}}：</span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" :prop="'security_information_management.'+index+'.englishName'"  :rules="rulesForm.englishName">
            <el-radio-group
              v-model="items.englishName"
              class="radio-item-custom"
            >
              <el-radio label="0">有</el-radio>
              <el-radio label="1">无</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </div>
    <!-- 奖惩信息 -->
    <el-divider content-position="left" class="divider-custom">奖惩信息</el-divider>
    <!-- 日常检查 -->
    <el-divider content-position="left" class="divider-custom">日常检查</el-divider>
    </el-form>
  </div>
</template>

<script>
import areaStreetOptions from "@/assets/js/shanghai.js";
import rulesForm from "../../../js/org-management-rules-form.js";

export default {
  name: "InformationCheck",
  components: {},
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: "", //查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      form: {
        security_information_management:[
          {
            name: '有无喷水灭火系统',
            englishName:'sprinkler_system',
          },
          {
            name: '有无火灾自动报警系统',
            englishName:'fire_alarm_system',
          },
          {
            name: '有无消防器材',
            englishName:'fire_equipment',
          },
          {
            name: '有无安全生产管理员',
            englishName:'safety_administrator',
          },
          {
            name: '有无综合责任保险',
            englishName:'liability_insurance',
          },
        ]
      }
    };
  },
  created(){
    // 安全信息管理
    this.form.security_information_management.forEach((item)=>{
      item.englishName='';
    })
  },
  //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  mounted() {
    this.modelType = this.$route.query.modelType;
    if (this.modelType === "edit") {
      this.isEditForm = true;
    } else if (this.modelType === "add") {
      this.isEditForm = true;
    } else if (this.modelType === "look") {
      this.isEditForm = false;
    }
  },
  methods: {
     // 回显所有子组件的form字段
    echoAllChildrenForm(allForm){
      this.form = {...allForm}
      this.$nextTick(() => {
        this.$refs['formRef'].clearValidate()
      })
    },
    // 获取所有子组件的form字段
    getAllChildrenForm(){
      return this.form
    },
    // 子组件校验，传递到父组件
    childrenValidateForm() {
      let flag = null;
      this.$refs["formRef"].validate((valid, object) => {
        console.log("场所信息----子组件校验----", valid);
        if (valid) {
          flag = true;
        } else {
          flag = false;
        }
      });
      return flag;
    }
  }
};
</script>
