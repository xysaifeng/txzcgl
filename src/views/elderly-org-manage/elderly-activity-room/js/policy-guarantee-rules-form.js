/**
 * 政策保障
 * 表单验证规则
 */
const rulesForm = {
    // 是否享受一次性建设补贴
    one_construction_subsidy: [{ required: true, message: '请选择', trigger: 'change' }],
    // 一类项目
    standard_one: [{ required: true, message: '请选择', trigger: 'change' }],
    year_of_subsid_one: [{ required: true, message: '请选择', trigger: 'change' }],
    // 二类项目
    standard_two: [{ required: true, message: '请选择', trigger: 'change' }],
    year_of_subsid_two: [{ required: true, message: '请选择', trigger: 'change' }],
    // 三类项目
    standard_three: [{ required: true, message: '请选择', trigger: 'change' }],
    year_of_subsid_three: [{ required: true, message: '请选择', trigger: 'change' }],
    // 是否享受日常运营补贴
    daily_operation_subsidy: [{ required: true, message: '请选择是否享受日常运营补贴', trigger: 'change' }],
    // 市级
    'operation_subsidy_area.year_of_money[0]': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 区级
    'operation_subsidy_area.year_of_money[1]': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 街镇级
    'operation_subsidy_area.year_of_money[2]': [{ required: true, message: '请输入', trigger: 'blur' }],

    // 公共事业费优惠
    'public_service_preference[0].type': [{ required: true, message: '请选择', trigger: 'change' }],
    'public_service_preference[1].type': [{ required: true, message: '请选择', trigger: 'change' }],
    'public_service_preference[2].type': [{ required: true, message: '请选择', trigger: 'change' }],
    'public_service_preference[3].type': [{ required: true, message: '请选择', trigger: 'change' }],
    'public_service_preference[4].type': [{ required: true, message: '请选择', trigger: 'change' }],
    'public_service_preference[5].type': [{ required: true, message: '请选择', trigger: 'change' }],

    'public_service_preference[0].other': [{ required: true, message: '请选择', trigger: 'change' }],
    'public_service_preference[1].other': [{ required: true, message: '请选择', trigger: 'change' }],
    'public_service_preference[2].other': [{ required: true, message: '请选择', trigger: 'change' }],
    'public_service_preference[3].other': [{ required: true, message: '请选择', trigger: 'change' }],
    'public_service_preference[4].other': [{ required: true, message: '请选择', trigger: 'change' }],
    'public_service_preference[5].other': [{ required: true, message: '请选择', trigger: 'change' }],
    // 税费优惠政策
    // 'preferential_tax_policy[0]': [{ required: true, message: '请选择', trigger: 'change' }],
    // 'preferential_tax_policy[1]': [{ required: true, message: '请选择', trigger: 'change' }],
    // 'preferential_tax_policy[2]': [{ required: true, message: '请选择', trigger: 'change' }],
    // 'preferential_tax_policy[3]': [{ required: true, message: '请选择', trigger: 'change' }],
    // 'preferential_tax_policy[4]': [{ required: true, message: '请选择', trigger: 'change' }],

}
export default rulesForm
