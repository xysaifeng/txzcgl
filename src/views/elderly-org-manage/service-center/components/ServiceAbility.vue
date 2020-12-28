<!-- 【基础信息】 -->
<template>
  <el-container>
    <el-main class="nopadding-custom">
      <!-- 服务能力 和服务类型-->
      <service-ability-type ref="serviceAbilityType"></service-ability-type>
    </el-main>
  </el-container>
</template>

<script>
import ServiceAbilityType from './components/ServiceAbility/ServiceAbilityType'

export default {
  name: 'ServiceAbility',
  components: {
    ServiceAbilityType
	},
  data() {
    return {

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
      console.log('获取下拉字典');
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
      this.$refs.serviceAbilityType.echoAllChildrenForm(allForm)

    },
    // 获取所有子组件的form字段
    getAllChildrenForm(){
      let form1 = this.$refs.serviceAbilityType.getAllChildrenForm()
      return {...form1}
    },
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag1 = this.$refs.serviceAbilityType.childrenValidateForm()

      return flag1
    },
  }
}
</script>
