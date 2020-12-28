<!--【服务能力】---服务能力-->
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">服务能力</el-divider>
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">

      <!-- 成员数 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">成员数：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="day_care_seat">
            <el-input v-if="this.isEditForm" v-model="form.day_care_seat" placeholder="请输入成员数" clearable class="long-form-item" />
            <span v-else>{{form.day_care_seat}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 成员数 end -->

      <!-- 活动频次 start -->
      <div class="form-item-panel-custom">
              <div class="form-item-title-custom"><span class="mandatory-start-custom">活动频次：</span></div>
              <div class="form-item-wrap-custom">
                <el-form-item class="form-item-custom" prop="name_todo_times">
                        <el-select v-if="this.isEditForm" v-model="form.name_todo_times" placeholder="请选择活动频次" clearable class="long-form-item">
                          <el-option label="请选择(默认项)" value="0" />
                          <el-option label="1次/周" value="1" />
                          <el-option label="2次/周" value="2" />
                          <el-option label="3次/周" value="3" />
                          <el-option label="4次/周" value="4" />
                          <el-option label="5次/周" value="5" />
                          <el-option label="6次/周" value="6" />
                          <el-option label="7次以及以上/周" value="7" />
                        </el-select>
                        <span v-else>{{form.name_todo_times}}</span>
                </el-form-item>
              </div>
      </div>
      <!-- 活动频次 end -->





    </el-form>
  </div>
</template>

<script>
import rulesForm from '../../../js/service-ability-rules-form.js'

export default {
  name: 'ServiceAbility',
  components: {

	},
  data() {
    return {
      isUpdate:false,
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: '',//查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      form:{
        day_care_seat: '',// 成员数
        name_todo_times:'0',//活动频次
        service_contract_number:'',// 签约服务人数
        average_service_volume:'',// 日均服务量
        is_long_nursing_risks_org:'',//是否长护险定点机构
        // 服务对象
        service_object:{
          checked:[], // 服务对象
          level_care_people:[],// 有照护等级的老人
          cognitive_disorder_people:'',// 认知障碍老人
        },
        service_range:'',// 服务范围
        is_resident_population:'',// 是否收住前项范围内的常驻人口
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
    // 服务对象（多选）change 事件
    handelChange_service_object(val) {
      // 有照护等级的老人--重置
      if(!val.includes('1')){
        this.form.service_object.level_care_people = []
      }
      // 认知障碍老人--重置
      if(!val.includes('2')){
        this.form.service_object.cognitive_disorder_people = ''
      }
    },
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag = null
      this.$refs['formRef'].validate((valid, object) => {
        console.log('场所信息----子组件校验----', valid)
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
