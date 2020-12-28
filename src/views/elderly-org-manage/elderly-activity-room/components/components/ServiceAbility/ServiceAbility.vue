<!--【服务能力】---服务能力-->
<template>
  <div>

    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">
      <el-divider content-position="left" class="divider-custom">服务能力</el-divider>
      <!-- 日均服务人次 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">日均服务人次：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="average_service_volume">
            <el-input v-if="this.isEditForm" v-model="form.average_service_volume" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.average_service_volume}}</span>
            <span style="margin-left: 5px;">人</span>
          </el-form-item>
        </div>
      </div>
      <!-- 日均服务人次 end -->

       <!-- 服务内容 start -->
      <el-divider content-position="left" class="divider-custom">服务内容</el-divider>
     <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          基本服务：
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom">
            <el-checkbox-group v-model="form.basic_services" style="margin-bottom:20px;">
              <el-checkbox style="width:240px;" label="文体活动" ></el-checkbox>
               <el-checkbox style="width:240px;" label="娱乐休闲" ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>

       <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          特色活动：
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom">
            <el-checkbox-group v-model="form.featured_activities" style="margin-bottom:20px;">
              <el-checkbox style="width:240px;" label="老年教育" ></el-checkbox>
              <el-checkbox style="width:240px;" label="情绪疏导" ></el-checkbox>
              <el-checkbox style="width:240px;" label="纠纷调解" ></el-checkbox>
              <el-checkbox style="width:240px;" label="政策法律咨询" ></el-checkbox>
              <el-checkbox style="width:240px;" label="为老便民服务" ></el-checkbox>
              <el-checkbox style="width:240px;" label="提供老年团体活动场所" ></el-checkbox>
              <el-checkbox style="width:90px;" label="其他" ></el-checkbox>
              <el-input v-if="form.featured_activities.includes('其他')" v-model="form.other_featured_activities" placeholder="请输入" clearable class="long-form-item" />
            </el-checkbox-group>

          </el-form-item>
        </div>
      </div>


     <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          专业服务：
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom">
            <el-checkbox-group v-model="form.professional_services" style="margin-bottom:20px;">
              <el-checkbox style="width:240px;" label="生活照料" ></el-checkbox>
              <el-checkbox style="width:240px;" label="医疗保健" ></el-checkbox>
              <el-checkbox style="width:240px;" label="康复辅助" ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 服务内容 end -->



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
        average_service_volume:'',// 日均服务量
        basic_services:[],//基本服务
        featured_activities:[],//特色活动
        other_featured_activities:'',//特色活动中其他
        professional_services:[],//专业服务

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
      if(val && val.length > 0){
        // 有照护等级的老人--重置
        if(!val.includes('1')){
          this.form.service_object.level_care_people = []
        }
        // 认知障碍老人--重置
        if(!val.includes('2')){
          this.form.service_object.cognitive_disorder_people = ''
        }
      }
    },
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
    childrenValidateForm () {
      let flag = null
      this.$refs['formRef'].validate((valid, object) => {
        console.log('【服务能力】---服务能力----', valid)
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
