<!--【服务能力】---服务信息(基本服务)-->
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">服务信息(基本服务)</el-divider>
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">
      <!-- 医养结合情况（多选）start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">医养结合情况(多选)：</span></div>
        <div class="form-item-wrap-custom" style="display:block;width:100%;">
          <el-form-item class="form-item-custom" prop="cmtnc.checked" style="display:block;width:100%;">
            <el-checkbox-group v-model="form.cmtnc.checked" @change="handelChange_cmtnc">
              <!-- 与社区卫生服务中心（或分中心、医务室）等医疗设施临近或同址 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="0" name="which_institutions_adress_checked">
                    <span>与社区卫生服务中心(或分中心、医务室)等医疗设施临近或同址</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 与社区卫生服务中心（或分中心、医务室）等医疗设施临近或同址 end -->

              <!-- 与医院、社区卫生服务中心（或分中心、医务室）签约并定期开展服务 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="1" name="which_institutions_adress_checked">
                    <span>与医院、社区卫生服务中心(或分中心、医务室)签约并定期开展服务</span>
                  </el-checkbox>
                </div>
                <div v-if="form.cmtnc.checked.includes('1')" style="width:100%;">
                  <div v-for="(item,index) in form.cmtnc.orgName" :key="index" class="form-item-panel-custom hidden-form-wrap-custom" style="width:100%;">
                    <div class="form-item-title-custom" >签约机构名称：</div>
                    <div class="form-item-wrap-custom">
                      <el-form-item class="form-item-custom" :prop="'cmtnc.orgName['+index+']'">
                        <el-input v-model="form.cmtnc.orgName[index]" placeholder="请输入" clearable class="long-form-item" />
                        <span class="remove-btn-inline-custom" v-show="form.cmtnc.orgName.length > 1" @click="removeOrgName(index)">删除</span>
                        <span class="add-btn-inline-custom" v-show="(form.cmtnc.orgName.length-1) === index" @click="addOrgName">添加</span>
                      </el-form-item>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 与医院、社区卫生服务中心（或分中心、医务室）签约并定期开展服务 end -->

              <!-- 设有合作护理站或与护理站合作，由护理站工作人员来机构提供服务 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="2" name="which_institutions_adress_checked">
                    <span>设有合作护理站或与护理站合作，由护理站工作人员来机构提供服务</span>
                  </el-checkbox>
                </div>
                <div v-if="form.cmtnc.checked.includes('2')" style="width:100%;">
                  <div v-for="(item,index) in form.cmtnc.nursingStationName" :key="index" class="form-item-panel-custom hidden-form-wrap-custom" style="width:100%;">
                      <div class="form-item-title-custom" >合作护理站名称：</div>
                      <div class="form-item-wrap-custom">
                        <el-form-item class="form-item-custom" :prop="'cmtnc.nursingStationName['+index+']'">
                          <el-input v-model="form.cmtnc.nursingStationName[index]" placeholder="请输入" clearable class="long-form-item" />
                          <span class="remove-btn-inline-custom" v-show="form.cmtnc.nursingStationName.length > 1" @click="removeNursingStationName(index)">删除</span>
                          <span class="add-btn-inline-custom" v-show="(form.cmtnc.nursingStationName.length-1) === index" @click="addNursingStationName">添加</span>
                        </el-form-item>
                      </div>
                    </div>
                </div>
              </div>
              <!-- 设有合作护理站或与护理站合作，由护理站工作人员来机构提供服务 end -->

              <!-- 其他 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="3" name="which_institutions_adress_checked">
                    <span>其他</span>
                  </el-checkbox>
                </div>
                <div v-if="form.cmtnc.checked.includes('3')" class="form-item-wrap-custom">
                  <el-form-item class="form-item-custom" prop="cmtnc.other">
                    <el-input v-model="form.cmtnc.other" placeholder="请输入" clearable class="long-form-item" />
                  </el-form-item>
                </div>
              </div>
              <!-- 其他 end -->

            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 医养结合情况（多选）end -->

      <!-- 医养结合服务（多选）start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">医养结合服务(多选)：</span></div>
        <div class="form-item-wrap-custom" style="display:block;width:100%;">
          <el-form-item class="form-item-custom" prop="cmns.checked" style="display:block;width:100%;">
            <el-checkbox-group v-model="form.cmns.checked" @change="handelChange_cmns">
              <!-- 健康管理 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="0" name="which_institutions_adress_checked">
                    <span>健康管理</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 健康管理 end -->

              <!-- 预防保健 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="1" name="which_institutions_adress_checked">
                    <span>预防保健</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 预防保健 end -->

              <!-- 医疗护理 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="2" name="which_institutions_adress_checked">
                    <span>医疗护理</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 医疗护理 end -->

              <!-- 其他 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="3" name="which_institutions_adress_checked">
                    <span>其他</span>
                  </el-checkbox>
                </div>
                <div v-if="form.cmns.checked.includes('3')" class="form-item-wrap-custom">
                  <el-form-item class="form-item-custom" prop="cmns.other">
                    <el-input v-model="form.cmns.other" placeholder="请输入" clearable class="long-form-item" />
                  </el-form-item>
                </div>
              </div>
              <!-- 其他 end -->

            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 医养结合服务（多选）end -->

      <!-- 日间托养服务（多选）start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">日间托养服务(多选)：</span></div>
        <div class="form-item-wrap-custom" style="display:block;width:100%;">
          <el-form-item class="form-item-custom" prop="day_care_service.checked" style="display:block;width:100%;">
            <el-checkbox-group v-model="form.day_care_service.checked" @change="handelChange_day_care_service">
              <!-- 生活照料 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="0" name="which_institutions_adress_checked">
                    <span>生活照料</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 生活照料 end -->

              <!-- 生活护理 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="1" name="which_institutions_adress_checked">
                    <span>生活护理</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 生活护理 end -->

              <!-- 膳食供应 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="2" name="which_institutions_adress_checked">
                    <span>膳食供应</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 膳食供应 end -->

              <!-- 精神慰藉 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="3" name="which_institutions_adress_checked">
                    <span>精神慰藉</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 精神慰藉 end -->

              <!-- 其他 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="4" name="which_institutions_adress_checked">
                    <span>其他</span>
                  </el-checkbox>
                </div>
                <div v-if="form.day_care_service.checked.includes('4')" class="form-item-wrap-custom">
                  <el-form-item class="form-item-custom" prop="day_care_service.other">
                    <el-input v-model="form.day_care_service.other" placeholder="请输入" clearable class="long-form-item" />
                  </el-form-item>
                </div>
              </div>
              <!-- 其他 end -->

            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 日间托养服务（多选）end -->

      <!-- 个性化服务（多选）start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">个性化服务(多选)：</span></div>
        <div class="form-item-wrap-custom" style="display:block;width:100%;">
          <el-form-item class="form-item-custom" prop="personalized_service.checked" style="display:block;width:100%;">
            <el-checkbox-group v-model="form.personalized_service.checked" @change="handelChange_personalized_service">
              <!-- 交通接送 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="0" name="which_institutions_adress_checked">
                    <span>交通接送</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 交通接送 end -->

              <!-- 生活辅助 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="1" name="which_institutions_adress_checked">
                    <span>生活辅助</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 生活辅助 end -->

              <!-- 早托 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="2" name="which_institutions_adress_checked">
                    <span>早托</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 早托 end -->

              <!-- 晚托 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="3" name="which_institutions_adress_checked">
                    <span>晚托</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 晚托 end -->

              <!-- 其他 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="4" name="which_institutions_adress_checked">
                    <span>其他</span>
                  </el-checkbox>
                </div>
                <div v-if="form.personalized_service.checked.includes('4')" class="form-item-wrap-custom">
                  <el-form-item class="form-item-custom" prop="personalized_service.other">
                    <el-input v-model="form.personalized_service.other" placeholder="请输入" clearable class="long-form-item" />
                  </el-form-item>
                </div>
              </div>
              <!-- 其他 end -->

            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 个性化服务（多选）end -->
    </el-form>

    <el-divider content-position="left" class="divider-custom">延展服务</el-divider>
    <el-form ref="formRef2" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">
      <!-- 延展服务（多选）start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">延展服务(多选)：</span></div>
        <div class="form-item-wrap-custom" style="display:block;width:100%;">
          <el-form-item class="form-item-custom" prop="extended_service.checked" style="display:block;width:100%;">
            <el-checkbox-group v-model="form.extended_service.checked" @change="handelChange_extended_service">
              <!-- 上门开展居家照护服务 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="0" name="which_institutions_adress_checked">
                    <span>上门开展居家照护服务</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 上门开展居家照护服务 end -->

              <!-- 康复辅具租赁/展示 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="1" name="which_institutions_adress_checked">
                    <span>康复辅具租赁/展示</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 康复辅具租赁/展示 end -->

              <!-- 其他 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="2" name="which_institutions_adress_checked">
                    <span>其他</span>
                  </el-checkbox>
                </div>
                <div v-if="form.extended_service.checked.includes('2')" class="form-item-wrap-custom">
                  <el-form-item class="form-item-custom" prop="extended_service.other">
                    <el-input v-model="form.extended_service.other" placeholder="请输入" clearable class="long-form-item" />
                  </el-form-item>
                </div>
              </div>
              <!-- 其他 end -->

            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 延展服务（多选）end -->
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
      isUpdate:false,
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: '',//查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      form:{
        // 医养结合情况
        cmtnc:{
          checked:[], // 医养结合情况选中
          orgName:[''] ,// 签约机构名称
          nursingStationName:[''], // 合作护理站名称
          other:'',// 其他
        },
        // 医养结合服务（多选）
        cmns: {
          checked:[],//医养结合服务（多选）
          other:'',// 其他
        },
        // 日间托养服务（多选）
        day_care_service: {
          checked:[], // 日间托养服务选中
          other:'',// 其他
        },
        // 个性化服务（多选）
        personalized_service: {
          checked:[], // 个性化服务选中
          other:'',// 其他
        },
        // 延展服务（多选）
        extended_service: {
          checked:[], // 延展服务
          other:'',// 其他
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
    // 医养结合情况(多选) change 事件
    handelChange_cmtnc(val) {
      // 与医院、社区卫生服务中心(或分中心、医务室)签约并定期开展服务--重置
      if(!val.includes('1')){
        this.form.cmtnc.orgName = ['']
      }
      // 设有合作护理站或与护理站合作，由护理站工作人员来机构提供服务--重置
      if(!val.includes('2')){
        this.form.cmtnc.nursingStationName = ['']
      }
      // 其他--重置
      if(!val.includes('3')){
        this.form.cmtnc.other = ''
      }
    },
    // 添加‘签约机构名称’
    addOrgName() {
      if(this.form.cmtnc.orgName.length >= 6){
        this.$message.warning('最多添加6个！')
      }
      else{
        this.form.cmtnc.orgName.push('')
      }
    },
    // 删除‘签约机构名称’
    removeOrgName(val) {
      if(this.form.cmtnc.orgName && this.form.cmtnc.orgName.length > 0){
        let arr = this.form.cmtnc.orgName.filter((item,index)=>{
          return index !== val
        })
        this.form.cmtnc.orgName = arr
      }
    },
    // 添加‘合作护理站名称’
    addNursingStationName() {
      if(this.form.cmtnc.nursingStationName.length >= 6){
        this.$message.warning('最多添加6个！')
      }
      else{
        this.form.cmtnc.nursingStationName.push('')
      }
    },
    // 删除‘合作护理站名称’
    removeNursingStationName(val) {
      if(this.form.cmtnc.nursingStationName && this.form.cmtnc.nursingStationName.length > 0){
        let arr = this.form.cmtnc.nursingStationName.filter((item,index)=>{
          return index !== val
        })
        this.form.cmtnc.nursingStationName = arr
      }
    },
    // 医养结合服务(多选) change 事件
    handelChange_cmns(val) {
      // 其他--重置
      if(!val.includes('3')){
        this.form.cmns.other = ''
      }
    },
    // 日间托养服务(多选) change 事件
    handelChange_day_care_service(val) {
      // 其他--重置
      if(!val.includes('4')){
        this.form.day_care_service.other = ''
      }
    },
    // 个性化服务(多选) change 事件
    handelChange_personalized_service(val) {
      // 其他--重置
      if(!val.includes('4')){
        this.form.personalized_service.other = ''
      }
    },
    // 延展服务（多选）
    handelChange_extended_service(val) {
      // 其他--重置
      if(!val.includes('2')){
        this.form.extended_service.other = ''
      }
    },
    // 回显所有子组件的form字段
    echoAllChildrenForm(allForm){
      this.form = {...allForm}
      this.$nextTick(() => {
        this.$refs['formRef'].clearValidate()
        this.$refs['formRef2'].clearValidate()
      })
    },
    // 获取所有子组件的form字段
    getAllChildrenForm(){
      return this.form
    },
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag1 = null
      let flag2 = null
      this.$refs['formRef'].validate((valid, object) => {
        console.log('【服务能力】---服务信息(基本服务)----', valid)
        if (valid) {
          flag1 = true
        } else {
          flag1 = false
        }
      })
      this.$refs['formRef2'].validate((valid, object) => {
        console.log('【服务能力】---延展服务----', valid)
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
  .add-btn-inline-custom{
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
  .add-btn-inline-custom:hover{
    background-color: #81e6722e;
  }
  .remove-btn-inline-custom{
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
  .remove-btn-inline-custom:hover{
    background-color: #f1b66d2e;
  }
</style>
