
<template>
  <div>
    <el-form
      ref="formRef"
      :model="form"
      :rules="this.isEditForm?rulesForm:null"
      label-width="150px"
    >
      <!-- 收费标准信息 -->
      <el-divider content-position="left" class="divider-custom">收费标准信息</el-divider>
      <!-- 营业时间 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">营业时间（多选）：</span>
        </div>
        <div class="form-item-wrap-custom" style="display:block;width:100%;">
          <el-form-item
            class="form-item-custom"
            prop="business_hours.checked"
            style="display:block;width:100%;"
          >
            <el-checkbox-group
              v-model="form.business_hours.checked"
              @change="handelChange_business_hours_checked"
            >
              <!-- 工作日选中 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:100px;height: 52px;">
                  <el-checkbox label="0" name="business_hours_checked">
                    <span>工作日</span>
                  </el-checkbox>
                </div>
                <div
                  v-if="form.business_hours.checked.includes('0')"
                  style="display:flex;flex-wrap:wrap;"
                >
                  <!-- 工作时间 start -->
                  <div style="margin-left: 20px;" class="form-item-panel-custom">
                    <el-form-item class="form-item-custom " prop="business_hours.startTime[0]" >
                      <el-time-select
                        placeholder="请选择"
                        v-model="form.business_hours.startTime[0]"
                        :picker-options="{
                              start: '08:00',
                              step: '00:10',
                              end: '20:00'
                            }"
                            style="width:150px;margin-right:20px;"
                      ></el-time-select>
                    </el-form-item>
                    <el-form-item class="form-item-custom " prop="business_hours.endTime[0]">
                      <el-time-select
                        placeholder="请选择"
                        v-model="form.business_hours.endTime[0]"
                        :picker-options="{
                                start: '08:00',
                              step: '00:10',
                              end: '20:00',
                               minTime: form.business_hours.startTime[0]
                             }"
                             style="width:150px;margin-right:20px;"
                      ></el-time-select>
                    </el-form-item>
                  </div>
                  <!--   工作时间  end -->
                </div>
              </div>
              <!-- 工作日选择end -->

              <!-- 周六选中 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:100px;height: 52px;">
                  <el-checkbox label="1" name="business_hours_checked">
                    <span>周六</span>
                  </el-checkbox>
                </div>
                <div
                  v-if="form.business_hours.checked.includes('1')"
                  style="display:flex;flex-wrap:wrap;"
                >
                  <!-- 周六工作时间 start -->
                  <div style="margin-left: 20px;" class="form-item-panel-custom">
                    <!-- <div class="form-item-title-custom">金额：</div> -->
                    <el-form-item class="form-item-custom " prop="business_hours.startTime[1]">
                      <el-time-select
                        placeholder="请选择"
                        v-model="form.business_hours.startTime[1]"
                        :picker-options="{
                               start: '08:00',
                              step: '00:10',
                              end: '20:00'
                            }"
                            style="width:150px;margin-right:20px;"
                      ></el-time-select>
                    </el-form-item>
                    <el-form-item class="form-item-custom " prop="business_hours.endTime[1]">
                      <el-time-select
                        placeholder="请选择"
                        v-model="form.business_hours.endTime[1]"
                        :picker-options="{
                               start: '08:00',
                              step: '00:10',
                              end: '20:00',
                               minTime: form.business_hours.startTime[1]
                             }"
                             style="width:150px;margin-right:20px;"
                      ></el-time-select>
                    </el-form-item>
                  </div>
                  <!--   周六工作时间  end -->
                </div>
              </div>
              <!-- 周六选择end -->

              <!-- 周日选中 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:100px;height: 52px;">
                  <el-checkbox label="2" name="business_hours_checked">
                    <span>周六</span>
                  </el-checkbox>
                </div>
                <div
                  v-if="form.business_hours.checked.includes('2')"
                  style="display:flex;flex-wrap:wrap;"
                >
                  <!-- 周日工作时间 start -->
                  <div style="margin-left: 20px;" class="form-item-panel-custom">
                    <!-- <div class="form-item-title-custom">金额：</div> -->
                    <el-form-item class="form-item-custom " prop="business_hours.startTime[2]">
                      <el-time-select
                        placeholder="请选择"
                        v-model="form.business_hours.startTime[2]"
                        :picker-options="{
                               start: '08:00',
                              step: '00:10',
                              end: '20:00'
                            }"
                            style="width:150px;margin-right:20px;"
                      ></el-time-select>
                    </el-form-item>
                    <el-form-item class="form-item-custom " prop="business_hours.endTime[2]">
                      <el-time-select
                        placeholder="请选择"
                        v-model="form.business_hours.endTime[2]"
                        :picker-options="{
                                start: '08:00',
                              step: '00:10',
                              end: '20:00',
                               minTime: form.business_hours.startTime[2]
                             }"
                             style="width:150px;margin-right:20px;"
                      ></el-time-select>
                    </el-form-item>
                  </div>
                  <!--   周日工作时间  end -->
                </div>
              </div>
              <!-- 周日选择end -->
            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 营业时间 end -->
      <!-- 托位费 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">托位费：</span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="deposit_fee">
            <el-input
              v-model="form.deposit_fee"
              placeholder="请输入"
              clearable
              class="long-form-item"
            />
            <span style="margin-right:5px;">元/天</span>
          </el-form-item>
        </div>
      </div>
      <!-- 托位费 end -->
      <!-- 照护费 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">照护费：</span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="level_care">
            <el-radio-group
              v-if="this.isEditForm"
              v-model="form.level_care"
              class="radio-item-custom"
              @change="handelChange_level_care"
            >
              <el-radio label="0">有照护等级</el-radio>
              <el-radio label="1">无照护等级</el-radio>
            </el-radio-group>
            <span v-else>{{form.level_care}}</span>
            <el-tooltip
              class="item"
              effect="dark"
              style="font-size:16px;width: 16px;height: 16px;position: relative;top: -10px;"
              content="说明：费用若无区间，【最小】与【最大】项请填写一致"
              placement="right"
            >
              <i class="el-icon-question el-icon-question-custom"></i>
            </el-tooltip>
          </el-form-item>
        </div>
      </div>
      <!-- 照护费 end -->
      <!-- 选择有照护等级的子面板 start-->
      <div  v-if="this.form.level_care ==='0'" class="hidden-form-wrap-custom" style="margin-left: 260px;margin-right: 30px;">
        <div class="form-item-panel-custom" v-for="(item,index) in form.level_care_options" :key="item.name">
          <div class="form-item-title-custom">{{item.name}}：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" :prop="'level_care_options.'+index+'.small'">
              <el-input v-model="item.small" placeholder="请输入" clearable class="short-form-item" />
            </el-form-item>
            <el-form-item class="form-item-custom" :prop="'level_care_options.'+index+'.big'">
              <el-input v-model="item.big" placeholder="请输入" clearable class="short-form-item" />
            </el-form-item>
            <span style="margin-right:5px;height:36px;line-height:36px;">元/天</span>
          </div>
        </div>
      </div>

      <div v-if="this.form.level_care ==='1'" class="hidden-form-wrap-custom" style="margin-left: 260px;margin-right: 30px;">
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">费用：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="no_level_care_fee_small">
              <el-input v-model="form.no_level_care_fee_small" placeholder="请输入" clearable class="short-form-item" />
            </el-form-item>
            <el-form-item class="form-item-custom" prop="no_level_care_fee_big">
              <el-input v-model="form.no_level_care_fee_big" placeholder="请输入" clearable class="short-form-item" />
            </el-form-item>
            <span style="margin-right:5px;height:36px;line-height:36px;">元/天</span>
          </div>
        </div>
      </div>

      <!-- 请选择有照护等级 end -->
      <!-- 膳食费 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">膳食费：</span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="meal_expenses">
            <el-input
              v-model="form.meal_expenses"
              placeholder="请输入"
              clearable
              class="long-form-item"
            />
            <span style="margin-right:5px;">元/天</span>
          </el-form-item>
        </div>
      </div>
      <!-- 膳食费 end -->

      <!-- 认知障碍老人收费标准 start -->
      <div class="form-item-panel-custom" style="padding-bottom:15px;">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">认知障碍老人收费标准：</span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="old_cognitive_impairment_small">
            <el-input
              v-model="form.old_cognitive_impairment_small"
              placeholder="请输入"
              clearable
              class="short-form-item"
            />
          </el-form-item>
          <el-form-item class="form-item-custom" prop="old_cognitive_impairment_big">
            <el-input
              v-model="form.old_cognitive_impairment_big"
              placeholder="请输入"
              class="short-form-item"
              clearable
            />
             <span style="margin-right:5px;">元/天</span>
          </el-form-item>
        </div>
      </div>
      <!-- 认知障碍老人收费标准 end -->
      <!-- 其他费用（多选） start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">其他费用（多选）：</span>
        </div>
        <div class="form-item-wrap-custom" style="display:block;width:100%;">
          <el-form-item
            class="form-item-custom"
            prop="other_fees.checked"
            style="display:block;width:100%;"
          >
            <el-checkbox-group
              v-model="form.other_fees.checked"
              @change="handelChange_other_fees_checked"
            >
              <!-- 接送服务 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:100px;height: 52px;">
                  <el-checkbox label="0" name="other_fees_checked">
                    <span>接送服务</span>
                  </el-checkbox>
                </div>
                <div
                  v-if="form.other_fees.checked.includes('0')"
                  style="display:flex;flex-wrap:wrap;"
                >
                  <!-- 接送服务金额 start -->
                  <div style="width: 450px;margin-left: 20px;" class="form-item-panel-custom">
                    <el-form-item class="form-item-custom" prop="other_fees.cost[0]">
                      <el-input
                        v-model="form.other_fees.cost[0]"
                        placeholder="请输入"
                        clearable
                        class="long-form-item"
                      />
                      <span style="margin-right:5px;">元/天</span>
                    </el-form-item>
                  </div>
                  <!--   接送服务金额  end -->
                </div>
              </div>
              <!-- 接送服务 end -->
              <!-- 早托晚托 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:100px;height: 52px;">
                  <el-checkbox label="1" name="other_fees_checked">
                    <span>早托晚托</span>
                  </el-checkbox>
                </div>
                <div
                  v-if="form.other_fees.checked.includes('1')"
                  style="display:flex;flex-wrap:wrap;"
                >
                  <!-- 早托晚托金额 start -->
                  <div style="width: 450px;margin-left: 20px;" class="form-item-panel-custom">
                    <el-form-item class="form-item-custom" prop="other_fees.cost[1]">
                      <el-input
                        v-model="form.other_fees.cost[1]"
                        placeholder="请输入"
                        clearable
                        class="long-form-item"
                      />
                      <span style="margin-right:5px;">元/天</span>
                    </el-form-item>
                  </div>
                  <!--   早托晚托金额  end -->
                </div>
              </div>
              <!-- 早托晚托 end -->
              <!-- 其他服务 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:100px;height: 52px;">
                  <el-checkbox label="2" name="other_fees_checked">
                    <span>其他服务</span>
                  </el-checkbox>
                </div>
                <div
                  v-if="form.other_fees.checked.includes('2')"
                  style="display:flex;flex-wrap:wrap;"
                >
                  <!-- 其他服务金额 start -->
                  <div style="width: 450px;margin-left: 20px;" class="form-item-panel-custom">
                    <el-form-item class="form-item-custom" prop="other_fees.cost[2]">
                      <el-input
                        v-model="form.other_fees.cost[2]"
                        placeholder="请输入"
                        clearable
                        class="long-form-item"
                      />
                      <span style="margin-right:5px;">元/天</span>
                    </el-form-item>
                  </div>
                  <!--   其他服务金额  end -->
                </div>
              </div>
              <!-- 其他服务 end -->
            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 其他费用（多选） end -->
      <!-- 服务价格是否公示 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">服务价格是否公示：</span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="service_price">
            <el-radio-group
              v-if="this.isEditForm"
              v-model="form.service_price"
              class="radio-item-custom"
            >
              <el-radio label="0">是</el-radio>
              <el-radio label="1">否</el-radio>
            </el-radio-group>
            <span v-else>{{form.service_price}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 服务价格是否公示 end -->
    </el-form>
  </div>
</template>

<script>
import areaStreetOptions from "@/assets/js/shanghai.js";
import rulesForm from "../../../js/org-operation-rules-form.js";

export default {
  name: "InformationCharge",
  components: {},
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: "", //查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      form: {
        business_hours: {
          checked: [],
          startTime: ["", "", ""],
          endTime: ["", "", ""]
        }, //营业时间
        deposit_fee: "", //托位费
        level_care: "", //照护费
        level_care_options:[
          {
            name: "一级",
            small:"deposit_fee_one_small",
            big: "deposit_fee_one_big"
          },
          {
            name: "二级",
            small:"deposit_fee_two_small",
            big: "deposit_fee_two_big"
          },{
            name: "三级",
            small:"deposit_fee_three_small",
            big: "deposit_fee_three_big"
          },{
            name: "四级",
            small:"deposit_fee_four_small",
            big: "deposit_fee_four_big"
          },{
            name: "五级",
            small:"deposit_fee_five_small",
            big: "deposit_fee_five_big"
          },{
            name: "六级",
            small:"deposit_fee_six_small",
            big: "deposit_fee_six_big"
          },

        ],//有照护费照护等级
        no_level_care_fee_small:"",//无照护等级费用
        no_level_care_fee_big:"",//无照护等级费用
        meal_expenses: "", //膳食费
        old_cognitive_impairment_small:"",//认知障碍老人收费小值
        old_cognitive_impairment_big:"",//认知障碍老人收费大值
        other_fees: {
          checked: [],
          cost: ["", "", ""]
        }, //其他费用
        service_price: "" //服务价格是否公示
      }
    };
  },
 created(){
    // 照护等级清除
    this.form.level_care_options.forEach((item)=>{
      item.small='';
      item.big=''
    })
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
    // 营业时间复选框清除联级内容
    handelChange_business_hours_checked(val) {
      let obj = this.form.business_hours;
      for (let k in obj) {
        if (k !== "checked") {
          obj[k].map((item, index) => {
            if (!val.includes(index + "")) {
              obj[k][index] = "";
            }
            return true;
          });
        }
      }
    },
    // 有无照护等级单选框清除联级内容
    handelChange_level_care(val) {
      if(val=='0'){
        // 清除有照护等级的值
        let obj = this.form.level_care_options;
        obj.map((item)=>{
          item.small=""
          item.big=""
        })
      }else{
        // 清除无照护等级的值
        this.form.no_level_care_fee_small="";
        this.form.no_level_care_fee_big=""
      }
    },
    // 其他费用复选框清除联级内容
    handelChange_other_fees_checked(val) {
      let obj = this.form.other_fees;
      for (let k in obj) {
        if (k !== "checked") {
          obj[k].map((item, index) => {
            if (!val.includes(index + "")) {
              obj[k][index] = "";
            }
            return true;
          });
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

