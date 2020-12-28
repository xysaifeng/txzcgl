/**
 * 政策保障
 * 表单验证规则
 */
const rulesForm = {
    // 是否享受一次性建设补贴
    one_construction_subsidy: [{ required: true, message: '请选择是', trigger: 'change' }],
    // 一次性补贴市级区级街镇选择
    'construction_subsidy_area.checked': [{ required: true, message: '请选择', trigger: 'change' }],
    // 市级
    'construction_subsidy_area.municipal_subsidy_standard[0]': [{ required: true, message: '请选择', trigger: 'change' }],
    'construction_subsidy_area.year_of_subsidy[0]': [{ required: true, message: '请选择', trigger: 'change' }],
    'construction_subsidy_area.year_of_money[0]': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 区级
    'construction_subsidy_area.year_of_subsidy[1]': [{ required: true, message: '请选择', trigger: 'change' }],
    'construction_subsidy_area.year_of_money[1]': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 街镇级
    'construction_subsidy_area.year_of_subsidy[2]': [{ required: true, message: '请选择', trigger: 'change' }],
    'construction_subsidy_area.year_of_money[2]': [{ required: true, message: '请输入', trigger: 'blur' }],

    // 是否享受日常运营补贴
    daily_operation_subsidy: [{ required: true, message: '请选择', trigger: 'change' }],
    // 日常运营补贴市级区级街镇选择
    'operation_subsidy_area.checked': [{ required: true, message: '请选择', trigger: 'change' }],
    // 市级
    'operation_subsidy_area.year_of_subsidy[0]': [{ required: true, message: '请选择', trigger: 'change' }],
    'operation_subsidy_area.year_of_money[0]': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 区级
    'operation_subsidy_area.year_of_subsidy[1]': [{ required: true, message: '请选择', trigger: 'change' }],
    'operation_subsidy_area.year_of_money[1]': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 街镇级
    'operation_subsidy_area.year_of_subsidy[2]': [{ required: true, message: '请选择', trigger: 'change' }],
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
    'preferential_tax_policy[0]': [{ required: true, message: '请选择', trigger: 'change' }],
    'preferential_tax_policy[1]': [{ required: true, message: '请选择', trigger: 'change' }],
    'preferential_tax_policy[2]': [{ required: true, message: '请选择', trigger: 'change' }],
    'preferential_tax_policy[3]': [{ required: true, message: '请选择', trigger: 'change' }],
    'preferential_tax_policy[4]': [{ required: true, message: '请选择', trigger: 'change' }],

}
export default rulesForm
