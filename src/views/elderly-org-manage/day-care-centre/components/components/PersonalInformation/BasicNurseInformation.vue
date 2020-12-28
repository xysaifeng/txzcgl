<!-- 【人员信息】---人员基础信息 -->

<template>
  <div>
    <el-divider content-position="left" class="divider-custom">人员基础信息</el-divider>
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px" >

      <div style="display: flex;flex-wrap: wrap;border-bottom: 1px dashed #EDEDED;margin-bottom:15px;">
        <!-- 职工总数 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">职工总数：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="staff_number">
              <el-input v-if="this.isEditForm" v-model="form.staff_number" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.staff_number}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 职工总数 end -->

        <!-- 全职人数 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom"><span class="mandatory-start-custom">全职人数：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="full_time_number">
              <el-input v-if="this.isEditForm" v-model="form.full_time_number" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.full_time_number}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 全职人数 end -->

        <!-- 兼职人数 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">兼职人数：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="part_time_number">
              <el-input v-if="this.isEditForm" v-model="form.part_time_number" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.part_time_number}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 兼职人数 end -->
      </div>


      <div style="display: flex;flex-wrap: wrap;border-bottom: 1px dashed #EDEDED;margin-bottom:15px;">
        <!-- 管理人员 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">管理人员：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="manager">
              <el-input v-if="this.isEditForm" v-model="form.manager" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.manager}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 管理人员 end -->
      </div>

      <div style="display: flex;flex-wrap: wrap;border-bottom: 1px dashed #EDEDED;margin-bottom:15px;">
        <!-- 护理人员 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">护理人员：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="nurse" style="margin-bottom:15px;width: 240px;margin-right: 10px;">
              <span>{{form.nurse}}</span> 人
            </el-form-item>
          </div>
        </div>
        <!-- 护理人员 end -->

        <!-- 上岗证 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">上岗证：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="work_license">
              <el-input v-if="this.isEditForm" v-model="form.work_license" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.work_license}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 上岗证 end -->

        <!-- 初级护理人员 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">初级护理人员：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="primary_nurse">
              <el-input v-if="this.isEditForm" v-model="form.primary_nurse" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.primary_nurse}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 初级护理人员 end -->

        <!-- 中级护理人员 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">中级护理人员：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="middle_nurse">
              <el-input v-if="this.isEditForm" v-model="form.middle_nurse" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.middle_nurse}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 中级护理人员 end -->

        <!-- 高级护理人员 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">高级护理人员：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="advanced_nurse">
              <el-input v-if="this.isEditForm" v-model="form.advanced_nurse" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.advanced_nurse}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 高级护理人员 end -->

        <!-- 健康照护 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">健康照护：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="health_care">
              <el-input v-if="this.isEditForm" v-model="form.health_care" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.health_care}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 健康照护 end -->

        <!-- 医疗照护 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">医疗照护：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="medical_care">
              <el-input v-if="this.isEditForm" v-model="form.medical_care" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.medical_care}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 医疗照护 end -->
      </div>

      <div style="display: flex;flex-wrap: wrap;border-bottom: 1px dashed #EDEDED;margin-bottom:15px;">
        <!-- 社工 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">社工：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="social_worker">
              <el-input v-if="this.isEditForm" v-model="form.social_worker" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.social_worker}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 社工 end -->

        <!-- 康复师 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">康复师：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="therapist">
              <el-input v-if="this.isEditForm" v-model="form.therapist" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.therapist}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 康复师 end -->

        <!-- 营养师 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">营养师：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="dietician">
              <el-input v-if="this.isEditForm" v-model="form.dietician" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.dietician}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 营养师 end -->

        <!-- 心理咨询师 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">心理咨询师：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="psychological_counselor">
              <el-input v-if="this.isEditForm" v-model="form.psychological_counselor" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.psychological_counselor}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 心理咨询师 end -->
      </div>

      <div style="display: flex;flex-wrap: wrap;border-bottom: 1px dashed #EDEDED;margin-bottom:15px;">
        <!-- 后勤保障人员 start -->
        <div class="form-item-panel-custom" >
          <div class="form-item-title-custom" ><span class="mandatory-start-custom">后勤保障人员：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="support_staff">
              <el-input v-if="this.isEditForm" v-model="form.support_staff" placeholder="请输入" clearable class="long-form-item" />
              <span v-else>{{form.support_staff}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 后勤保障人员 end -->
      </div>

      <!-- 照护比 start -->
      <div class="form-item-panel-custom" >
        <div class="form-item-title-custom" >照护比：</div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="care_percent" style="margin-bottom:15px;">
            <span>{{form.care_percent}}</span>
            <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 0px;">
              <i class="el-icon-question el-icon-question-custom"></i>
              <div slot="content">照护比由全职人数比日均服务量计算自动生成</div>
            </el-tooltip>
          </el-form-item>
        </div>
      </div>
      <!-- 照护比 end -->


    </el-form>
  </div>
</template>

<script>
import areaStreetOptions from "@/assets/js/shanghai.js";
import rulesForm from "../../../js/personal-information-rules-form.js";

export default {
  name: "BasicNurseInformation",
  components: {},
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: "", //查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      form: {
        staff_number:'',// 职工总数
        full_time_number:'',//全职人数
        part_time_number:'',//兼职人数
        manager:'',//管理人员
        nurse:'0',//护理人员
        work_license:'',//上岗证
        primary_nurse:'',//初级护理人员
        middle_nurse:'',//中级护理人员
        advanced_nurse:'',//高级护理人员
        health_care:'',//健康照护
        medical_care:'',//医疗照护
        social_worker:'',//社工
        therapist:'',//康复师
        dietician:'',//营养师
        psychological_counselor:'',//心理咨询师
        support_staff:'',//后勤保障人员
        care_percent:'',//招照护比
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
        console.log('【人员信息】---公共事业费优惠---',valid)
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
