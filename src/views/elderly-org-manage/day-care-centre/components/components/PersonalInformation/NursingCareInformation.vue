
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">养老护理员信息</el-divider>
    <el-main>
      <div>
        <div style="display:flex;justify-content: space-between;margin-bottom:15px;">
          <el-button type="primary" @click="">绑定</el-button>
        </div>
      </div>
      <!-- 列表 start -->
      <el-table :data="tableData" v-loading="loading" border style="width: 100%">
        <el-table-column type="index" label="序号" width="80" align="center" fixed="left"></el-table-column>
        <el-table-column label="姓名" prop="name" align="center" min-width="150"></el-table-column>
        <el-table-column label="性别" prop="sexName" align="center" min-width="150"></el-table-column>
        <el-table-column label="身份证" prop="idCard" align="center" min-width="150"></el-table-column>
        <el-table-column label="年龄" prop="age" align="center" min-width="150"></el-table-column>
        <el-table-column label="户籍地" prop="area" align="center" min-width="150"></el-table-column>
        <el-table-column label="工作类型" prop="jobType" align="center" min-width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="180" header-align="center">
          <template slot-scope="{row,$index}">
            <div style="display: flex;justify-content: center;">
              <el-button type="primary" size="small" @click="" class="tableRolOpreteBtn" style="margin-left: 15px;">取消绑定</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <!-- 列表 end -->

      <br>

      <!-- 分页 start -->
      <el-pagination background layout="total, sizes, ->, prev, pager, next, jumper" :total="total" :sizes="10" @current-change=""></el-pagination>
      <!-- 分页 end -->

    </el-main>
  </div>
</template>

<script>
import areaStreetOptions from "@/assets/js/shanghai.js";
import rulesForm from "../../../js/personal-information-rules-form.js";

export default {
  name: "NursingCareInformation",
  components: {},
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: "", //查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      tableData:[
        {name:'张三',sexName:'男',idCard:'343243252325324324',age:66,area:'上海市',jobType:'兼职'},
        {name:'张三',sexName:'男',idCard:'343243252325324324',age:66,area:'上海市',jobType:'兼职'},
        {name:'张三',sexName:'男',idCard:'343243252325324324',age:66,area:'上海市',jobType:'兼职'},
        {name:'张三',sexName:'男',idCard:'343243252325324324',age:66,area:'上海市',jobType:'兼职'},
        {name:'张三',sexName:'男',idCard:'343243252325324324',age:66,area:'上海市',jobType:'兼职'},
      ],
      loading:false,
      total:100,
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
      // this.form = {...allForm}
      // this.$nextTick(() => {
        //this.$refs['formRef'].clearValidate()
      // })
    },
    // 获取所有子组件的form字段
    getAllChildrenForm(){
      // return this.form
    },
  }
};
</script>
