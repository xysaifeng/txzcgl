<!-- 【基础信息】 -->
<template>
  <el-container>
    <el-main class="nopadding-custom">
      <!-- 服务能力 -->
      <service-ability-item ref="serviceAbility"></service-ability-item>
      <!-- 服务信息（基本服务） -->
      <service-information ref="serviceInformation"></service-information>
    </el-main>
  </el-container>
</template>

<script>
import ServiceAbilityItem from './components/ServiceAbility/ServiceAbility'
import ServiceInformation from './components/ServiceAbility/ServiceInformation'

export default {
  name: 'ServiceAbility',
  components: {
    ServiceAbilityItem,
    ServiceInformation
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
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag1 = this.$refs.serviceAbility.childrenValidateForm()
      let flag2 = this.$refs.serviceInformation.childrenValidateForm()
      return flag1 && flag2
    },
  }
}
</script>
