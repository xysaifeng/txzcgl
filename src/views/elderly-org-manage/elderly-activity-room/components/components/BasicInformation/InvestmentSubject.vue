<!--【基础信息】---投资主体及投入情况-->
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">投资主体及投入情况
      <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 0px;">
        <i class="el-icon-question el-icon-question-custom"></i>
        <div slot="content">投资主体：指对该场所享有所有权或者支配权的主体</div>
      </el-tooltip>
    </el-divider>
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">

      <!-- 投资主体名称 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">投资主体名称：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="investment_subject_name">
            <el-input v-if="this.isEditForm" v-model="form.investment_subject_name" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.investment_subject_name}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 投资主体名称 end -->

      <!-- 投资主体性质 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">投资主体性质：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="investment_subject_nature">
            <el-radio-group v-if="this.isEditForm" v-model="form.investment_subject_nature" class="radio-item-custom" @change="handelChange_investment_subject_nature">
              <el-radio label="0">政府</el-radio>
              <el-radio label="1">企业</el-radio>
              <el-radio label="2">社会组织</el-radio>
              <el-radio label="3">个体</el-radio>
            </el-radio-group>
            <span v-else>{{form.investment_subject_nature}}</span>
          </el-form-item>
          <el-form-item v-if="this.form.investment_subject_nature === '1'" class="form-item-custom" prop="investment_subject_nature" style="margin-left:30px;">
            <el-select v-if="this.isEditForm" v-model="form.investment_subject_nature_qiye" placeholder="请选择" clearable class="short-form-item">
              <el-option label="重建" value="0" />
              <el-option label="改造" value="1" />
              <el-option label="装修" value="2" />
            </el-select>
            <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 0px;">
              <i class="el-icon-question el-icon-question-custom"></i>
              <div slot="content">注释：国企含央企、地方国企、部分村集体；<br/>民企含村办企业。</div>
            </el-tooltip>
          </el-form-item>
        </div>
      </div>
      <!-- 投资主体性质 end -->

      <!-- 投资方投资金额 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">投资方投资金额：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="investment_money">
            <el-input v-if="this.isEditForm" v-model="form.investment_money" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.investment_money}}</span>
            <span style="margin-left:5px;">万元</span>
          </el-form-item>
        </div>
      </div>
      <!-- 投资方投资金额 end -->
      <!-- 机构信息 start -->
    <el-divider content-position="left" class="divider-custom">机构信息</el-divider>
     <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">运营模式：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="operation_mode">
            <el-select v-if="this.isEditForm" v-model="form.operation_mode" placeholder="请选择" clearable class="long-form-item">
              <el-option label="由街镇、居村直接运营管理" value="0" />
              <el-option label="由街镇、居村牵头，组织招募社区志愿者运营管理" value="1" />
              <el-option label="委托老年协会等老年人组织进行运营管理" value="2" />
               <el-option label="委托专业社会服务机构进行运营管理" value="3" />
            </el-select>
            <span v-else>{{form.operation_mode}}</span>
          </el-form-item>
        </div>
      </div>
     <!-- 机构信息 end -->

     <el-divider content-position="left" class="divider-custom">服务质量</el-divider>
    </el-form>
  </div>
</template>

<script>
import rulesForm from '../../../js/basic-information-rules-form.js'

export default {
  name: 'InvestmentSubject',
  components: {

	},
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: '',//查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      form:{
        investment_subject_name: '',// 投资主体名称
        investment_subject_nature: '', // 投资主体性质
        investment_subject_nature_qiye: '', // 投资主体性质---企业下拉选项
        investment_money:'',//投资方投资金额
        operation_mode:'',//运营模式
    }
    }
  },
  //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  mounted() {
    this.modelType = this.$route.query.modelType;
    if (this.modelType === 'edit') {
      this.isEditForm = true;
    }
    else if (this.modelType === 'add') {
      this.isEditForm = true;
    }
    else if (this.modelType === 'look') {
      this.isEditForm = false;
    }
  },
  methods: {
    // 投资主体性质 change事件
    handelChange_investment_subject_nature(val) {
      this.form.investment_subject_nature_qiye = ''
      this.$emit('watchOperatingModel', val) // 把选中的值传给父组件
    },

    // 回显所有子组件的form字段
    echoAllChildrenForm(allForm){
      this.$refs['formRef'].clearValidate('capital_source_money.checked')
      this.form = {...allForm}
      console.log('this.form.capital_source_money===',this.form.capital_source_money)
      this.$nextTick(() => {
        this.$refs['formRef'].clearValidate()
      })
    },
    // 获取所有子组件的form字段
    getAllChildrenForm(){
      return this.form
    },
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag = null
      this.$refs['formRef'].validate((valid, object) => {
        console.log('【基础信息】---[投资主体及投入情况]---',valid)
        if (valid) {
          flag = true
        } else {
          flag = false
        }
      })
      return flag
    },
  }
}
</script>
