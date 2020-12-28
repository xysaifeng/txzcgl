/**
 * 服务能力
 * 表单验证规则
 */
const rulesForm = {
    // 日均服务人次
    average_service_volume: [{ required: true, message: '请输入', trigger: 'blur' }],
}
export default rulesForm
