/**
 * 机构运营
 * 表单验证规则
 */
const rulesForm = {
    // 营业时间
    'business_hours.checked': [{ required: true, message: '请选择', trigger: 'change' }],
    // 工作日
    'business_hours.startTime[0]': [{ required: true, message: '请选择', trigger: 'change' }],
    'business_hours.endTime[0]': [{ required: true, message: '请选择', trigger: 'change' }],
    // 周六
    'business_hours.startTime[1]': [{ required: true, message: '请选择', trigger: 'change' }],
    'business_hours.endTime[1]': [{ required: true, message: '请选择', trigger: 'change' }],
    // 周日
    'business_hours.startTime[2]': [{ required: true, message: '请选择', trigger: 'change' }],
    'business_hours.endTime[2]': [{ required: true, message: '请选择', trigger: 'change' }],

    //托位费
    'deposit_fee': [{ required: true, message: '请输入', trigger: 'blur' }],
    //照护等级
    "level_care": [{ required: true, message: '请选择', trigger: 'change' }],
    //有照护等级费用
    "level_care_options.0.small": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.1.small": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.2.small": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.3.small": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.4.small": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.5.small": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.0.big": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.1.big": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.2.big": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.3.big": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.4.big": [{ required: true, message: '请输入', trigger: 'blur' }],
    "level_care_options.5.big": [{ required: true, message: '请输入', trigger: 'blur' }],
    // 无照护等级费用区间
    "no_level_care_fee_small": [{ required: true, message: '请输入', trigger: 'blur' }],
    "no_level_care_fee_big": [{ required: true, message: '请输入', trigger: 'blur' }],

    //膳食费
    'meal_expenses': [{ required: true, message: '请输入', trigger: 'blur' }],
    //认知障碍老人收费小值
    "old_cognitive_impairment_small": [{ required: true, message: '请输入', trigger: 'blur' }],
    //认知障碍老人收费大值
    "old_cognitive_impairment_big": [{ required: true, message: '请输入', trigger: 'blur' }],

    // 其他费用
    'other_fees.checked': [{ required: true, message: '请选择', trigger: 'change' }],
    // 接送服务
    'other_fees.cost[0]': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 早托晚托
    'other_fees.cost[1]': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 其他服务
    'other_fees.cost[2]': [{ required: true, message: '请输入', trigger: 'blur' }],
    //服务价格
    'service_price': [{ required: true, message: '请选择', trigger: 'change' }],

}
export default rulesForm
