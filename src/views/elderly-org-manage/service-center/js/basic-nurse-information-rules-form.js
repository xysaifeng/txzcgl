/**
 * 人员信息
 * 表单验证规则
 */
const rulesForm = {
    // 工作人员
    'personnel': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 公务员
    'civil_servant': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 事业编制人员
    'establishment_personnel': [{ required: true, message: '请输入', trigger: 'blur' }],
    // 退休返聘人员
    'retirement_recruitment': [{ required: true, message: '请输入', trigger: 'blur' }],
}
export default rulesForm