/**
 * 基础信息
 * 表单验证规则
 */
const rulesForm = {
  // 行政区/街镇
  name_areaStreet:[{ required: true, message: '请选择', trigger: 'change' }],
  // 具体名称
  name_orgName:[
    { required: true, message:'请输入', trigger: 'blur' },
    { max: 100, message: '具体名称不能超过100个字符', trigger: 'blur' }
  ],
  // 名称后缀
  name_houzhui:[{ required: true, message: '请选择', trigger: 'change' }],
  // 选择行政区/街镇/居委
  address_areaStreetJuwei:[{ required: true, message: '请选择', trigger: 'change' }],
  // 请输入村/路/街(必填)
  address_cunlujie:[
    { required: true, message: '请输入', trigger: 'blur' },
    { max: 100, message: '村/路/街不能超过100个字符', trigger: 'blur' }
  ],
  // 请选择村/路/街
  address_cunlujie_houzhui:[{ required: true, message: '请选择', trigger: 'change' }],
  // 请输入号/弄/支弄(必填)
  address_nong:[
    { required: true, message: '请输入', trigger: 'blur' },
    { max: 100, message: '号/弄/支弄不能超过100个字符', trigger: 'blur' }
  ],
  // 请选择号/弄/支弄
  address_nong_houzhui:[{ required: true, message: '请选择', trigger: 'change' }],
  // 请输入详细地址
  // address_address:[
  //   { required: true, message: '请输入详细地址', trigger: 'blur' },
  //   { max: 100, message: '详细地址不能超过100个字符', trigger: 'blur' }
  // ],
  // 建成时间
  build_time:[{ required: true, message: '请选择', trigger: 'change' }],
  // 公开咨询电话
  public_enquiry_telephone:[{ required: true, message: '请输入', trigger: 'blur' }],
  // 目前运营状态
  current_operating_status:[{ required: true, message: '请选择', trigger: 'change' }],
  // 目前运营状态--选择暂停--时的下拉框选项值
  current_operating_status_select:[{ required: true, message: '请选择', trigger: 'change' }],
  // 设置形式
  set_style:[{ required: true, message: '请选择', trigger: 'change' }],
  // 建筑面积
  building_area:[{ required: true, message: '请输入', trigger: 'blur' }],
  // 其中单独休息区域面积
  // individual_area:[{ required: true, message: '请输入单独休息区域面积', trigger: 'blur' }],
  // 与哪些服务机构同址
  'which_institutions_adress.checked':[{ required: true, message: '请选择', trigger: 'change' }],
  // 与哪些服务机构同址---建筑面积
  'which_institutions_adress.building_area[0]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'which_institutions_adress.building_area[1]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'which_institutions_adress.building_area[2]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'which_institutions_adress.building_area[3]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'which_institutions_adress.building_area[4]':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 是否与上述机服务机构有共享场地
  has_last_org_shared_space:[{ required: true, message: '请选择', trigger: 'change' }],
  // 楼层信息
  floor_information:[{ required: true, message: '请选择', trigger: 'change' }],
  // 设备配置
  device_configuration:[{ required: true, message: '请选择', trigger: 'change' }],
  // 服务场所性质
  nature_service_place:[{ required: true, message: '请选择', trigger: 'change' }],
  // 服务场所性质-自有
  nature_service_place_ziyou:[{ required: true, message: '请选择', trigger: 'change' }],
  // 服务场所性质-租赁
  nature_service_place_zulin:[{ required: true, message: '请选择', trigger: 'change' }],
  // 服务场所(建筑)产证情况
  service_site_certificate_status:[{ required: true, message: '请选择', trigger: 'change' }],
  // 是否通过消防审验或备案
  pass_fire_control_inspection_record:[{ required: true, message: '请选择', trigger: 'change' }],
  // 投资主体名称
  investment_subject_name:[{ required: true, message: '请输入', trigger: 'blur' }],
  // 投资主体性质
  investment_subject_nature:[{ required: true, message: '请选择', trigger: 'change' }],
  // 投资主体性质--企业
  investment_subject_nature_qiye:[{ required: true, message: '请选择', trigger: 'change' }],
  // 资金来源及金额(建设方投资)(多选)
  'capital_source_money.checked':[{ required: true, message: '请选择', trigger: 'change' }],
  // 资金来源及金额(建设方投资)(多选)---财政资金(含福彩金)
  'capital_source_money.checkedMoney[0].checked':[{ required: true, message: '请选择', trigger: 'change' }],
  'capital_source_money.checkedMoney[0].money[0]':[{ required: true, message: '请选择', trigger: 'blur' }],
  'capital_source_money.checkedMoney[0].money[1]':[{ required: true, message: '请选择', trigger: 'blur' }],
  'capital_source_money.checkedMoney[0].money[2]':[{ required: true, message: '请选择', trigger: 'blur' }],
  'capital_source_money.checkedMoney[0].money[3]':[{ required: true, message: '请选择', trigger: 'blur' }],
  'capital_source_money.checkedMoney[0].money[4]':[{ required: true, message: '请选择', trigger: 'blur' }],
  'capital_source_money.checkedMoney[0].money[5]':[{ required: true, message: '请选择', trigger: 'blur' }],
  // 资金来源及金额(建设方投资)(多选)---自筹资金
  'capital_source_money.checkedMoney[1].checked':[{ required: true, message: '请选择', trigger: 'change' }],
  'capital_source_money.checkedMoney[1].money[0]':[{ required: true, message: '请选择', trigger: 'blur' }],
  'capital_source_money.checkedMoney[1].money[1]':[{ required: true, message: '请选择', trigger: 'blur' }],
  'capital_source_money.checkedMoney[1].money[2]':[{ required: true, message: '请选择', trigger: 'blur' }],
  'capital_source_money.checkedMoney[1].money[3]':[{ required: true, message: '请选择', trigger: 'blur' }],
  'capital_source_money.checkedMoney[1].money[4]':[{ required: true, message: '请选择', trigger: 'blur' }],
  'capital_source_money.checkedMoney[1].money[5]':[{ required: true, message: '请选择', trigger: 'blur' }],
  // 资金来源及金额(建设方投资)(多选)---捐赠资金
  'capital_source_money.checkedMoney[2].money':[{ required: true, message: '请选择', trigger: 'blur' }],
  // 建设阶段运营方是否带资（不含垫资）
  'is_take_money.checked':[{ required: true, message: '请选择', trigger: 'change' }],
  // 是否利用该场所进行机构合法登记
  is_legally_registered:[{ required: true, message: '请选择', trigger: 'change' }],
  // 是否委托第三方运营
  is_entrusted_operation:[{ required: true, message: '请选择', trigger: 'change' }],
  // 统一社会信用代码
  'is_legally_registered_yes.unified_social_credit_code':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 法定代表人
  'is_legally_registered_yes.legal_representative':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 法定代表人身份证
  'is_legally_registered_yes.legal_representative_idCard':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 联系人
  'is_legally_registered_yes.contacts':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 联系电话
  'is_legally_registered_yes.contact_number':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 机构名称
  'is_legally_registered_yes.org_name':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 统一社会信用代码
  'is_entrusted_operation_yes.unified_social_credit_code':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 法定代表人
  'is_entrusted_operation_yes.legal_representative':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 法定代表人身份证
  'is_entrusted_operation_yes.legal_representative_idCard':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 联系人
  'is_entrusted_operation_yes.contacts':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 联系电话
  'is_entrusted_operation_yes.contact_number':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 机构名称
  'is_entrusted_operation_yes.org_name':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 委托方（甲方）
  'is_entrusted_operation_yes.entrusting_party':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 运营模式
  'operating_model':[{ required: true, message: '运营模式根据投资主体性质及机构信息自动生成', trigger: 'change' }],
}
export default rulesForm
