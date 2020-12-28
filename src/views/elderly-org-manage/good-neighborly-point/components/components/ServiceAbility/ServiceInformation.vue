<!--【服务能力】---服务能力-->
<template>
  <div>
    <!-- <el-divider content-position="left" class="divider-custom">服务信息(基本服务)</el-divider> -->
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">


      <!-- 服务信息(基本服务)（多选）start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">服务信息(基本服务)：</span></div>
        <div class="form-item-wrap-custom" style="display:block;width:100%;">
          <el-form-item class="form-item-custom" prop="cmns.checked" style="display:block;width:100%;">
            <el-checkbox-group v-model="form.cmns.checked" @change="handelChange_cmns">
              <!-- 邻里社交 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="0" name="which_neighborhood_social_checked">
                    <span>邻里社交</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 邻里社交 end -->

              <!-- 助餐 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="1" name="which_buffet_checked">
                    <span>助餐</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 助餐 end -->
              <!-- 助餐选中后显示  start -->
              <div v-if="form.cmns.checked.includes('1')" class="hidden-form-wrap-custom" style="margin-bottom:15px;">
                 <div class="form-item-wrap-custom">
                   <!-- <div class="form-item-title-custom"><span class="">供餐方式：</span></div> -->
                   <el-form-item class="form-item-custom" prop="name_serve_meals">
                           <el-select v-if="this.isEditForm" v-model="form.name_serve_meals" placeholder="请选择供餐方式" clearable class="long-form-item">
                             <el-option label="请选择(默认项)" value="0" />
                             <el-option label="睦邻点自行烹饪" value="1" />
                             <el-option label="送餐到睦邻点集中供餐" value="2" />
                           </el-select>
                           <span v-else>{{form.name_serve_meals}}</span>
                   </el-form-item>
                 </div>
                 <div class="form-item-panel-custom">
                   <div class="form-item-title-custom"><span class="mandatory-start-custom">每日用餐人数：</span></div>
                   <div class="form-item-wrap-custom">
                             <el-form-item class="form-item-custom" prop="day_eat_number">
                               <el-input v-if="this.isEditForm" v-model="form.day_eat_number" placeholder="请输入每日用餐人数" clearable class="long-form-item" />
                               <span v-else>{{form.day_eat_number}}</span>
                             </el-form-item>
                   </div>
                 </div>
              </div>
              <!-- 助餐选中后显示  end -->

              <!-- 互助服务 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="2" name="which_mutual_help_checked">
                    <span>互助服务</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 互助服务 end -->
              <!-- 互助服务选中后显示  start -->
              <div v-if="form.cmns.checked.includes('2')" class="hidden-form-wrap-custom" style="margin-bottom:15px;">
                 <div class="form-item-panel-custom">
                   <div class="form-item-title-custom"><span class="">请选择(多选)：</span></div>
                   <div class="checkbox-group-block-custom">
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="3" name="which_help_bath_checked">
                         <span>助浴</span>
                       </el-checkbox>
                     </div>
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="4" name="which_washing_checked">
                         <span>洗涤</span>
                       </el-checkbox>
                     </div>
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="5" name="which_charge_affaires_checked">
                         <span>代办</span>
                       </el-checkbox>
                     </div>
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="6" name="which_help_medical_checked">
                         <span>助医</span>
                       </el-checkbox>
                     </div>
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="7" name="which_chatting_service_checked">
                         <span>陪聊</span>
                       </el-checkbox>
                     </div>

                     <!-- 其他 start -->
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="8" name="which_help_other_checked">
                         <span>其他</span>
                       </el-checkbox>
                     </div>
                     <div v-if="form.cmns.checked.includes('8')" class="form-item-wrap-custom">
                       <el-form-item class="form-item-custom" prop="cmns_help_other">
                         <el-input v-model="form.cmns_help_other" placeholder="请输入(必填)" clearable class="long-form-item" />
                       </el-form-item>
                     </div>
                     <!-- 其他 end -->
                   </div>
                 </div>
              </div>
              <!-- 互助服务选中后显示  end -->


              <!-- 供需对接 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="9" name="which_institutions_adress_checked">
                    <span>供需对接</span>
                  </el-checkbox>
                </div>

              </div>
              <!-- 供需对接 end -->
              <!-- 供需对接选中后显示  start -->
              <div v-if="form.cmns.checked.includes('9')" class="hidden-form-wrap-custom" style="margin-bottom:15px;">
                 <div class="form-item-panel-custom">
                   <div class="form-item-title-custom"><span class="">请选择(多选)：</span></div>
                   <div class="checkbox-group-block-custom">
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="10" name="which_pension_service_checked">
                         <span>养老服务咨询代办</span>
                       </el-checkbox>
                     </div>
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="11" name="which_volunteer_public_checked">
                         <span>志愿和公益服务配送</span>
                       </el-checkbox>
                     </div>
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="12" name="which_demand_for_transfer_checked">
                         <span>服务需求传递</span>
                       </el-checkbox>
                     </div>
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="13" name="which_publicity_checked">
                         <span>为老服务政策和公共服务宣传</span>
                       </el-checkbox>
                     </div>
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="14" name="which_pension_advisers_checked">
                         <span>是否有养老顾问</span>
                       </el-checkbox>
                     </div>

                     <!-- 其他 start -->
                     <div style="width:250px;height: 52px;">
                       <el-checkbox label="15" name="which_other_checked">
                         <span>其他</span>
                       </el-checkbox>
                     </div>
                     <div v-if="form.cmns.checked.includes('15')" class="form-item-wrap-custom">
                       <el-form-item class="form-item-custom" prop="cmns_other">
                         <el-input v-model="form.cmns_other" placeholder="请输入(必填)" clearable class="long-form-item" />
                       </el-form-item>
                     </div>
                     <!-- 其他 end -->


                   </div>
                 </div>


              </div>
              <!-- 供需对接选中后显示  end -->

            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 服务信息(基本服务)（多选）end -->


    </el-form>


  </div>
</template>

<script>
  import rulesForm from '../../../js/service-ability-rules-form.js'

  export default {
    name: 'ServiceInformation',
    components: {

    },
    data() {
      return {
        isUpdate: false,
        isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
        modelType: '', //查看：look  编辑：edit  新增：add
        rulesForm, // 校验规则
        form: {
          // 医养结合情况
          cmtnc: {
            checked: [], // 医养结合情况选中
            orgName: [''], // 签约机构名称
            nursingStationName: [''], // 合作护理站名称
            other: '', // 其他
          },
          // 医养结合服务（多选）
          cmns: {
            checked: [], // 医养结合服务选中
            other: '', // 其他
          },
          // 日间托养服务（多选）
          day_care_service: {
            checked: [], // 日间托养服务选中
            other: '', // 其他
          },
          // 个性化服务（多选）
          personalized_service: {
            checked: [], // 个性化服务选中
            other: '', // 其他
          },
          // 延展服务（多选）
          extended_service: {
            checked: [], // 延展服务
            other: '', // 其他
          },
        }
      }
    },
    //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
    mounted() {
      this.modelType = this.$route.query.modelType;
      if (this.modelType === 'edit') {
        this.isEditForm = true;
      } else if (this.modelType === 'add') {
        this.isEditForm = true;
      } else if (this.modelType === 'look') {
        this.isEditForm = false;
      }
    },
    methods: {
      // 医养结合情况(多选) change 事件
      handelChange_cmtnc(val) {
        // 与医院、社区卫生服务中心(或分中心、医务室)签约并定期开展服务--重置
        if (!val.includes('1')) {
          this.form.cmtnc.orgName = ['']
        }
        // 设有合作护理站或与护理站合作，由护理站工作人员来机构提供服务--重置
        if (!val.includes('2')) {
          this.form.cmtnc.nursingStationName = ['']
        }
        // 其他--重置
        if (!val.includes('3')) {
          this.form.cmtnc.other = ''
        }
      },
      // 添加‘签约机构名称’
      addOrgName() {
        if (this.form.cmtnc.orgName.length >= 6) {
          this.$message.warning('最多添加6个！')
        } else {
          this.form.cmtnc.orgName.push('')
        }
      },
      // 删除‘签约机构名称’
      removeOrgName(val) {
        if (this.form.cmtnc.orgName && this.form.cmtnc.orgName.length > 0) {
          let arr = this.form.cmtnc.orgName.filter((item, index) => {
            return index !== val
          })
          this.form.cmtnc.orgName = arr
        }
      },
      // 添加‘合作护理站名称’
      addNursingStationName() {
        if (this.form.cmtnc.nursingStationName.length >= 6) {
          this.$message.warning('最多添加6个！')
        } else {
          this.form.cmtnc.nursingStationName.push('')
        }
      },
      // 删除‘合作护理站名称’
      removeNursingStationName(val) {
        if (this.form.cmtnc.nursingStationName && this.form.cmtnc.nursingStationName.length > 0) {
          let arr = this.form.cmtnc.nursingStationName.filter((item, index) => {
            return index !== val
          })
          this.form.cmtnc.nursingStationName = arr
        }
      },
      // 医养结合服务(多选) change 事件
      handelChange_cmns(val) {
        // 其他--重置
        if (!val.includes('3')) {
          this.form.cmns.other = ''
        }
      },
      // 日间托养服务(多选) change 事件
      handelChange_day_care_service(val) {
        // 其他--重置
        if (!val.includes('4')) {
          this.form.day_care_service.other = ''
        }
      },
      // 个性化服务(多选) change 事件
      handelChange_personalized_service(val) {
        // 其他--重置
        if (!val.includes('4')) {
          this.form.personalized_service.other = ''
        }
      },
      // 延展服务（多选）
      handelChange_extended_service(val) {
        // 其他--重置
        if (!val.includes('2')) {
          this.form.extended_service.other = ''
        }
      },
      // 子组件校验，传递到父组件
      childrenValidateForm() {
        let flag1 = null
        let flag2 = null
        this.$refs['formRef'].validate((valid, object) => {
          console.log('服务信息（基本服务）----子组件校验----', valid)
          if (valid) {
            flag1 = true
          } else {
            flag1 = false
          }
        })
        this.$refs['formRef2'].validate((valid, object) => {
          console.log('延展服务----子组件校验----', valid)
          if (valid) {
            flag2 = true
          } else {
            flag2 = false
          }
        })
        return flag1 && flag2
      },
    }
  }
</script>

<style lang="scss" scoped>
  .add-btn-inline-custom {
    margin-right: 5px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    padding: 0 15px;
    border: 1px solid #afe39e;
    border-radius: 4px;
    background-color: #bfecb82e;
    cursor: pointer;
  }

  .add-btn-inline-custom:hover {
    background-color: #81e6722e;
  }

  .remove-btn-inline-custom {
    margin-right: 5px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    padding: 0 15px;
    border: 1px solid #efa87e;
    border-radius: 4px;
    background-color: #ecd5b82e;
    cursor: pointer;
  }

  .remove-btn-inline-custom:hover {
    background-color: #f1b66d2e;
  }
</style>
