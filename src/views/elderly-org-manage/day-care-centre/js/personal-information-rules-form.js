/**
 * 人员信息
 * 表单验证规则
 */
const rulesForm = {
  // 职工总数
  staff_number: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 全职人数
  full_time_number: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 兼职人数
  part_time_number: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 管理人员
  manager: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 护理人员
  nurse: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 上岗证
  work_license: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 初级护理人员
  primary_nurse: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 中级护理人员
  middle_nurse: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 高级护理人员
  advanced_nurse: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 健康照护
  health_care: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 医疗照护
  medical_care: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 社工
  social_worker: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 康复师
  therapist: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 营养师
  dietician: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 心理咨询师
  psychological_counselor: [{ required: true, message: '请输入', trigger: 'blur' }],
  // 后勤保障人员
  support_staff: [{ required: true, message: '请输入', trigger: 'blur' }],
}
export default rulesForm
