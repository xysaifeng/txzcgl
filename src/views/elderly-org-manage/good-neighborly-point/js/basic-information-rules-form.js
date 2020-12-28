/**
 * 基础信息
 * 表单验证规则
 */
const rulesForm = {
  // 行政区/街镇
  name_areaStreet: [{ required: true, message: '请选择行政区/街镇', trigger: 'change' }],
  // 具体名称
  name_orgName: [
    { required: true, message: '请输入具体名称(必填)', trigger: 'blur' },
    { max: 100, message: '具体名称不能超过100个字符', trigger: 'blur' }
  ],
  // 名称后缀
  name_houzhui: [{ required: true, message: '请选择名称后缀', trigger: 'change' }],
  // 选择行政区/街镇/居委
  address_areaStreetJuwei: [{ required: true, message: '请选择行政区/街镇/居委', trigger: 'change' }],
  // 请输入村/路/街(必填)
  address_cunlujie: [
    { required: true, message: '请输入村/路/街(必填)', trigger: 'blur' },
    { max: 100, message: '村/路/街不能超过100个字符', trigger: 'blur' }
  ],
  // 请选择村/路/街
  address_cunlujie_houzhui: [{ required: true, message: '请选择村/路/街', trigger: 'change' }],
  // 请输入号/弄/支弄(必填)
  address_nong: [
    { required: true, message: '请输入号/弄/支弄(必填)', trigger: 'blur' },
    { max: 100, message: '号/弄/支弄不能超过100个字符', trigger: 'blur' }
  ],
  // 请选择号/弄/支弄
  address_nong_houzhui: [{ required: true, message: '请选择号/弄/支弄', trigger: 'change' }],
  // 请输入详细地址
  // address_address:[
  //   { required: true, message: '请输入详细地址', trigger: 'blur' },
  //   { max: 100, message: '详细地址不能超过100个字符', trigger: 'blur' }
  // ],
  // 是否被评为市级示范睦邻点
  name_top_point: [{ required: true, message: '请选择是否被评为市级示范睦邻点', trigger: 'change' }],

  // 建成时间
  build_time: [{ required: true, message: '请选择建成时间', trigger: 'change' }],
  // 房屋属性
  name_house_pro: [{ required: true, message: '请选择房屋属性', trigger: 'change' }],
  // 活动场地使用面积
  building_area: [{ required: true, message: '请输入场地使用面积', trigger: 'blur' }],
  // 召集人姓名
  public_enquiry_name: [
    { required: true, message: '请输入姓名(必填)', trigger: 'blur' },
    { max: 20, message: '不能超过20个字符', trigger: 'blur' }
  ],
  // 召集人电话
  public_enquiry_telephone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  // 目前运营状态
  current_operating_status: [{ required: true, message: '请选择目前运营状态', trigger: 'change' }],
  // 目前运营状态--选择暂停--时的下拉框选项值
  current_operating_status_select: [{ required: true, message: '请选择', trigger: 'change' }],
  // 机构图片
  supplier_imgs: [{ required: true, message: '请选择要上传的图片', trigger: 'change' }],
  // 设置形式
  set_style: [{ required: true, message: '请选择', trigger: 'change' }],
  // 运营模式
  name_run_model: [{ required: true, message: '请选择运营模式', trigger: 'change' }],

  // 其中单独休息区域面积
  // individual_area: [{ required: true, message: '请输入单独休息区域面积', trigger: 'blur' }],
  // 与哪些服务机构同址
  'which_institutions_adress.checked': [{ required: true, message: '请选择与哪些服务机构同址', trigger: 'change' }],
  // 与哪些服务机构同址---建筑面积
  'which_institutions_adress.building_area[0]': [{ required: true, message: '请输入建筑面积', trigger: 'blur' }],
  'which_institutions_adress.building_area[1]': [{ required: true, message: '请输入建筑面积', trigger: 'blur' }],
  'which_institutions_adress.building_area[2]': [{ required: true, message: '请输入建筑面积', trigger: 'blur' }],
  'which_institutions_adress.building_area[3]': [{ required: true, message: '请输入建筑面积', trigger: 'blur' }],
  'which_institutions_adress.building_area[4]': [{ required: true, message: '请输入建筑面积', trigger: 'blur' }],
  // 是否与上述机服务机构有共享场地
  has_last_org_shared_space: [{ required: true, message: '请选择', trigger: 'change' }],
  // 楼层信息
  floor_information: [{ required: true, message: '请选择楼层信息', trigger: 'change' }],
  // 设备配置
  device_configuration: [{ required: true, message: '请选择设备配置', trigger: 'change' }],
  // 服务场所性质
  nature_service_place: [{ required: true, message: '请选择服务场所性质', trigger: 'change' }],
  // 服务场所(建筑)产证情况
  service_site_certificate_status: [{ required: true, message: '请选择服务场所(建筑)产证情况', trigger: 'change' }],

  // 投资主体名称
  investment_subject_name: [{ required: true, message: '请输入投资主体名称', trigger: 'blur' }],
  // 投资主体性质
  investment_subject_nature: [{ required: true, message: '请选择投资主体性质', trigger: 'change' }],
  // 资金来源及金额(建设方投资)(多选)
  'capital_source_money.checked': [{ required: true, message: '请选择资金来源及金额', trigger: 'change' }],
  // 建设阶段运营方是否带资（不含垫资）
  'is_take_money.checked': [{ required: true, message: '请选择建设阶段运营方是否带资', trigger: 'change' }],
  // 是否利用该场所进行机构合法登记
  is_legally_registered: [{ required: true, message: '请选择是否利用该场所进行机构合法登记', trigger: 'change' }],
  // 统一社会信用代码
  'is_legally_registered_yes.unified_social_credit_code': [{ required: true, message: '请输入统一社会信用代码', trigger: 'blur' }],
  // 法定代表人
  'is_legally_registered_yes.legal_representative': [{ required: true, message: '请输入法定代表人', trigger: 'blur' }],
  // 法定代表人身份证
  'is_legally_registered_yes.legal_representative_idCard': [{ required: true, message: '请输入法定代表人身份证', trigger: 'blur' }],
  // 联系人
  'is_legally_registered_yes.contacts': [{ required: true, message: '请输入联系人', trigger: 'blur' }],
  // 联系电话
  'is_legally_registered_yes.contact_number': [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
  // 机构名称
  'is_legally_registered_yes.org_name': [{ required: true, message: '请输入机构名称', trigger: 'blur' }],
  // 统一社会信用代码
  'is_entrusted_operation_yes.unified_social_credit_code': [{ required: true, message: '请输入统一社会信用代码', trigger: 'blur' }],
  // 法定代表人
  'is_entrusted_operation_yes.legal_representative': [{ required: true, message: '请输入法定代表人', trigger: 'blur' }],
  // 法定代表人身份证
  'is_entrusted_operation_yes.legal_representative_idCard': [{ required: true, message: '请输入法定代表人身份证', trigger: 'blur' }],
  // 联系人
  'is_entrusted_operation_yes.contacts': [{ required: true, message: '请输入联系人', trigger: 'blur' }],
  // 联系电话
  'is_entrusted_operation_yes.contact_number': [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
  // 机构名称
  'is_entrusted_operation_yes.org_name': [{ required: true, message: '请输入机构名称', trigger: 'blur' }],
  // 委托方（甲方）
  'is_entrusted_operation_yes.entrusting_party': [{ required: true, message: '请输入委托方（甲方）', trigger: 'blur' }],
  // 运营模式
  'operating_model': [{ required: true, message: '运营模式根据投资主体性质及机构信息自动生成', trigger: 'change' }]
}
export default rulesForm
