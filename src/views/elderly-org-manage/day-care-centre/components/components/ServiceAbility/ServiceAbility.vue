<!--【服务能力】---服务能力-->
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">服务能力</el-divider>
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">

      <!-- 托位 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">托位：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="day_care_seat">
            <el-input v-if="this.isEditForm" v-model="form.day_care_seat" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.day_care_seat}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 托位 end -->

      <!-- 签约服务人数 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">签约服务人数：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="service_contract_number">
            <el-input v-if="this.isEditForm" v-model="form.service_contract_number" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.service_contract_number}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 签约服务人数 end -->

      <!-- 日均服务量 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">日均服务量：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="average_service_volume">
            <el-input v-if="this.isEditForm" v-model="form.average_service_volume" placeholder="请输入" clearable class="long-form-item" />
            <span v-else>{{form.average_service_volume}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 日均服务量 end -->

      <!-- 是否长护险定点机构 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom" style="color: #C0C4CC;">是否长护险定点机构：</div>
        <div class="form-item-wrap-custom">
          <el-tooltip class="item" effect="dark" content="提示：系统自动比对" placement="top">
            <el-form-item class="form-item-custom" prop="is_long_nursing_risks_org">
              <el-radio-group v-if="this.isEditForm" v-model="form.is_long_nursing_risks_org" class="radio-item-custom" disabled>
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
              </el-radio-group>
              <span v-else>{{form.is_long_nursing_risks_org}}</span>
            </el-form-item>
          </el-tooltip>
        </div>
      </div>
      <!-- 是否长护险定点机构 end -->

      <!-- 服务对象（多选）start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">服务对象(多选)：</span></div>
        <div class="form-item-wrap-custom" style="display:block;width:100%;">
          <el-form-item class="form-item-custom" prop="service_object.checked" style="display:block;width:100%;">
            <el-checkbox-group v-model="form.service_object.checked" @change="handelChange_service_object">
              <!-- 自理老人 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="0" name="which_institutions_adress_checked">
                    <span>自理老人</span>
                  </el-checkbox>
                </div>
              </div>
              <!-- 自理老人 end -->

              <!-- 有照护等级的老人 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="1" name="which_institutions_adress_checked">
                    <span>有照护等级的老人</span>
                  </el-checkbox>
                </div>
                <div v-if="form.service_object.checked.includes('1')" class="form-item-panel-custom hidden-form-wrap-custom" style="width: 100%;">
                  <div class="form-item-title-custom">请选择(多选)：</div>
                  <div class="form-item-wrap-custom" style="width:100%;">
                    <el-form-item class="form-item-custom" style="width:100%;" prop="service_object.level_care_people">
                      <el-checkbox-group v-model="form.service_object.level_care_people" style="width:100%;display: flex;flex-wrap: wrap;">
                        <div class="checkbox-group-block-custom" style="width:150px;">
                          <div style="height: 52px;">
                            <el-checkbox label="0" name="level_care_people">
                              <span>一级</span>
                            </el-checkbox>
                          </div>
                        </div>
                        <div class="checkbox-group-block-custom" style="width:150px;">
                          <div style="height: 52px;">
                            <el-checkbox label="1" name="level_care_people">
                              <span>二级</span>
                            </el-checkbox>
                          </div>
                        </div>
                        <div class="checkbox-group-block-custom" style="width:150px;">
                          <div style="height: 52px;">
                            <el-checkbox label="2" name="level_care_people">
                              <span>三级</span>
                            </el-checkbox>
                          </div>
                        </div>
                        <div class="checkbox-group-block-custom" style="width:150px;">
                          <div style="height: 52px;">
                            <el-checkbox label="3" name="level_care_people">
                              <span>四级</span>
                            </el-checkbox>
                          </div>
                        </div>
                        <div class="checkbox-group-block-custom" style="width:150px;">
                          <div style="height: 52px;">
                            <el-checkbox label="4" name="level_care_people">
                              <span>五级</span>
                            </el-checkbox>
                          </div>
                        </div>
                        <div class="checkbox-group-block-custom" style="width:150px;">
                          <div style="height: 52px;">
                            <el-checkbox label="5" name="level_care_people">
                              <span>六级</span>
                            </el-checkbox>
                          </div>
                        </div>
                      </el-checkbox-group>
                    </el-form-item>
                  </div>
                </div>
              </div>
              <!-- 有照护等级的老人 end -->

              <!-- 认知障碍老人 start -->
              <div class="checkbox-group-block-custom">
                <div style="width:250px;height: 52px;">
                  <el-checkbox label="2" name="which_institutions_adress_checked">
                    <span>认知障碍老人</span>
                  </el-checkbox>
                </div>
                <div v-if="form.service_object.checked.includes('2')" class="form-item-panel-custom hidden-form-wrap-custom" style="width: 100%;">
                  <div class="form-item-title-custom">请选择(多选)：</div>
                  <div class="form-item-wrap-custom">
                    <el-form-item class="form-item-custom" prop="service_object.cognitive_disorder_people">
                      <el-radio-group v-if="this.isEditForm" v-model="form.service_object.cognitive_disorder_people" class="radio-item-custom">
                        <el-radio label="0">只收住</el-radio>
                        <el-radio label="1">部分收住</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                </div>
              </div>
              <!-- 认知障碍老人 end -->
            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
      <!-- 服务对象（多选）end -->

      <div style="display: flex;">
        <!-- 服务范围 start -->
        <div class="form-item-panel-custom" style="width:50%;">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">服务范围：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="service_range">
              <el-select v-if="this.isEditForm" v-model="form.service_range" placeholder="请选择" clearable class="long-form-item">
                <el-option label="不限" value="0" />
                <el-option label="本市老人" value="1" />
                <el-option label="本区老人" value="2" />
                <el-option label="本街道老人" value="3" />
                <el-option label="本居村委老人" value="4" />
              </el-select>
              <span v-else>{{form.service_range}}</span>
            </el-form-item>
          </div>

          <span style="height: 52px;font-size: 24px;line-height: 36px;min-width:70px;text-align:center;">&amp;</span>

          <!-- 是否收住前项范围内的常驻人口 start -->
          <div class="form-item-title-custom" style="width: 280px;min-width: 280px;"><span class="mandatory-start-custom">是否收住前项范围内的常驻人口：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_resident_population">
              <el-select v-if="this.isEditForm" v-model="form.is_resident_population" placeholder="请选择" clearable class="short-form-item">
                <el-option label="是" value="1" />
                <el-option label="否" value="0" />
              </el-select>
              <span v-else>{{form.is_resident_population}}</span>
            </el-form-item>
          </div>
          <!-- 是否收住前项范围内的常驻人口 end -->

        </div>
        <!-- 服务范围 end -->
      </div>

    </el-form>
  </div>
</template>

<script>
import rulesForm from '../../../js/service-ability-rules-form.js'

export default {
  name: 'ServiceAbility',
  components: {

	},
  data() {
    return {
      isUpdate:false,
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: '',//查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      form:{
        day_care_seat: '',// 托位
        service_contract_number:'',// 签约服务人数
        average_service_volume:'',// 日均服务量
        is_long_nursing_risks_org:'',//是否长护险定点机构
        // 服务对象
        service_object:{
          checked:[],
          level_care_people:[],// 有照护等级的老人
          cognitive_disorder_people:'',// 认知障碍老人
        },
        service_range:'',// 服务范围
        is_resident_population:'',// 是否收住前项范围内的常驻人口
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
    // 服务对象（多选）change 事件
    handelChange_service_object(val) {
      if(val && val.length > 0){
        // 有照护等级的老人--重置
        if(!val.includes('1')){
          this.form.service_object.level_care_people = []
        }
        // 认知障碍老人--重置
        if(!val.includes('2')){
          this.form.service_object.cognitive_disorder_people = ''
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
    childrenValidateForm () {
      let flag = null
      this.$refs['formRef'].validate((valid, object) => {
        console.log('【服务能力】---服务能力----', valid)
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
