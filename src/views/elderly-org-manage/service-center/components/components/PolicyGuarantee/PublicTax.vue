<!--【政策保障】---公共事业费优惠和税费优惠政策-->
<template>
  <div>
    <el-form
      ref="formRef"
      :model="form"
      :rules="this.isEditForm?rulesForm:null"
      label-width="150px"
    >
      <!-- 公共事业费优惠 start -->
      <el-divider content-position="left" class="divider-custom">公共事业费优惠</el-divider>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">水费：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="public_service_preference[0].type" >
            <el-select v-if="this.isEditForm" v-model="form.public_service_preference[0].type" placeholder="请选择" clearable class="long-form-item" @change="handelChange_englishName($event,0)">
              <el-option label="已享受" value="0" />
              <el-option label="未享受" value="1" />
            </el-select>
          </el-form-item>
          <div v-if="form.public_service_preference[0].type === '1'" style="margin-left:15px">
            <el-form-item class="form-item-custom" prop="public_service_preference[0].other" >
              <el-select v-if="this.isEditForm" v-model="form.public_service_preference[0].other" placeholder="请选择" clearable class="long-form-item">
              <el-option label="尚未申请" value="0" />
              <el-option label="申请未通过" value="1" />
              <el-option label="主动放弃" value="2" />
            </el-select>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">电费：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="public_service_preference[1].type" >
            <el-select v-if="this.isEditForm" v-model="form.public_service_preference[1].type" placeholder="请选择" clearable class="long-form-item" @change="handelChange_englishName($event,1)">
              <el-option label="已享受" value="0" />
              <el-option label="未享受" value="1" />
            </el-select>
          </el-form-item>
          <div v-if="form.public_service_preference[1].type === '1'" style="margin-left:15px">
            <el-form-item class="form-item-custom" prop="public_service_preference[1].other" >
              <el-select v-if="this.isEditForm" v-model="form.public_service_preference[1].other" placeholder="请选择" clearable class="long-form-item">
              <el-option label="尚未申请" value="0" />
              <el-option label="申请未通过" value="1" />
              <el-option label="主动放弃" value="2" />
            </el-select>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">燃气费：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="public_service_preference[2].type" >
            <el-select v-if="this.isEditForm" v-model="form.public_service_preference[2].type" placeholder="请选择" clearable class="long-form-item" @change="handelChange_englishName($event,2)">
              <el-option label="已享受" value="0" />
              <el-option label="未享受" value="1" />
            </el-select>
          </el-form-item>
          <div v-if="form.public_service_preference[2].type === '1'" style="margin-left:15px">
            <el-form-item class="form-item-custom" prop="public_service_preference[2].other" >
              <el-select v-if="this.isEditForm" v-model="form.public_service_preference[2].other" placeholder="请选择" clearable class="long-form-item">
              <el-option label="尚未申请" value="0" />
              <el-option label="申请未通过" value="1" />
              <el-option label="主动放弃" value="2" />
            </el-select>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">宽带网络费：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="public_service_preference[3].type" >
            <el-select v-if="this.isEditForm" v-model="form.public_service_preference[3].type" placeholder="请选择" clearable class="long-form-item" @change="handelChange_englishName($event,3)">
              <el-option label="已享受" value="0" />
              <el-option label="未享受" value="1" />
            </el-select>
          </el-form-item>
          <div v-if="form.public_service_preference[3].type === '1'" style="margin-left:15px">
            <el-form-item class="form-item-custom" prop="public_service_preference[3].other" >
              <el-select v-if="this.isEditForm" v-model="form.public_service_preference[3].other" placeholder="请选择" clearable class="long-form-item">
              <el-option label="尚未申请" value="0" />
              <el-option label="申请未通过" value="1" />
              <el-option label="主动放弃" value="2" />
            </el-select>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">固定电话费：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="public_service_preference[4].type" >
            <el-select v-if="this.isEditForm" v-model="form.public_service_preference[4].type" placeholder="请选择" clearable class="long-form-item" @change="handelChange_englishName($event,4)">
              <el-option label="已享受" value="0" />
              <el-option label="未享受" value="1" />
            </el-select>
          </el-form-item>
          <div v-if="form.public_service_preference[4].type === '1'" style="margin-left:15px">
            <el-form-item class="form-item-custom" prop="public_service_preference[4].other" >
              <el-select v-if="this.isEditForm" v-model="form.public_service_preference[4].other" placeholder="请选择" clearable class="long-form-item">
              <el-option label="尚未申请" value="0" />
              <el-option label="申请未通过" value="1" />
              <el-option label="主动放弃" value="2" />
            </el-select>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">有线电视费：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="public_service_preference[5].type" >
            <el-select v-if="this.isEditForm" v-model="form.public_service_preference[5].type" placeholder="请选择" clearable class="long-form-item" @change="handelChange_englishName($event,5)">
              <el-option label="已享受" value="0" />
              <el-option label="未享受" value="1" />
            </el-select>
          </el-form-item>
          <div v-if="form.public_service_preference[5].type === '1'" style="margin-left:15px">
            <el-form-item class="form-item-custom" prop="public_service_preference[5].other" >
              <el-select v-if="this.isEditForm" v-model="form.public_service_preference[5].other" placeholder="请选择" clearable class="long-form-item">
                <el-option label="尚未申请" value="0" />
                <el-option label="申请未通过" value="1" />
                <el-option label="主动放弃" value="2" />
              </el-select>
            </el-form-item>
          </div>
        </div>
      </div>

      <!-- 公共事业费优惠 end -->

      <!-- 税费优惠政策 start -->
      <el-divider content-position="left" class="divider-custom">
        税费优惠政策
        <el-tooltip
          class="item"
          effect="light"
          placement="right"
          style="font-size:16px;width: 16px;height: 16px;position: relative;top: 0px;"
        >
          <i class="el-icon-question el-icon-question-custom"></i>
          <div slot="content">
            <el-link
              href="http://www.mca.gov.cn/article/xw/tzgg/201907/20190700018170.shtml"
              target="_blank"
            >查看详情</el-link>
          </div>
        </el-tooltip>
      </el-divider>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"> <span class="mandatory-start-custom">增值税：</span> </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="preferential_tax_policy[0]" >
            <el-select v-model="form.preferential_tax_policy[0]" class="long-form-item" placeholder="请选择">
              <el-option label="已享受" value="0" />
              <el-option label="不符合条件" value="1" />
              <el-option label="符合条件未享受" value="2" />
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"> <span class="mandatory-start-custom">契税：</span> </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="preferential_tax_policy[1]" >
            <el-select v-model="form.preferential_tax_policy[1]" class="long-form-item" placeholder="请选择">
              <el-option label="已享受" value="0" />
              <el-option label="不符合条件" value="1" />
              <el-option label="符合条件未享受" value="2" />
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"> <span class="mandatory-start-custom">企业所得税：</span> </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="preferential_tax_policy[2]" >
            <el-select v-model="form.preferential_tax_policy[2]" class="long-form-item" placeholder="请选择">
              <el-option label="已享受" value="0" />
              <el-option label="不符合条件" value="1" />
              <el-option label="符合条件未享受" value="2" />
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"> <span class="mandatory-start-custom">房产税：</span> </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="preferential_tax_policy[3]" >
            <el-select v-model="form.preferential_tax_policy[3]" class="long-form-item" placeholder="请选择">
              <el-option label="已享受" value="0" />
              <el-option label="不符合条件" value="1" />
              <el-option label="符合条件未享受" value="2" />
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"> <span class="mandatory-start-custom">城镇土地使用税：</span> </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="preferential_tax_policy[4]" >
            <el-select v-model="form.preferential_tax_policy[4]" class="long-form-item" placeholder="请选择">
              <el-option label="已享受" value="0" />
              <el-option label="不符合条件" value="1" />
              <el-option label="符合条件未享受" value="2" />
            </el-select>
          </el-form-item>
        </div>
      </div>

      <!-- 税费优惠政策 end -->
    </el-form>
  </div>
</template>

<script>
import areaStreetOptions from "@/assets/js/shanghai.js";
import rulesForm from "../../../js/policy-guarantee-rules-form.js";

export default {
  name: "PublicTax",
  components: {},
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: "", //查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      enjoy_options: [
        {
          value: "0",
          label: "已享受"
        },
        {
          value: "1",
          label: "未享受"
        }
      ], //公共事业费优惠享受情况
      noenjoy_reason_options: [
        {
          value: "0",
          label: "尚未申请"
        },
        {
          value: "1",
          label: "申请未通过"
        },
        {
          value: "2",
          label: "主动放弃"
        }
      ], //公共事业费优惠未享受原因
      form: {
        // 公共事业费优惠
        public_service_preference:[
          {type: '',other:''},
          {type: '',other:''},
          {type: '',other:''},
          {type: '',other:''},
          {type: '',other:''},
          {type: '',other:''}
        ],
        //税费优惠政策
        preferential_tax_policy:['','','','','']
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
    // 绑定change事件
    handelChange_englishName(e,index){
      this.form.public_service_preference[index].other = ''
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
    childrenValidateForm() {
      let flag = null;
      this.$refs["formRef"].validate((valid, object) => {
        console.log("场所信息----子组件校验----", valid);
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
