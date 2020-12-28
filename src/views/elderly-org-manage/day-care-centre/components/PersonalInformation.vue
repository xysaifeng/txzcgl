<!-- 人员信息 -->
<template>
  <el-main class="nopadding-custom">
    <!-- 人员基础信息 -->
    <basic-nurse-information ref="basicNurseInformation"></basic-nurse-information>
    <!-- 养老护理员信息 -->
    <nursing-care-information ref="nursingCareInformation"></nursing-care-information>
  </el-main>
</template>

<script>
import BasicNurseInformation from './components/PersonalInformation/BasicNurseInformation'
import NursingCareInformation from './components/PersonalInformation/NursingCareInformation'
export default {
  name: 'PersonalInformation',
  components:{
    BasicNurseInformation,
    NursingCareInformation
  },
  data() {
    return {

    }
  },
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
    // 回显所有子组件的form字段
    echoAllChildrenForm(allForm){
      this.$refs.basicNurseInformation.echoAllChildrenForm(allForm)
    },
    // 获取所有子组件的form字段
    getAllChildrenForm(){
      let form1 = this.$refs.basicNurseInformation.getAllChildrenForm()
      return form1
    },
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag1 = this.$refs.basicNurseInformation.childrenValidateForm()
      return flag1
    },
  }
}
</script>


