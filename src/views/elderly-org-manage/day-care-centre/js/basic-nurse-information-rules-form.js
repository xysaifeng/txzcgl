/**
 * 人员信息
 * 表单验证规则
 */
const rulesForm = {
  // 职工总数
  'staff_number': [{ required: true, message: '请输入', trigger: 'blur' }],
  // 全职人数
  'full_time_number': [{ required: true, message: '请输入', trigger: 'blur' }],
}
export default rulesForm
