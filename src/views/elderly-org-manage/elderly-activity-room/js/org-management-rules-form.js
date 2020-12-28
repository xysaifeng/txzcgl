/**
 * 机构管理
 * 表单验证规则
 */
const rulesForm = {
    // 安全信息管理
    'security_information_management.0.englishName': [{ required: true, message: '请选择有无喷水灭火系统', trigger: 'change' }],
    'security_information_management.1.englishName': [{ required: true, message: '请选择有无火灾自动报警系统', trigger: 'change' }],
    'security_information_management.2.englishName': [{ required: true, message: '请选择有无消防器材', trigger: 'change' }],
    'security_information_management.3.englishName': [{ required: true, message: '请选择有无安全生产管理员', trigger: 'change' }],
    'security_information_management.4.englishName': [{ required: true, message: '请选择有无综合责任保险', trigger: 'change' }],


}
export default rulesForm
