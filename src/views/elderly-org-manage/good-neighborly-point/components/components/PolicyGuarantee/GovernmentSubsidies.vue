<!--【政策保障】---政府补贴-->
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">政府补贴</el-divider>
    <el-form
      ref="formRef"
      :model="form"
      :rules="this.isEditForm?rulesForm:null"
      label-width="150px"
    >
      <!-- 是否享受一次性建设补贴 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">是否享受一次性建设补贴：</span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="one_construction_subsidy">
            <el-radio-group
              v-if="this.isEditForm"
              v-model="form.one_construction_subsidy"
              class="radio-item-custom"
              @change="handelChange_one_construction_subsidy"
            >
              <el-radio label="0">是</el-radio>
              <el-radio label="1">否</el-radio>
            </el-radio-group>
            <span v-else>{{form.one_construction_subsidy}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 是否享受一次性建设补贴 end -->
      <!-- 享受一次性建设补贴选中是 start -->
      <div
        v-if="this.form.one_construction_subsidy=='0'"
        class="hidden-form-wrap-custom"
        style="margin-bottom:15px;margin-left: 260px;margin-right: 30px;"
      >
        <!-- 请选择(多选) start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom" style="width:130px;min-width:130px;">请选择(多选)：</div>
          <div class="form-item-wrap-custom" style="display:block;width:100%;">
            <el-form-item
              class="form-item-custom"
              prop="construction_subsidy_area.checked"
              style="display:block;width:100%;"
            >
              <el-checkbox-group
                v-model="form.construction_subsidy_area.checked"
                @change="handelChange_construction_subsidy_area_checked"
              >
                <!-- 市级选中 start -->
                <div class="checkbox-group-block-custom">
                  <div style="width:100px;height: 52px;">
                    <el-checkbox label="0" name="construction_subsidy_area_checked">
                      <span>市级</span>
                    </el-checkbox>
                  </div>
                  <div
                    v-if="form.construction_subsidy_area.checked.includes('0')"
                    class="form-item-panel-custom"
                    style="width:100%;display:flex;flex-wrap:wrap;"
                  >
                    <!-- 市级补贴标准 start -->
                    <div class="form-item-panel-custom" style="">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">标准：</div>
                      <el-form-item class="form-item-custom" prop="construction_subsidy_area.municipal_subsidy_standard[0]" >
                        <el-select
                          v-if="this.isEditForm"
                          v-model="form.construction_subsidy_area.municipal_subsidy_standard[0]"
                          placeholder="请选择"
                          clearable
                          class="long-form-item"
                        >
                          <el-option
                            v-for="item in municipal_subsidy_standard_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <!-- 市级补贴标准 end -->

                    <!-- 金额 start-->
                    <div
                      v-if="form.construction_subsidy_area.municipal_subsidy_standard[0]=='4'"
                      class="form-item-panel-custom"
                      style=""
                    >
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">金额：</div>
                      <el-form-item
                        class="form-item-custom"
                        prop="construction_subsidy_area.year_of_money[0]"
                      >
                        <el-input
                          v-model="form.construction_subsidy_area.year_of_money[0]"
                          clearable
                          class="long-form-item"
                        />
                        <span style="margin-right:5px;">万元/年</span>
                      </el-form-item>
                    </div>
                    <!-- 金额 end-->

                    <!-- 市级享受补贴年份 start -->
                    <div class="form-item-panel-custom" style="">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">享受补贴年份：</div>
                      <el-form-item
                        class="form-item-custom"
                        prop="construction_subsidy_area.year_of_subsidy[0]"
                      >
                        <el-select
                          v-model="form.construction_subsidy_area.year_of_subsidy[0]"
                          placeholder="请选择"
                          class="long-form-item"
                        >
                          <el-option
                            v-for="item in year_picker_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <!-- 市级享受补贴年份 end -->

                  </div>
                </div>
                <!-- 市级选择 end -->
                <!-- 区级选择start -->
                <div class="checkbox-group-block-custom">
                  <div style="width:100px;height: 52px;">
                    <el-checkbox label="1" name="construction_subsidy_area_checked">
                      <span>区级</span>
                    </el-checkbox>
                  </div>
                  <div
                    v-if="form.construction_subsidy_area.checked.includes('1')"
                    class="form-item-panel-custom"
                    style="width:100%;display:flex;flex-wrap:wrap;"
                  >
                    <!-- 区级一次性补贴金额 start -->
                    <div style="" class="form-item-panel-custom">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">金额：</div>
                      <el-form-item
                        class="form-item-custom"
                        prop="construction_subsidy_area.year_of_money[1]"
                      >
                        <el-input
                          v-model="form.construction_subsidy_area.year_of_money[1]"
                          clearable
                          class="long-form-item"
                        />
                        <span style="margin-right:5px;">万元/年</span>
                      </el-form-item>
                    </div>
                    <!-- 区级一次性补贴金额 end -->
                    <!-- 区级一次性补贴享受年份 start -->
                    <div style="" class="form-item-panel-custom">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">享受补贴年份：</div>

                      <el-form-item
                        class="form-item-custom"
                        prop="construction_subsidy_area.year_of_subsidy[1]"
                      >
                        <el-select
                          v-model="form.construction_subsidy_area.year_of_subsidy[1]"
                          value="2019"
                          placeholder="请选择"
                          class="long-form-item"
                        >
                          <el-option
                            v-for="item in year_picker_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </div>

                    <!-- 区级一次性补贴享受年份 end -->
                  </div>
                </div>
                <!-- 区级选择end -->

                 <!-- 街镇级选择start -->
                <div class="checkbox-group-block-custom">
                  <div style="width:100px;height: 52px;">
                    <el-checkbox label="2" name="construction_subsidy_area_checked">
                      <span>街镇级</span>
                    </el-checkbox>
                  </div>
                  <div
                    v-if="form.construction_subsidy_area.checked.includes('2')"
                    class="form-item-panel-custom"
                    style="width:100%;display:flex;flex-wrap:wrap;"
                  >
                    <!-- 街镇级一次性补贴金额 start -->
                    <div style="" class="form-item-panel-custom">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">金额：</div>
                      <el-form-item
                        class="form-item-custom"
                        prop="construction_subsidy_area.year_of_money[2]"
                      >
                        <el-input
                          v-model="form.construction_subsidy_area.year_of_money[2]"
                          clearable
                          class="long-form-item"
                        />
                        <span style="margin-right:5px;">万元/年</span>
                      </el-form-item>
                    </div>
                    <!-- 街镇级一次性补贴金额 end -->
                    <!-- 街镇级一次性补贴享受年份 start -->
                    <div style="" class="form-item-panel-custom">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">享受补贴年份：</div>

                      <el-form-item
                        class="form-item-custom"
                        prop="construction_subsidy_area.year_of_subsidy[2]"
                      >
                        <el-select
                          v-model="form.construction_subsidy_area.year_of_subsidy[2]"
                          value="2019"
                          placeholder="请选择"
                          class="long-form-item"
                        >
                          <el-option
                            v-for="item in year_picker_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <!-- 街镇级一次性补贴享受年份 end -->
                  </div>
                </div>
                <!-- 街镇级选择end -->
              </el-checkbox-group>
            </el-form-item>
          </div>
        </div>
        <!-- 请选择功能区域(多选) end -->
      </div>
      <!-- 享受一次性建设补贴选中是 end -->

      <!-- 是否享受日常运营补贴 start -->
    <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">是否享受日常运营补贴：</span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="daily_operation_subsidy">
            <el-radio-group
              v-if="this.isEditForm"
              v-model="form.daily_operation_subsidy"
              class="radio-item-custom"
              @change="handelChange_daily_operation_subsidy"
            >
              <el-radio label="0">是</el-radio>
              <el-radio label="1">否</el-radio>
            </el-radio-group>
            <span v-else>{{form.daily_operation_subsidy}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 是否享受日常运营补贴 end -->
      <!-- 日常运营补贴选中是 start -->
      <div
        v-if="this.form.daily_operation_subsidy=='0'"
        class="hidden-form-wrap-custom"
        style="margin-bottom:15px;margin-left: 260px;margin-right: 30px;"
      >
        <!-- 请选择(多选) start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom" style="width:130px;min-width:130px;">请选择(多选)：</div>
          <div class="form-item-wrap-custom" style="display:block;width:100%;">
            <el-form-item
              class="form-item-custom"
              prop="operation_subsidy_area.checked"
              style="display:block;width:100%;"
            >
              <el-checkbox-group
                v-model="form.operation_subsidy_area.checked"
                @change="handelChange_operation_subsidy_area_checked"
              >
                <!-- 市级选中 start -->
                <div class="checkbox-group-block-custom">
                  <div style="width:100px;height: 52px;">
                    <el-checkbox label="0" name="operation_subsidy_area_checked">
                      <span>市级</span>
                    </el-checkbox>
                  </div>
                  <div
                    v-if="form.operation_subsidy_area.checked.includes('0')"
                    class="form-item-panel-custom"
                    style="display:flex;flex-wrap:wrap;"
                  >
                    <!-- 市级日常运营补贴金额 start -->
                    <div style="" class="form-item-panel-custom">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">金额：</div>
                      <el-form-item
                        class="form-item-custom"
                        prop="operation_subsidy_area.year_of_money[0]"
                      >
                        <el-input
                          v-model="form.operation_subsidy_area.year_of_money[0]"
                          clearable
                          class="long-form-item"
                        />
                        <span style="margin-right:5px;">万元/年</span>
                      </el-form-item>
                    </div>
                    <!-- 市级日常运营补贴金额 end -->
                    <!-- 市级日常运营补贴享受年份 start -->
                    <div style="" class="form-item-panel-custom">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">享受补贴年份：</div>

                      <el-form-item
                        class="form-item-custom"
                        prop="operation_subsidy_area.year_of_subsidy[0]"
                      >
                        <el-select
                          v-model="form.operation_subsidy_area.year_of_subsidy[0]"
                          value="2019"
                          placeholder="请选择"
                          class="long-form-item"
                        >
                          <el-option
                            v-for="item in year_picker_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <!-- 市级日常运营补贴享受年份 end -->
                <!-- 市级选择 end -->
                <!-- 区级选择start -->
                <div class="checkbox-group-block-custom">
                  <div style="width:100px;height: 52px;">
                    <el-checkbox label="1" name="operation_subsidy_area_checked">
                      <span>区级</span>
                    </el-checkbox>
                  </div>
                  <div
                    v-if="form.operation_subsidy_area.checked.includes('1')"
                    class="form-item-panel-custom"
                    style="display:flex;flex-wrap:wrap;"
                  >
                    <!-- 区级日常运营补贴金额 start -->
                    <div style="" class="form-item-panel-custom">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">金额：</div>
                      <el-form-item
                        class="form-item-custom"
                        prop="operation_subsidy_area.year_of_money[1]"
                      >
                        <el-input
                          v-model="form.operation_subsidy_area.year_of_money[1]"
                          clearable
                          class="long-form-item"
                        />
                        <span style="margin-right:5px;">万元/年</span>
                      </el-form-item>
                    </div>
                    <!-- 区级日常运营补贴金额 end -->
                    <!-- 区级日常运营补贴享受年份 start -->
                    <div style="" class="form-item-panel-custom">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">享受补贴年份：</div>

                      <el-form-item
                        class="form-item-custom"
                        prop="operation_subsidy_area.year_of_subsidy[1]"
                      >
                        <el-select
                          v-model="form.operation_subsidy_area.year_of_subsidy[1]"
                          value="2019"
                          placeholder="请选择"
                          class="long-form-item"
                        >
                          <el-option
                            v-for="item in year_picker_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </div>

                    <!-- 区级日常运营补贴享受年份 end -->
                  </div>
                </div>
                <!-- 区级选择end -->

                 <!-- 街镇级选择start -->
                <div class="checkbox-group-block-custom">
                  <div style="width:100px;height: 52px;">
                    <el-checkbox label="2" name="operation_subsidy_area_checked">
                      <span>街镇级</span>
                    </el-checkbox>
                  </div>
                  <div
                    v-if="form.operation_subsidy_area.checked.includes('2')"
                    class="form-item-panel-custom"
                    style="display:flex;flex-wrap:wrap;"
                  >
                    <!-- 街镇级日常运营补贴金额 start -->
                    <div style="" class="form-item-panel-custom">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">金额：</div>
                      <el-form-item
                        class="form-item-custom"
                        prop="operation_subsidy_area.year_of_money[2]"
                      >
                        <el-input
                          v-model="form.operation_subsidy_area.year_of_money[2]"
                          clearable
                          class="long-form-item"
                        />
                        <span style="margin-right:5px;">万元/年</span>
                      </el-form-item>
                    </div>
                    <!-- 街镇级日常运营补贴金额 end -->
                    <!-- 街镇级日常运营补贴享受年份 start -->
                    <div style="" class="form-item-panel-custom">
                      <div class="form-item-title-custom" style="width:135px;min-width:135px;">享受补贴年份：</div>

                      <el-form-item
                        class="form-item-custom"
                        prop="operation_subsidy_area.year_of_subsidy[2]"
                      >
                        <el-select
                          v-model="form.operation_subsidy_area.year_of_subsidy[2]"
                          value="2019"
                          placeholder="请选择"
                          class="long-form-item"
                        >
                          <el-option
                            v-for="item in year_picker_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <!-- 街镇级日常运营补贴享受年份 end -->
                  </div>
                </div>
                <!-- 街镇级选择end -->
              </el-checkbox-group>
            </el-form-item>
          </div>
        </div>
        <!-- 请选择功能区域(多选) end -->
      </div>
      <!-- 是否享受日常运营补贴 end -->
    </el-form>
  </div>
</template>

<script>
import areaStreetOptions from "@/assets/js/shanghai.js";
import rulesForm from "../../../js/policy-guarantee-rules-form.js";

export default {
  name: "GovernmentSubsidies",
  components: {},
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: "", //查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      municipal_subsidy_standard_options: [
        {
          value: "0",
          label: "补贴15万元（投资额一般在30万元（含）-59万元"
        },
        {
          value: "1",
          label: "补贴30万元（投资额一般在60万元（含）-99万元"
        },
        {
          value: "2",
          label: "补贴40万元（投资额一般在100万元（含）-149万元"
        },
        {
          value: "3",
          label: "补贴60万元（投资额一般在150万元以上（含））"
        },
        {
          value: "4",
          label: "其他"
        }
      ], //建设补贴市级补贴标准
      year_picker_options: {},
      form: {
        one_construction_subsidy: "",//一次性建设补贴
        construction_subsidy_area: {
          checked: [],
          municipal_subsidy_standard: ["", "", ""], //一次性建设补贴标准
          year_of_subsidy: ["", "", ""], //一次性建设补贴年份
          year_of_money: ["", "", ""] //一次性建设补贴金额
        },
        daily_operation_subsidy:'',//日常运营补贴
        operation_subsidy_area: {
          checked: [],
          municipal_subsidy_standard: ["", "", ""], //一次性建设补贴标准
          year_of_subsidy: ["", "", ""], //一次性建设补贴年份
          year_of_money: ["", "", ""] //一次性建设补贴金额
        },
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
    this.year_picker_options = this.getYearSubsidy();
  },
  methods: {
    //年份选择2000年至当前年
    getYearSubsidy: () => {
      let arrYear = [];
      var year = parseInt(new Date().getFullYear()) - 2000;
      for (let i = 0; i <= year; i++) {
        let obj = {};
        obj.value = i + 2000;
        obj.label = i + 2000;
        arrYear.push(obj);
      }
      return arrYear; //大于当前的禁止，小于2000年前的禁止
    },
    //一次性建设补贴选择是否
    handelChange_one_construction_subsidy() {},
    //一次性建设补贴市区街镇选择
     handelChange_construction_subsidy_area_checked(val) {
      //  复选框取消清除级联内容
      let obj = this.form.construction_subsidy_area;
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

     //日常运营补贴选择是否
     handelChange_daily_operation_subsidy() {},
    //日常运营补贴市区街镇选择
   handelChange_operation_subsidy_area_checked(val) {
      //  复选框取消清除级联内容
      let obj = this.form.operation_subsidy_area;
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
        console.log("【政策保障】---政府补贴----", valid);
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
