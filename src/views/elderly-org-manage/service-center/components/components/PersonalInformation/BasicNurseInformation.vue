<!--  人员基础信息-->
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">人员基础信息</el-divider>
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px" >

      <!-- 工作人员 start -->
      <div class="form-item-panel-custom" >
        <div class="form-item-title-custom" ><span class="mandatory-start-custom">职工总数：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="personnel">
            <el-input v-if="this.isEditForm" v-model="form.personnel" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.personnel}}</span>
            <span style="margin-right:5px;">人</span>
          </el-form-item>
        </div>
      </div>
      <!-- 工作人员 end -->

       <!-- 公务员 start -->
      <div class="form-item-panel-custom" >
        <div class="form-item-title-custom" ><span class="mandatory-start-custom">公务员：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="civil_servant">
            <el-input v-if="this.isEditForm" v-model="form.civil_servant" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.civil_servant}}</span>
            <span style="margin-right:5px;">人</span>
          </el-form-item>
        </div>
      </div>
      <!-- 公务员 end -->

       <!-- 事业编制人员 start -->
      <div class="form-item-panel-custom" >
        <div class="form-item-title-custom" ><span class="mandatory-start-custom">事业编制人员：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="establishment_personnel">
            <el-input v-if="this.isEditForm" v-model="form.establishment_personnel" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.establishment_personnel}}</span>
            <span style="margin-right:5px;">人</span>
          </el-form-item>
        </div>
      </div>
      <!-- 事业编制人员 end -->

       <!-- 退休返聘人员 start -->
      <div class="form-item-panel-custom" >
        <div class="form-item-title-custom" ><span class="mandatory-start-custom">退休返聘人员：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="retirement_recruitment">
            <el-input v-if="this.isEditForm" v-model="form.retirement_recruitment" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.retirement_recruitment}}</span>
            <span style="margin-right:5px;">人</span>
          </el-form-item>
        </div>
      </div>
      <!-- 退休返聘人员 end -->




    </el-form>
  </div>
</template>

<script>
import areaStreetOptions from "@/assets/js/shanghai.js";
import rulesForm from "../../../js/basic-nurse-information-rules-form.js";

export default {
  name: "BasicNurseInformation",
  components: {},
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: "", //查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      form: {
        personnel:"",//工作人员
        civil_servant:"",//公务员
        establishment_personnel:"",//事业编制人员
        retirement_recruitment:"",//退休返聘人员
      }
    };
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
