<!--【基础信息】---投资主体及投入情况-->
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">投资主体及投入情况
      <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 0px;">
        <i class="el-icon-question el-icon-question-custom"></i>
        <div slot="content">投资主体：指对该场所享有所有权或者支配权的主体</div>
      </el-tooltip>
    </el-divider>
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">

      <!-- 投资主体名称 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">投资主体名称：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="investment_subject_name">
            <el-input v-if="this.isEditForm" v-model="form.investment_subject_name" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.investment_subject_name}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 投资主体名称 end -->

      <!-- 投资主体性质 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">投资主体性质：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="investment_subject_nature">
            <el-radio-group v-if="this.isEditForm" v-model="form.investment_subject_nature" class="radio-item-custom" @change="handelChange_investment_subject_nature">
              <el-radio label="0">政府</el-radio>
              <el-radio label="1">企业</el-radio>
              <el-radio label="2">社会组织</el-radio>
              <el-radio label="3">个体</el-radio>
            </el-radio-group>
            <span v-else>{{form.investment_subject_nature}}</span>
          </el-form-item>
          <el-form-item v-if="this.form.investment_subject_nature === '1'" class="form-item-custom" prop="investment_subject_nature_qiye" style="margin-left:30px;">
            <el-select v-if="this.isEditForm" v-model="form.investment_subject_nature_qiye" placeholder="请选择" clearable class="short-form-item">
              <el-option label="重建" value="0" />
              <el-option label="改造" value="1" />
              <el-option label="装修" value="2" />
            </el-select>
            <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 0px;">
              <i class="el-icon-question el-icon-question-custom"></i>
              <div slot="content">注释：国企含央企、地方国企、部分村集体；<br/>民企含村办企业。</div>
            </el-tooltip>
          </el-form-item>
        </div>
      </div>
      <!-- 投资主体性质 end -->

      <!-- 资金来源及金额（建设方投资）（多选）start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">资金来源及金额(建设方投资)(多选)：</span></div>
        <div class="form-item-wrap-custom" style="display:block;width:100%;">
          <el-form-item class="form-item-custom" prop="capital_source_money.checked" style="display:block;width:100%;">
            <el-checkbox-group v-model="form.capital_source_money.checked" @change="handelChange_capital_source_money_checked">

              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="0" name="which_institutions_adress_checked">
                    <span>财政资金(含福彩金)</span>
                  </el-checkbox>
                </div>

                <!-- 财政资金（含福彩金）的多选面板 start -->
                <div class="form-item-panel-custom" v-if="form.capital_source_money.checked.includes('0')" style="width:100%;margin-bottom:15px;">
                  <div class="form-item-title-custom" style="width: 200px;min-width: 200px;">请选择(多选)：</div>
                  <div class="form-item-wrap-custom" style="display:block;width:100%;">
                    <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[0].checked" style="display:block;width:100%;">
                      <el-checkbox-group v-model="form.capital_source_money.checkedMoney[0].checked" @change="handelChange_capital_source_money_checked_0">

                        <!-- 中央福利彩票公益金 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width:180px;height: 52px;">
                            <el-checkbox label="0" name="which_institutions_adress_checked">
                              <span>中央福利彩票公益金</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[0].checked.includes('0')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[0].money[0]">
                                <el-input v-model="form.capital_source_money.checkedMoney[0].money[0]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 中央福利彩票公益金 end -->

                        <!-- 市级财政资金 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width:180px;height: 52px;">
                            <el-checkbox label="1" name="which_institutions_adress_checked">
                              <span>市级财政资金</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[0].checked.includes('1')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[0].money[1]">
                                <el-input v-model="form.capital_source_money.checkedMoney[0].money[1]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 市级财政资金 end -->

                        <!-- 市级福利彩票公益金 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width:180px;height: 52px;">
                            <el-checkbox label="2" name="which_institutions_adress_checked">
                              <span>市级福利彩票公益金</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[0].checked.includes('2')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[0].money[2]">
                                <el-input v-model="form.capital_source_money.checkedMoney[0].money[2]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 市级福利彩票公益金 end -->

                        <!-- 区级财政资金 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width:180px;height: 52px;">
                            <el-checkbox label="3" name="which_institutions_adress_checked">
                              <span>区级财政资金</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[0].checked.includes('3')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[0].money[3]">
                                <el-input v-model="form.capital_source_money.checkedMoney[0].money[3]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 区级财政资金 end -->

                        <!-- 区级福利彩票公益金 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width:180px;height: 52px;">
                            <el-checkbox label="4" name="which_institutions_adress_checked">
                              <span>区级福利彩票公益金</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[0].checked.includes('4')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[0].money[4]">
                                <el-input v-model="form.capital_source_money.checkedMoney[0].money[4]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 区级福利彩票公益金 end -->

                        <!-- 街镇级（含乡）资金 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width:180px;height: 52px;">
                            <el-checkbox label="5" name="which_institutions_adress_checked">
                              <span>街镇级(含乡)资金</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[0].checked.includes('5')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[0].money[5]">
                                <el-input v-model="form.capital_source_money.checkedMoney[0].money[5]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 区级福利彩票公益金 end -->

                      </el-checkbox-group>
                    </el-form-item>
                  </div>
                </div>
                <!-- 财政资金（含福彩金）的多选面板 end -->
              </div>

              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="1" name="which_institutions_adress_checked">
                    <span>自筹资金</span>
                  </el-checkbox>
                </div>

                <!-- 自筹资金 start -->
                <div class="form-item-panel-custom" v-if="form.capital_source_money.checked.includes('1')" style="width:100%;margin-bottom:15px;">
                  <div class="form-item-title-custom" style="width: 200px;min-width: 200px;">请选择(多选)：</div>
                  <div class="form-item-wrap-custom" style="display:block;width:100%;">
                    <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[1].checked" style="display:block;width:100%;">
                      <el-checkbox-group v-model="form.capital_source_money.checkedMoney[1].checked" @change="handelChange_capital_source_money_checked_1">

                        <!-- 企业 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width: 270px;height: 52px;">
                            <el-checkbox label="0" name="which_institutions_adress_checked">
                              <span>企业</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[1].checked.includes('0')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[1].money[0]">
                                <el-input v-model="form.capital_source_money.checkedMoney[1].money[0]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 企业 end -->

                        <!-- 事业单位 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width: 270px;height: 52px;">
                            <el-checkbox label="1" name="which_institutions_adress_checked">
                              <span>事业单位</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[1].checked.includes('1')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[1].money[1]">
                                <el-input v-model="form.capital_source_money.checkedMoney[1].money[1]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 事业单位 end -->

                        <!-- 社会组织 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width: 270px;height: 52px;">
                            <el-checkbox label="2" name="which_institutions_adress_checked">
                              <span>社会组织</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[1].checked.includes('2')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[1].money[2]">
                                <el-input v-model="form.capital_source_money.checkedMoney[1].money[2]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 社会组织 end -->

                        <!-- 群团组织（工青妇残、红十字会等） start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width: 270px;height: 52px;">
                            <el-checkbox label="3" name="which_institutions_adress_checked">
                              <span>群团组织(工青妇残、红十字会等)</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[1].checked.includes('3')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[1].money[3]">
                                <el-input v-model="form.capital_source_money.checkedMoney[1].money[3]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 群团组织（工青妇残、红十字会等） end -->

                        <!-- 村集体 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width: 270px;height: 52px;">
                            <el-checkbox label="4" name="which_institutions_adress_checked">
                              <span>村集体</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[1].checked.includes('4')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[1].money[4]">
                                <el-input v-model="form.capital_source_money.checkedMoney[1].money[4]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 村集体 end -->

                        <!-- 个人 start -->
                        <div class="checkbox-group-block-custom">
                          <div style="width: 270px;height: 52px;">
                            <el-checkbox label="5" name="which_institutions_adress_checked">
                              <span>个人</span>
                            </el-checkbox>
                          </div>
                          <div v-if="form.capital_source_money.checkedMoney[1].checked.includes('5')" class="form-item-panel-custom" style="">
                            <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                            <div class="form-item-wrap-custom">
                              <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[1].money[5]">
                                <el-input v-model="form.capital_source_money.checkedMoney[1].money[5]" placeholder="请输入" clearable class="long-form-item" />
                                <span style="margin-right:5px;">万元</span>
                              </el-form-item>
                            </div>
                          </div>
                        </div>
                        <!-- 个人 end -->

                      </el-checkbox-group>
                    </el-form-item>
                  </div>
                </div>
                <!-- 自筹资金 end -->
              </div>

              <div class="checkbox-group-block-custom">
                <div style="width:200px;height: 52px;">
                  <el-checkbox label="2" name="which_institutions_adress_checked">
                    <span>捐赠资金</span>
                  </el-checkbox>
                </div>

                <!-- 捐赠资金 start -->
                <div v-if="form.capital_source_money.checked.includes('2')" class="form-item-panel-custom" style="">
                  <div class="form-item-title-custom" style="width: 75px;min-width: 75px;">金额：</div>
                  <div class="form-item-wrap-custom">
                    <el-form-item class="form-item-custom" prop="capital_source_money.checkedMoney[2].money">
                      <el-input v-model="form.capital_source_money.checkedMoney[2].money" placeholder="请输入" clearable class="long-form-item" />
                      <span style="margin-right:5px;">万元</span>
                    </el-form-item>
                  </div>
                </div>
                <!-- 捐赠资金 end -->
              </div>

            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 资金来源及金额（建设方投资）（多选）end -->

      <!-- 建设阶段运营方是否带资（不含垫资）： start -->

      <!-- 建设阶段运营方是否带资（不含垫资）： end -->

    </el-form>
  </div>
</template>

<script>
import rulesForm from '../../../js/basic-information-rules-form.js'

export default {
  name: 'InvestmentSubject',
  components: {

	},
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: '',//查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      form:{
        investment_subject_name: '',// 投资主体名称
        investment_subject_nature: '', // 投资主体性质
        investment_subject_nature_qiye: '', // 投资主体性质---企业下拉选项
        // 资金来源及金额（建设方投资）（多选）
        capital_source_money: {
          checked:[],
          checkedMoney:[
            {
              checked:[],
              money:['','','','','','']
            },
            {
              checked:[],
              money:['','','','','','']
            },
            {
              money:''
            }
          ],
        },

      }
    }
  },
  //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  mounted() {
    this.modelType = this.$route.query.modelType;
    if (this.modelType === 'edit') {
      this.isEditForm = true;
    }
    else if (this.modelType === 'add') {
      this.isEditForm = true;
    }
    else if (this.modelType === 'look') {
      this.isEditForm = false;
    }
  },
  methods: {
    // 投资主体性质 change事件
    handelChange_investment_subject_nature(val) {
      this.form.investment_subject_nature_qiye = ''
      this.$emit('watchOperatingModel', val) // 把选中的值传给父组件
    },
    // 资金来源及金额(建设方投资)(多选) 清空子面板的值
    handelChange_capital_source_money_checked(val) {
      // 财政资金(含福彩金)--重置
      if(!val.includes('0')){
        this.form.capital_source_money.checkedMoney[0].checked = []
        this.form.capital_source_money.checkedMoney[0].money = ['','','','','','']
      }
      // 自筹资金--重置
      if(!val.includes('1')){
        this.form.capital_source_money.checkedMoney[1].checked = []
        this.form.capital_source_money.checkedMoney[1].money = ['','','','','','']
      }
      // 捐赠资金--重置
      if(!val.includes('2')){
        this.form.capital_source_money.checkedMoney[2].money = ''
      }
    },
    //  资金来源及金额(建设方投资)(多选)---财政资金（含福彩金）---清空子面板的值
    handelChange_capital_source_money_checked_0(val) {
      this.form.capital_source_money.checkedMoney[0].money.map((item,index)=>{
        if(!val.includes(index+'')){
          this.form.capital_source_money.checkedMoney[0].money[index] = ''
        }
        return true
      })
    },
    //  资金来源及金额(建设方投资)(多选)---自筹资金---清空子面板的值
    handelChange_capital_source_money_checked_1(val) {
      this.form.capital_source_money.checkedMoney[1].money.map((item,index)=>{
        if(!val.includes(index+'')){
          this.form.capital_source_money.checkedMoney[1].money[index] = ''
        }
        return true
      })
    },
    // 建设阶段运营方是否带资(不含垫资) change 事件
    handelClick_is_take_money() {
      this.form.is_take_money.money = ''
    },
     // 回显所有子组件的form字段
    echoAllChildrenForm(allForm){
      this.$refs['formRef'].clearValidate('capital_source_money.checked')
      this.form = {...allForm}
      console.log('this.form.capital_source_money===',this.form.capital_source_money)
      this.$nextTick(() => {
        this.$refs['formRef'].clearValidate()
      })
    },
    // 获取所有子组件的form字段
    getAllChildrenForm(){
      return this.form
    },
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag = null
      this.$refs['formRef'].validate((valid, object) => {
        console.log('投资主体及投入情况---子组件校验----', valid)
        if (valid) {
          flag = true
        } else {
          flag = false
        }
      })
      return flag
    },
  }
}
</script>
