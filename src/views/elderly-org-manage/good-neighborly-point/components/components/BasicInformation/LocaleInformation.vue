<!--【基础信息】---场所信息-->
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">场所信息</el-divider>
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">
      <!-- 名称 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">名称：</span></div>
        <div class="form-item-wrap-custom">
          <span style="height:36px;line-height:36px;padding-right:10px;">上海市</span>
          <el-form-item class="form-item-custom" prop="name_areaStreet">
            <el-cascader
              v-if="this.isEditForm"
              v-model="form.name_areaStreet"
              :options="areaStreetOptions"
              :props="defaultProps"
              clearable
              style="width: 100%"
              placeholder="请选择行政区/街镇"
              class="very-long-form-item"
              @change="areaStreetChange"
            />
            <span v-else>{{form.name_areaStreet_text}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="name_orgName">
            <el-input v-if="this.isEditForm" v-model="form.name_orgName" placeholder="请输入具体名称(必填)" clearable class="long-form-item" />
            <span v-else>{{form.name_orgName}}</span>
          </el-form-item>
          <span style="height:36px;line-height:36px;padding-right:10px;">睦邻点</span>
        </div>
      </div>
      <!-- 名称 end -->

      <!-- 是否被评为市级示范睦邻点 start -->
      <div class="form-item-panel-custom">
              <div class="form-item-title-custom"><span class="mandatory-start-custom">是否被评为市级示范睦邻点：</span></div>
              <div class="form-item-wrap-custom">
                <el-form-item class="form-item-custom" prop="name_top_point">
                        <el-select v-if="this.isEditForm" v-model="form.name_top_point" placeholder="请选择是否被评为市级示范睦邻点" clearable class="long-form-item">
                          <el-option label="请选择(默认项)" value="0" />
                          <el-option label="是" value="1" />
                          <el-option label="否" value="2" />
                        </el-select>
                        <span v-else>{{form.name_top_point}}</span>
                </el-form-item>
              </div>
      </div>
      <!-- 是否被评为市级示范睦邻点 end -->

      <!-- 地址 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">地址：</span></div>
        <div class="form-item-wrap-custom">
          <span style="height:36px;line-height:36px;padding-right:10px;">上海市</span>
          <el-form-item class="form-item-custom" prop="address_areaStreetJuwei">
            <el-cascader
              v-if="this.isEditForm"
              ref="address_areaStreetJuwei"
              v-model="form.address_areaStreetJuwei"
              :options="areaStreetOptions"
              :props="defaultProps"
              clearable
              style="width: 100%"
              placeholder="请选择行政区/街镇/居委"
              class="very-long-form-item"
              @change="areaStreetChange_1"
            />
            <span v-else>{{form.address_areaStreetJuwei}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="address_cunlujie">
            <el-input v-if="this.isEditForm" v-model="form.address_cunlujie" placeholder="请输入村/路/街(必填)" clearable class="long-form-item" />
            <span v-else>{{form.address_cunlujie}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="address_cunlujie_houzhui">
            <el-select v-if="this.isEditForm" v-model="form.address_cunlujie_houzhui" placeholder="请选择村/路/街" clearable class="long-form-item" @change="address_cunlujie_houzhui">
              <el-option
                v-for="item in address_cunlujie_houzhui_option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span v-else>{{form.address_cunlujie_houzhui}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="address_nong">
            <el-input v-if="this.isEditForm" v-model="form.address_nong" placeholder="请输入号/弄/支弄(必填)" clearable class="long-form-item" />
            <span v-else>{{form.address_nong}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="address_nong_houzhui">
            <el-select v-if="this.isEditForm" v-model="form.address_nong_houzhui" placeholder="请选择号/弄/支弄" clearable class="long-form-item" @change="address_nong_houzhui">
              <el-option
                v-for="item in address_nong_houzhui_option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span v-else>{{form.address_nong_houzhui}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="address_address">
            <el-input v-if="this.isEditForm" v-model="form.address_address" placeholder="请输入详细地址" clearable class="long-form-item" />
            <span v-else>{{form.address_address}}</span>
          </el-form-item>
          <span class="preview-btn-custom" @click="handelClickPreview">预览</span>
        </div>
      </div>
      <!-- 地址 end -->

      <!-- 建成时间 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">建成时间：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="build_time">
            <el-date-picker
              v-if="this.isEditForm"
              v-model="form.build_time"
              type="date"
              placeholder="请选择建成时间"
              class="long-form-item">
            </el-date-picker>
            <span v-else>{{form.build_time}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 建成时间 end -->

      <!-- 目前运营状态 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">目前运营状态：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="current_operating_status">
            <el-radio-group v-if="this.isEditForm" v-model="form.current_operating_status" class="radio-item-custom" @change="handelChange_current_operating_status">
              <el-radio label="0">正常</el-radio>
              <el-radio label="1">暂停</el-radio>
              <el-radio label="2">关闭</el-radio>
            </el-radio-group>
            <span v-else>{{form.current_operating_status}}</span>
          </el-form-item>
          <el-form-item v-if="this.form.current_operating_status === '1'" class="form-item-custom" prop="current_operating_status_select" style="margin-left:20px;">
            <el-select v-if="this.isEditForm" v-model="form.current_operating_status_select" placeholder="请选择" clearable class="short-form-item">
              <el-option label="重建" value="0" />
              <el-option label="改造" value="1" />
              <el-option label="装修" value="2" />
            </el-select>
          </el-form-item>
        </div>
      </div>
      <!-- 目前运营状态 end -->

      <!-- 活动场地使用面积 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">活动场地使用面积：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="building_area">
            <el-input v-if="this.isEditForm" v-model="form.building_area" placeholder="请输入场地使用面积" clearable class="long-form-item" />
            <span v-else>{{form.building_area}}</span>
            <span style="margin-right:5px;">平方/米</span>
          </el-form-item>
        </div>
      </div>
      <!-- 活动场地使用面积 end -->

      <!-- 房屋属性 start -->
      <div class="form-item-panel-custom">
              <div class="form-item-title-custom"><span class="mandatory-start-custom">房屋属性：</span></div>
              <div class="form-item-wrap-custom">
                <el-form-item class="form-item-custom" prop="name_house_pro">
                        <el-select v-if="this.isEditForm" v-model="form.name_house_pro" placeholder="请选择房屋属性" clearable class="long-form-item">
                          <el-option label="请选择(默认项)" value="0" />
                          <el-option label="自有住宅" value="1" />
                          <el-option label="其他" value="2" />
                        </el-select>
                        <span v-else>{{form.name_house_pro}}</span>
                </el-form-item>
              </div>
      </div>
      <!-- 房屋属性 end -->

      <!-- 召集人姓名 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">召集人姓名：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="public_enquiry_name">
            <el-input v-if="this.isEditForm" v-model="form.public_enquiry_name" placeholder="" clearable class="long-form-item" />
            <span v-else>{{form.public_enquiry_name}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 召集人姓名 end -->

      <!-- 召集人电话 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">召集人电话：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="public_enquiry_telephone">
            <el-input v-if="this.isEditForm" v-model="form.public_enquiry_telephone" placeholder="请输入手机号" clearable class="long-form-item" />
            <span v-else>{{form.public_enquiry_telephone}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 召集人电话 end -->


      <!-- 图片上传 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">机构图片：</span></div>
        <div class="form-item-wrap-custom">
          <span style="margin-top: 10px;margin-bottom: 15px;color: #999;">（支持jpg/jpeg格式，单张图片最大5M，最多可上传6张机构图片）</span>
          <el-form-item class="form-item-custom" prop="supplier_imgs">
            <upload-image-custom @pics="getPicList" :is-update="isUpdate" :form-imgs="form.org_image_arr"></upload-image-custom>
            <!-- :id-edit="isEditForm" -->
          </el-form-item>
        </div>
      </div>
      <!-- 图片上传 end -->

    </el-form>
  </div>
</template>

<script>
import areaStreetOptions from '@/assets/js/shanghai.js'
import rulesForm from '../../../js/basic-information-rules-form.js'
// 图片上传
import UploadImageCustom from "@/components/UploadImageCustom";
// 默认机构图片
import defaultImgUrl from "@/assets/img/default_org.png";

export default {
  name: 'LocaleInformation',
  components: {
    UploadImageCustom
	},
  data() {
    return {
      isUpdate:false,
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: '',//查看：look  编辑：edit  新增：add
      areaStreetOptions, // 区域街道级联假数据
      rulesForm, // 校验规则
      form:{
        name_areaStreet: [], // 行政区/街镇
        name_areaStreet_text: '', // 行政区/街镇---text
        name_orgName: '', // 详细地址
        name_houzhui: '', // 名称后缀
        name_houzhui_text: '', // 名称后缀---text
        address_areaStreetJuwei: [], // 行政区/街镇/居委
        address_cunlujie: '', // 村路街
        address_cunlujie_houzhui: '0', // 村路街-后缀
        address_nong: '', // 号/弄/支弄
        address_nong_houzhui: '0', // 号/弄/支弄-后缀
        address_address: '', // 详细地址
        name_top_point:'0',//是否被评为市级示范睦邻点
        build_time: '',// 建成时间
        current_operating_status: '',// 目前运营状态
        current_operating_status_select: '',// 【目前运营状态】选择【暂停】时的下拉框选中值
        building_area: '', // 活动场地使用面积
        name_house_pro: '0',//房屋属性
        public_enquiry_name: '' ,// 召集人姓名
        public_enquiry_telephone: '' ,// 召集人电话
        set_style: '', // 设置形式
        individual_area: '',// 其中单独休息区域面积
        // 请选择功能区域(多选)
        functional_area: {
          checked:[],
          building_area:['','','','','']
        },
        // 与哪些服务机构同址(多选)
        which_institutions_adress: {
          checked:[],
          building_area:['','','','','']
        },
        has_last_org_shared_space: '',// 是否与上述机服务机构有共享场地
        has_last_org_shared_space_yes: [] ,// 是否与上述机服务机构有共享场地--选择‘是’
        has_last_org_shared_space_no: [] ,// 是否与上述机服务机构有共享场地--选择‘否’
        floor_information:'',// 楼层信息
        device_configuration: '', // 设备配置
        nature_service_place: '',// 服务场所性质
        nature_service_place_ziyou: '' , //服务场所性质选择‘自有’的下拉框选项值
        nature_service_place_zulin: '' , //服务场所性质选择‘租赁’的下拉框选项值
        service_site_certificate_status: '',// 服务场所(建筑)产证情况
        pass_fire_control_inspection_record:'',// 是否通过消防审验或备案
        org_image_arr: [
          {index:0,name:'default_org.png',url:defaultImgUrl},
          {index:1,name:'default_org.png',url:defaultImgUrl},
          {index:2,name:'default_org.png',url:defaultImgUrl},
          {index:3,name:'default_org.png',url:defaultImgUrl},
          {index:4,name:'default_org.png',url:defaultImgUrl},
          {index:5,name:'default_org.png',url:defaultImgUrl}
        ] ,// 机构图片
      },
      // 级联下拉框的配置属性
      defaultProps: {
        expandTrigger: 'hover',
        children: 'children',
        value: 'code',
        label: 'name'
      },
      // 村路街-后缀 下拉数据
      address_cunlujie_houzhui_option:[
        { value: '0', label: '村' },
        { value: '1', label: '路' },
        { value: '2', label: '街' }
      ],
      // 号/弄/支弄-后缀 下拉数据
      address_nong_houzhui_option:[
        { value: '0', label: '号' },
        { value: '1', label: '弄' },
        { value: '2', label: '支弄' }
      ],
      // 预览地址显示文本
      showPreviewAddress:{
        city: '上海市',
        areaStreetCommitteeArr:[], // 区,街镇,居委
        area: '', // 区
        street: '', // 街镇
        committee: '', // 居委
        village_suffix: '村',// 村路街-后缀
        number_suffix: '号',// 号/弄/支弄-后缀
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
    // 获取机构图片数据
    getPicList(val) {
      this.form.org_image_arr = val
      this.isUpdate = !this.isUpdate
    },
    // 行政区/街镇 二级级联下拉框change事件
    areaStreetChange(value) {
      console.log(value)
    },
    // 行政区/街镇/居委 三级级联下拉框change事件
    areaStreetChange_1(value) {
      let _nodes_ = this.$refs['address_areaStreetJuwei'].getCheckedNodes()
      if(_nodes_ && _nodes_.length > 0){
        this.recursiveCascadeLabel(_nodes_[0])
      }
      else{
        this.showPreviewAddress.areaStreetCommitteeArr = []
      }
      this.showPreviewAddress.area = this.showPreviewAddress.areaStreetCommitteeArr[2] || ''
      this.showPreviewAddress.street = this.showPreviewAddress.areaStreetCommitteeArr[1] || ''
      this.showPreviewAddress.committee = this.showPreviewAddress.areaStreetCommitteeArr[0] || ''
    },
    // 获取级联的label数组
    recursiveCascadeLabel(obj){
      this.showPreviewAddress.areaStreetCommitteeArr.push(obj.label)
      if(obj.parent){
        this.recursiveCascadeLabel(obj.parent)
      }
    },
    // 获取村/路/街的label
    address_cunlujie_houzhui(val) {
      this.address_cunlujie_houzhui_option.filter(item=>{
        if(item.value === val){
          this.showPreviewAddress.village_suffix = item.label
          console.log(this.showPreviewAddress.village_suffix)
        }
        return true
      })
    },
    // 获取号/弄/支弄的label
    address_nong_houzhui(val) {
      this.address_nong_houzhui_option.filter(item=>{
        if(item.value === val){
          this.showPreviewAddress.number_suffix = item.label
          console.log(this.showPreviewAddress.number_suffix)
        }
        return true
      })
    },
    // 目前运营状态change
    handelChange_current_operating_status(val) {
      this.form.current_operating_status_select = ''
    },
    // 设置形式 change 重置子表单的值
    handelChange_set_style() {
      this.form.functional_area={
        checked:[],
        building_area:['','','','','']
      }
      this.form.which_institutions_adress = {
        checked:[],
        building_area:['','','','','']
      }
      this.form.has_last_org_shared_space = ''
      this.form.has_last_org_shared_space_yes = ''
      this.form.has_last_org_shared_space_no = ''
      /**
       * =========================================================================表单验证的BUG=================================================================
       */
      this.$refs.formRef.clearValidate(['which_institutions_adress'])
      this.$refs['formRef'].clearValidate(['which_institutions_adress'])
    },
    // 请选择功能区域（多选）change, 清空对应的面积
    handelChange_functional_area_checked(val) {
      this.form.functional_area.building_area.map((item,index)=>{
        if(!val.includes(index+'')){
          this.form.functional_area.building_area[index] = ''
        }
        return true
      })
    },
    // 与哪些服务机构同址(多选)change, 清空对应的面积
    handelChange_which_institutions_adress_checked(val) {
      this.form.which_institutions_adress.building_area.map((item,index)=>{
        if(!val.includes(index+'')){
          this.form.which_institutions_adress.building_area[index] = ''
        }
        return true
      })
    },
    // 是否与上述机服务机构有共享场地：切换 选项的时候，将子表单的值重置
    handelChange_has_last_org_shared_space(val) {
      this.form.has_last_org_shared_space_yes = []
      this.form.has_last_org_shared_space_no = []
    },
    // 服务场所性质change 切换对应的下拉选项
    handelChange_nature_service_place() {
      this.form.nature_service_place_ziyou = ''
      this.form.nature_service_place_zulin = ''
    },
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag = null
      this.$refs['formRef'].validate((valid, object) => {
        console.log('场所信息----子组件校验----', valid)
        if (valid) {
          flag = true
        } else {
          flag = false
        }
      })
      console.log('场所信息--flag----',flag)
      return flag
    },
    // 预览地址
    handelClickPreview() {
      const address = `上海市${this.showPreviewAddress.area}${this.showPreviewAddress.street}
      ${this.showPreviewAddress.committee}${this.form.address_cunlujie}
      ${this.showPreviewAddress.village_suffix}${this.form.address_nong}
      ${this.showPreviewAddress.number_suffix}${this.form.address_address}`
      this.$alert(address, '预览地址', {
        confirmButtonText: '知道了'
      })
    }
  }
}
</script>
