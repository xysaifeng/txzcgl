/**
 * 政策保障
 * 表单验证规则
 */
const rulesForm = {
  // 是否享受一次性建设补贴
  one_construction_subsidy: [{ required: true, message: '请选择是否享受一次性补贴', trigger: 'change' }],
  // 一次性补贴市级区级街镇选择
  'construction_subsidy_area.checked': [{ required: true, message: '请选择享受服务机构', trigger: 'change' }],
  // 市级
  'construction_subsidy_area.municipal_subsidy_standard[0]': [{ required: true, message: '请选择市级补贴标准', trigger: 'change' }],
  'construction_subsidy_area.year_of_subsidy[0]': [{ required: true, message: '请选择市级补贴年份', trigger: 'change' }],
  'construction_subsidy_area.year_of_money[0]': [{ required: true, message: '请输入市级补贴金额', trigger: 'blur' }],
  // 区级
  'construction_subsidy_area.year_of_subsidy[1]': [{ required: true, message: '请选择区级补贴年份', trigger: 'change' }],
  'construction_subsidy_area.year_of_money[1]': [{ required: true, message: '请输入区级补贴金额', trigger: 'blur' }],
  // 街镇级
  'construction_subsidy_area.year_of_subsidy[2]': [{ required: true, message: '请选择街镇级补贴年份', trigger: 'change' }],
  'construction_subsidy_area.year_of_money[2]': [{ required: true, message: '请输入街镇级补贴金额', trigger: 'blur' }],
  // 村级
  'construction_subsidy_area.year_of_subsidy[3]': [{ required: true, message: '请选择村级补贴年份', trigger: 'change' }],
  'construction_subsidy_area.year_of_money[3]': [{ required: true, message: '请输入村级补贴金额', trigger: 'blur' }],

  // 是否享受日常运营补贴
  daily_operation_subsidy: [{ required: true, message: '请选择是否享受日常运营补贴', trigger: 'change' }],
  // 日常运营补贴市级区级街镇选择
  'operation_subsidy_area.checked': [{ required: true, message: '请选择享受服务机构', trigger: 'change' }],
  // 区级
  'operation_subsidy_area.year_of_subsidy[0]': [{ required: true, message: '请选择区级补贴年份', trigger: 'change' }],
  'operation_subsidy_area.year_of_money[0]': [{ required: true, message: '请输入区级补贴金额', trigger: 'blur' }],
  // 街镇级
  'operation_subsidy_area.year_of_subsidy[1]': [{ required: true, message: '请选择街镇级补贴年份', trigger: 'change' }],
  'operation_subsidy_area.year_of_money[1]': [{ required: true, message: '请输入街镇级补贴金额', trigger: 'blur' }],
  // 村级
  'operation_subsidy_area.year_of_subsidy[2]': [{ required: true, message: '请选择村级补贴年份', trigger: 'change' }],
  'operation_subsidy_area.year_of_money[2]': [{ required: true, message: '请输入村级补贴金额', trigger: 'blur' }]

}
export default rulesForm
