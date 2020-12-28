<!-- 【基础信息】 -->
<template>
  <el-container>
    <el-main class="nopadding-custom">
      <!-- 场所信息 -->
      <locale-information ref="localeInformation"></locale-information>
      <!-- 投资主体及投入情况 -->
      <investment-subject ref="investmentSubject" @watchOperatingModel="watchOperatingModel"></investment-subject>
      <!-- 机构信息 -->
      <org-information ref="orgInformation" :operatingModel="operatingModel"></org-information>
    </el-main>
  </el-container>
</template>

<script>
import LocaleInformation from './components/BasicInformation/LocaleInformation'
import InvestmentSubject from './components/BasicInformation/InvestmentSubject'
import OrgInformation from './components/BasicInformation/OrgInformation'

export default {
  name: 'BasicInformation',
  components: {
    LocaleInformation,
    InvestmentSubject,
    OrgInformation
	},
  data() {
    return {
      operatingModel:'',// 监听选择‘投资主体性质’的值的变化
    }
  },
  //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  mounted() {
    //当前机构id
    let _userId_ = this.$route.query.id || '';
    this.asyncGetData(_userId_);
    // if (this.modelType === 'look') {
    //   /*编辑按钮的权限控制*/
    //   getEditAuthority(this.$route.query.editAuthority).then(response => {
    //     response.forEach((item) => {
    //       if (item.menuName === '编辑') {
    //         this.editAuthority = item.visible === '0' ? true : false;
    //       }
    //     });
    //   }).catch(() => {
    //     this.$message.error('获取编辑按钮的权限控制失败！');
    //   });
    // }
  },
  methods: {
    // 异步事件同步化
    async asyncGetData(id) {
      await this.getSelect()
    },
    // 获取下拉字典
    getSelect() {
      /*return new Promise((resolve, reject) => {
        allSelectdictionaryData().then(response => {
          resolve()
        }).catch(() => {
          this.$message.error('数据字典接口请求失败！')
          reject()
        })
      })
      */
    },
    // ‘主体性质’的选择改变‘运营模式’
    watchOperatingModel(val) {
      console.log('‘主体性质’的选择改变‘运营模式’-------------', val)
      this.operatingModel = val
    },
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag1 = this.$refs.localeInformation.childrenValidateForm()
      let flag2 = this.$refs.investmentSubject.childrenValidateForm()
      let flag3 = this.$refs.orgInformation.childrenValidateForm()
      console.log('基础信息---',flag1 , flag2 , flag3)
      return flag1 && flag2 && flag3
    },
  }
}
</script>
