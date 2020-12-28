<!-- 老年助餐服务场所-详情 -->
<template>
  <el-container>
    <el-header>
      <div class="header-btn-wrap-custom">
        <div class="header-btn-left-custom">
          <el-button type="primary" @click="handelClickGoBack">{{tabsPanelCustomActiveValue === 1 ? '返回' : '取消'}}</el-button>
        </div>
        <div class="header-btn-right-custom">
          <el-button type="primary" :disabled="btnStatus.stagingDisabled">暂存</el-button>
          <el-button type="primary" class="reset-btn-custom" plain v-show="tabsPanelCustomActiveValue !== 1" :disabled="tabsPanelCustomActiveValue === 1" @click="handelClickPreStep">上一步</el-button>
          <el-button type="primary" class="reset-btn-custom" plain v-show="tabsPanelCustomActiveValue !== 6" :disabled="tabsPanelCustomActiveValue === 6" @click="handelClickNextStep">下一步</el-button>
          <el-button type="primary" v-show="tabsPanelCustomActiveValue === 6" :disabled="btnStatus.submitDisabled">提交</el-button>
        </div>
      </div>
    </el-header>
    <el-main>
      <!-- 自定义tabs切换组件 -->
      <tabs-panel-custom :activeValue="tabsPanelCustomActiveValue" :panelItem="tabsPanelCustomItem" @tabsPanelClick="handelTabsPanelClick"></tabs-panel-custom>
      <!-- 基础信息 -->
      <basic-information ref="basicInformation" v-show="tabsPanelCustomActiveValue === 1"></basic-information>
      <!-- 服务能力 -->
      <service-ability ref="serviceAbility" v-show="tabsPanelCustomActiveValue === 2"></service-ability>
      <!-- 政策保障 -->
      <policy-guarantee v-show="tabsPanelCustomActiveValue === 3"></policy-guarantee>
      <!-- 机构管理 -->
      <org-management v-show="tabsPanelCustomActiveValue === 4"></org-management>
      <!-- 机构运营 -->
      <org-operation v-show="tabsPanelCustomActiveValue === 5"></org-operation>
      <!-- 人员信息 -->
      <personal-information v-show="tabsPanelCustomActiveValue === 6"></personal-information>

      <el-button type="primary" @click="handelTestSubmitBtn">测试提交按钮</el-button>
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
import OrgOperation from './components/OrgOperation'
import PersonalInformation from './components/PersonalInformation'

export default {
  name: 'HelpMealsDetails',
  components: {
    TabsPanelCustom,
    BasicInformation,
    ServiceAbility,
    PolicyGuarantee,
    OrgManagement,
    OrgOperation,
    PersonalInformation
	},
  data() {
    return {
      // 按钮状态控制
      btnStatus: {
        stagingDisabled: true, // 暂存
        submitDisabled: true, // 提交
      },
      // 自定义tabs panel选项卡 数组
      tabsPanelCustomItem: [
        { 'label': '基础信息', 'value': 1 },
        { 'label': '服务能力', 'value': 2 },
        { 'label': '政策保障', 'value': 3 },
        { 'label': '机构管理', 'value': 4 },
        { 'label': '机构运营', 'value': 5 },
        { 'label': '人员信息', 'value': 6 }
      ],
      tabsPanelCustomActiveValue: 1, // 自定义tabs panel选项卡绑定值
    }
  },
  methods: {
    //取消，返回按钮，关闭详情页
    closeDetailsPage() {
      closeSelectedTag(this, this.$route);
      this.$router.push({path: '/day-care-centre/index'})
    },
    // 返回
    handelClickGoBack() {
      this.closeDetailsPage()
    },
    // 自定义tabs切换组件时间监听
    handelTabsPanelClick(val) {
      console.log('触发了=======',val);
      this.tabsPanelCustomActiveValue = val.value
    },
    // 上一步
    handelClickPreStep() {
      this.tabsPanelCustomActiveValue--
      console.log('第'+this.tabsPanelCustomActiveValue+'步')
    },
    // 下一步
    handelClickNextStep() {
      this.tabsPanelCustomActiveValue++
      console.log('第'+this.tabsPanelCustomActiveValue+'步')
    },
    // 测试提交
    handelTestSubmitBtn() {
      let flag1 = this.$refs.basicInformation.childrenValidateForm()
      let flag2 = this.$refs.serviceAbility.childrenValidateForm()
      console.log('基础信息=', flag1,',服务能力=',flag2)
    }
  }
}
</script>

