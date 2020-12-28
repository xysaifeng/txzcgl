<!--服务能力 服务类型-->
<template>
  <div>
    <el-form
      ref="formRef"
      :model="form"
      :rules="this.isEditForm?rulesForm:null"
      label-width="150px"
    >
      <!-- 服务能力 start -->
      <el-divider content-position="left" class="divider-custom">服务能力</el-divider>
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">日均服务量：</span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="service_volume">
            <el-input
              v-model="form.service_volume"
              placeholder="请输入"
              clearable
              class="long-form-item"
            />
            <span style="margin-right:5px;">人</span>
          </el-form-item>
        </div>
      </div>
      <!-- 服务能力 end -->
      <!-- 服务类型 start -->
      <el-divider content-position="left" class="divider-custom">服务类型</el-divider>

      <div
        class="form-item-panel-custom"
        v-for="(items) in form.service_type_options"
        :key="items.name"
      >
        <div class="form-item-title-custom">
          {{items.name}}：
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom">
            <el-checkbox-group v-model="items.check_options" style="margin-bottom:20px;">
              <el-checkbox style="width:240px;" v-for="(item) in items.options" :label="item" :key="item">{{item}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 其他服务 start -->

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
         其他服务：
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="other_service">
            <el-input style="width:600px;"
              v-model="form.other_service"
              placeholder="请填写"
              type="textarea"
              clearable
            />
          </el-form-item>
        </div>
      </div>
       <!-- 其他服务 end -->
      <!-- 服务类型 end -->
    </el-form>
  </div>
</template>

<script>
import rulesForm from "../../../js/service-ability-rules-form.js";
//engName取每个类型的字段，每个check_options传入后台
let options = [
  {
    name: "专业照护类",
    engName: "professional_care",
    options: ["短期托养服务", "日间照护服务"],
    check_options: []
  },{
    name: "社区长者食堂服务",
    engName: "",
    options: ["堂吃服务", "送餐服务"],
    check_options: []
  },{
    name: "医养结合类",
    engName: "",
    options: ["社区卫生服务", "护理站服务","提供专业康复训练的场所及设施"],
    check_options: []
  },{
    name: "健康促进类",
    engName: "",
    options: ["健康管理服务", "体养结合服务",""],
    check_options: []
  },{
    name: "智能服务类",
    engName: "",
    options: ["智慧养老平台", "智能产品展示","远程照护服务"],
    check_options: []
  },{
    name: "家庭支持类",
    engName: "",
    options: ["“喘息服务”", "设置适老化改造场景体验区","为本市康复辅助租赁/展示体验"],
    check_options: []
  },{
    name: "养老顾问类",
    engName: "",
    options: ["养老顾问"],
    check_options: []
  },{
    name: "精神文化类",
    engName: "",
    options: ["文化活动服务", "老年学校服务","心理咨询服务"],
    check_options: []
  },{
    name: "个性服务功能设置",
    engName: "",
    options: ["老年认知障碍社区干预服务", "家庭生活服务","老年优待服务","法律咨询与维权服务","老年社会参与服务","慈善超市"],
    check_options: []
  }
];
export default {
  name: "ServiceAbilityType",
  components: {},
  data() {
    return {
      isUpdate: false,
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: "", //查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则

      form: {
        service_volume: "", //服务量
        service_type_options: options,
        other_service:""
        // professional_care: []
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

