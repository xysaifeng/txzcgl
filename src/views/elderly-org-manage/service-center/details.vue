<!-- 综合为老服务中心-详情 -->
<template>
  <el-container>
     <!-- 自动吸顶的头部 -->
    <el-header class="sticky-header-wrap-custom">
      <sticky :z-index="5" :sticky-top="100" class="sticky-fixed-custom">
        <div class="header-btn-wrap-custom">
          <div class="header-btn-left-custom">
            <el-button type="primary" class="giogiogio" @click="handelClickGoBack">{{tabsPanelCustomActiveValue === 1 ? '返回' : '取消'}}</el-button>
          </div>
          <div class="header-btn-right-custom">
            <el-button type="primary" class="reset-btn-custom" plain v-show="tabsPanelCustomActiveValue !== 1" :disabled="btnStatus.prevStepDisabled || tabsPanelCustomActiveValue === 1" @click="handelClickPreStep">上一步</el-button>
            <!-- <el-tooltip v-if="this.modelType !== 'look'" class="item" effect="dark" placement="bottom">
              <el-button type="primary" class="reset-btn-custom" plain v-show="tabsPanelCustomActiveValue !== 6" :disabled="btnStatus.nextStepDisabled || tabsPanelCustomActiveValue === 6" @click="handelClickNextStep">下一步</el-button>
              <div slot="content">提示：当前页必填项全部填写<br>完成，方可进行下一步。</div>
            </el-tooltip>
            <div v-else>
              <el-button type="primary" class="reset-btn-custom" plain v-show="tabsPanelCustomActiveValue !== 6" :disabled="btnStatus.nextStepDisabled || tabsPanelCustomActiveValue === 6" @click="handelClickNextStep">下一步</el-button>
            </div> -->
            <el-button type="primary" class="reset-btn-custom" plain v-show="tabsPanelCustomActiveValue !== 6" :disabled="btnStatus.nextStepDisabled || tabsPanelCustomActiveValue === 6" @click="handelClickNextStep">下一步</el-button>
            <el-button type="primary" v-show="this.modelType !== 'look' && tabsPanelCustomActiveValue === 6" :disabled="btnStatus.submitDisabled" @click="handelClickNextStep">提交</el-button>
          </div>
        </div>
      </sticky>
    </el-header>
    <el-main class="el-main-custom nopadding-custom">
      <!-- 自定义tabs切换组件 -->
      <tabs-panel-custom :activeValue="tabsPanelCustomActiveValue" :panelItem="tabsPanelCustomItem" ></tabs-panel-custom>
      <!-- 基础信息 -->
      <basic-information ref="basicInformation" v-show="tabsPanelCustomActiveValue === 1"></basic-information>
      <!-- 服务能力 -->
      <service-ability ref="serviceAbility" v-show="tabsPanelCustomActiveValue === 2"></service-ability>
      <!-- 政策保障 -->
      <policy-guarantee ref="policyGuarantee" v-show="tabsPanelCustomActiveValue === 3"></policy-guarantee>
      <!-- 机构管理 -->
      <org-management ref="orgManagement"  v-show="tabsPanelCustomActiveValue === 4"></org-management>
      <!-- 人员信息 -->
      <personal-information ref="personalInformation" v-show="tabsPanelCustomActiveValue === 5"></personal-information>


       <el-backtop title="返回顶部"></el-backtop>
    </el-main>
  </el-container>
</template>

<script>
import {closeSelectedTag} from "@/utils/rooterJump"
import TabsPanelCustom from '@/components/TabsPanelCustom'
import BasicInformation from './components/BasicInformation'
import ServiceAbility from './components/ServiceAbility'
import PolicyGuarantee from './components/PolicyGuarantee'
import OrgManagement from './components/OrgManagement'
import PersonalInformation from './components/PersonalInformation'
import Sticky from '@/components/Sticky'
import {mapGetters} from 'vuex'

export default {
  name: 'ServiceCenterDetails',
  components: {
    TabsPanelCustom,
    BasicInformation,
    ServiceAbility,
    PolicyGuarantee,
    OrgManagement,
    PersonalInformation,
     Sticky
	},
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: "", //查看：look  编辑：edit  新增：add
      allForm:{},// 日间照护中心 的 全部form字段
      // 按钮状态控制
      btnStatus: {
        submitDisabled: false, // 提交
        prevStepDisabled: false , // 上一步
        nextStepDisabled: false , // 下一步
      },
      // 自定义tabs panel选项卡 数组
      tabsPanelCustomItem: [
        { 'label': '基础信息', 'value': 1 },
        { 'label': '服务能力', 'value': 2 },
        { 'label': '政策保障', 'value': 3 },
        { 'label': '机构管理', 'value': 4 },
        { 'label': '人员信息', 'value': 5 }
      ],
      tabsPanelCustomActiveValue: 1, // 自定义tabs panel选项卡绑定值
    }
  },
   mounted() {
    this.modelType = this.$route.query.modelType;
    if (this.modelType === "edit") {
      this.isEditForm = true;
      // 模拟接口，将数据从localStore中取出，并回显

      // 如果有数据，则将数据回显到页面
      if(_getForm_ !== null){
        this.echoAllChildrenForm(_getForm_)
      }
    }
    else if (this.modelType === "add") {
      this.isEditForm = true;
    }
    else if (this.modelType === "look") {
      this.isEditForm = false;
    }
  },
  methods: {
    //取消，返回按钮，关闭详情页
    closeDetailsPage() {
      closeSelectedTag(this, this.$route);
      this.$router.push({path: '/service-center/index'})
    },
    // 返回
    handelClickGoBack() {
      let action = ''
      if (this.modelType === 'look') {
        this.closeDetailsPage()
      }
      else{
        if (this.modelType === 'edit') {
          action = '编辑'
        }
        else if (this.modelType === 'add') {
          action = '新增'
        }
        this.$confirm(`当前${action}机构信息尚未保存，确定取消${action}操作吗？`, `取消${action}任务`, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          lockScroll:false,//是否在 MessageBox 出现时将 body 滚动锁定
          closeOnClickModal:false,//是否可通过点击遮罩关闭 MessageBox
          closeOnPressEscape:false,//是否可通过按下 ESC 键关闭 MessageBox
          type: 'warning'
        }).then(() => {
          this.closeDetailsPage()
          this.$message({
            type: 'success',
            message: `已取消${action}机构`
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
      }
    },
    // 上一步
    handelClickPreStep() {
      this.tabsPanelCustomActiveValue--
      window.scroll(0,0)
    },
     // 下一步
    handelClickNextStep() {
      window.scroll(0,0)
      if (this.modelType === 'look') {
        this.tabsPanelCustomActiveValue++
      }
      else{
        let thisValidateForm = false // 当前步骤的表单是否验证通过
        // 第几步拿第几个面板的form验证
        switch(this.tabsPanelCustomActiveValue){
          case 1:
            thisValidateForm = this.$refs.basicInformation.childrenValidateForm()
            break;
          case 2:
            thisValidateForm = this.$refs.serviceAbility.childrenValidateForm()
            break;
          case 3:
            thisValidateForm = this.$refs.policyGuarantee.childrenValidateForm()
            break;
          case 4:
            thisValidateForm = this.$refs.orgManagement.childrenValidateForm()
            break;
          case 5:
            thisValidateForm = this.$refs.personalInformation.childrenValidateForm()
            break;
        }
        console.log('第'+this.tabsPanelCustomActiveValue+'个面板的表单验证结果=',thisValidateForm)
        // 当前面板校验通过，成功进入下一步骤
        if(thisValidateForm){
          this.tabsPanelCustomActiveValue++
        }
        // 否则
        else{
          this.$message({
            type: 'error',
            message: '表单验证失败，请填写必填项！'
          })
        }
      }
    },

     // 回显所有子组件的form字段
    echoAllChildrenForm(allForm){
      this.$refs.basicInformation.echoAllChildrenForm(allForm)
      this.$refs.serviceAbility.echoAllChildrenForm(allForm)
      this.$refs.policyGuarantee.echoAllChildrenForm(allForm)
      this.$refs.orgManagement.echoAllChildrenForm(allForm)
      this.$refs.personalInformation.echoAllChildrenForm(allForm)
    },
    // 获取所有子组件的form字段
    getAllChildrenForm(){
      let form1 = this.$refs.basicInformation.getAllChildrenForm()
      let form2 = this.$refs.serviceAbility.getAllChildrenForm()
      let form3 = this.$refs.policyGuarantee.getAllChildrenForm()
      let form4 = this.$refs.orgManagement.getAllChildrenForm()
      let form5 = this.$refs.personalInformation.getAllChildrenForm()
      return {...form1,...form2,...form3,...form4,...form5}
    },

  }
}
</script>



