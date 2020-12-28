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
    // 个性化名称
    person_name: [{ required: true, message: '请选择个性化名称', trigger: 'change' }],
    person_name_orgName: [{ required: true, message: '请输入个性化名称', trigger: 'blur' }],

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
    // 建成时间
    build_time: [{ required: true, message: '请选择', trigger: 'change' }],
    // 公开咨询电话
    public_enquiry_telephone: [{ required: true, message: '请输入座机/手机号', trigger: 'blur' }],
    // 目前运营状态
    current_operating_status: [{ required: true, message: '请选择', trigger: 'change' }],
    // 目前运营状态--选择暂停--时的下拉框选项值
    current_operating_status_select: [{ required: true, message: '请选择', trigger: 'change' }],
    // 设置形式
    set_style: [{ required: true, message: '请选择', trigger: 'change' }],
    //内设机构
    internal_mechanism: [{ required: true, message: '请选择', trigger: 'change' }],
    //内设机构多选
    "mechanism_name.checked": [{ required: true, message: '请选择', trigger: 'change' }],
    // 内设机构---建筑面积
    'mechanism_name.building_area[0]': [{ required: true, message: '请输入', trigger: 'blur' }],
    'mechanism_name.building_area[1]': [{ required: true, message: '请输入', trigger: 'blur' }],
    'mechanism_name.building_area[2]': [{ required: true, message: '请输入', trigger: 'blur' }],
    'mechanism_name.building_area[3]': [{ required: true, message: '请输入', trigger: 'blur' }],
    'mechanism_name.building_area[4]': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 与哪些服务机构同址 内设机构
    internal_mechanism_1: [{ required: true, message: '请选择', trigger: 'change' }],
    //内设机构多选
    "mechanism_name_1.checked": [{ required: true, message: '请选择', trigger: 'change' }],
    // 内设机构---建筑面积
    'mechanism_name_1.building_area[0]': [{ required: true, message: '请输入', trigger: 'blur' }],
    'mechanism_name_1.building_area[1]': [{ required: true, message: '请输入', trigger: 'blur' }],
    'mechanism_name_1.building_area[2]': [{ required: true, message: '请输入', trigger: 'blur' }],
    'mechanism_name_1.building_area[3]': [{ required: true, message: '请输入', trigger: 'blur' }],
    'mechanism_name_1.building_area[4]': [{ required: true, message: '请输入', trigger: 'blur' }],

    'which_institutions_adress.checked': [{ required: true, message: '请选择', trigger: 'change' }],
    // 与哪些服务机构同址---建筑面积
    'which_institutions_adress.building_area[0]': [{ required: true, message: '请输入', trigger: 'blur' }],
    'which_institutions_adress.building_area[1]': [{ required: true, message: '请输入', trigger: 'blur' }],
    'which_institutions_adress.building_area[2]': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 楼层信息
    floor_information: [{ required: true, message: '请选择', trigger: 'change' }],
    // 设备配置
    device_configuration: [{ required: true, message: '请选择', trigger: 'change' }],
    // 服务场所性质
    nature_service_place: [{ required: true, message: '请选择', trigger: 'change' }],
    // 服务场所(建筑)产证情况
    service_site_certificate_status: [{ required: true, message: '请选择', trigger: 'change' }],
    // 是否通过消防审验或备案
    pass_fire_control_inspection_record: [{ required: true, message: '请选择', trigger: 'change' }],
    // 投资主体名称
    investment_subject_name: [{ required: true, message: '请输入', trigger: 'blur' }],
    // 投资主体性质
    investment_subject_nature: [{ required: true, message: '请选择', trigger: 'change' }],
    // 资金来源及金额(建设方投资)(多选)
    'capital_source_money.checked': [{ required: true, message: '请选择', trigger: 'change' }],
    // 建设阶段运营方是否带资（不含垫资）
    //'is_take_money.checked': [{ required: true, message: '请选择建设阶段运营方是否带资', trigger: 'change' }],
    // 是否利用该场所进行机构合法登记
    is_legally_registered: [{ required: true, message: '请选择', trigger: 'change' }],
    // 统一社会信用代码
    'is_legally_registered_yes.unified_social_credit_code': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 法定代表人
    'is_legally_registered_yes.legal_representative': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 法定代表人身份证
    'is_legally_registered_yes.legal_representative_idCard': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 联系人
    'is_legally_registered_yes.contacts': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 联系电话
    'is_legally_registered_yes.contact_number': [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
    // 机构名称
    'is_legally_registered_yes.org_name': [{ required: true, message: '请输入', trigger: 'blur' }],
    //是否由该机构运营
    is_organization_operation: [{ required: true, message: '请选择', trigger: 'change' }],
    //运营方式
    operation_mode: [{ required: true, message: '请选择', trigger: 'change' }],
    //中心负责人
    person_charge_center: [{ required: true, message: '请输入人', trigger: 'blur' }],
    //联系方式
    contact_information: [{ required: true, message: '请输入', trigger: 'change' }],
    // 统一社会信用代码
    'operation_mode_yes.unified_social_credit_code': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 法定代表人
    'operation_mode_yes.legal_representative': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 法定代表人身份证
    'operation_mode_yes.legal_representative_idCard': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 联系人
    'operation_mode_yes.contacts': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 联系电话
    'operation_mode_yes.contact_number': [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
    // 机构名称
    'operation_mode_yes.org_name': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 委托方（甲方）
    'operation_mode_yes.entrusting_party': [{ required: true, message: '请输入', trigger: 'blur' }],

}
export default rulesForm