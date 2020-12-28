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
    // 建筑面积
    built_up_area: [{ required: true, message: '请输入', trigger: 'blur' }],

    // 设置形式
    set_style: [{ required: true, message: '请选择', trigger: 'change' }],

    // 与哪些服务机构同址
    'which_institutions_adress': [{ required: true, message: '请选择', trigger: 'change' }],
    // 楼层信息
    floor_information: [{ required: true, message: '请选择楼层信息', trigger: 'change' }],
    // 设备配置
    device_configuration: [{ required: true, message: '请选择设备配置', trigger: 'change' }],
    // 服务场所性质
    nature_service_place: [{ required: true, message: '请选择服务场所性质', trigger: 'change' }],
    service_site_certificate_status: [{ required: true, message: '请选择服务场所(建筑)产证情况', trigger: 'change' }],
    // 是否通过消防审验或备案
    pass_fire_control_inspection_record: [{ required: true, message: '请选择是否通过消防审验或备案', trigger: 'change' }],
    // 投资主体名称
    investment_subject_name: [{ required: true, message: '请输入投资主体名称', trigger: 'blur' }],
    // 投资主体性质
    investment_subject_nature: [{ required: true, message: '请选择投资主体性质', trigger: 'change' }],
    // 投资方投资金额
    investment_money: [{ required: true, message: '请输入', trigger: 'blur' }],
    // 运营模式
    operation_mode: [{ required: true, message: '请选择', trigger: 'change' }],
}
export default rulesForm
