/**
 * 服务能力
 * 表单验证规则
 */
const rulesForm = {
  // 托位
  day_care_seat:[{ required: true, message:'请输入', trigger: 'blur' }],
  // 签约服务人数
  service_contract_number:[{ required: true, message:'请输入', trigger: 'blur' }],
  // 日均服务量
  average_service_volume:[{ required: true, message:'请输入', trigger: 'blur' }],
  // 服务对象（多选）
  'service_object.checked':[{ required: true, message: '请选择', trigger: 'change' }],
  // 服务对象（多选）---有照护等级的老人
  'service_object.level_care_people':[{ required: true, message: '请选择', trigger: 'change' }],
  // 服务对象（多选）---认知障碍老人
  'service_object.cognitive_disorder_people':[{ required: true, message: '请选择', trigger: 'change' }],
  // 服务范围
  service_range:[{ required: true, message: '请选择', trigger: 'change' }],
  // 是否收住前项范围内的常驻人口
  is_resident_population:[{ required: true, message: '请选择', trigger: 'change' }],
  // 医养结合情况(多选)
  'cmtnc.checked':[{ required: true, message: '请选择', trigger: 'change' }],
  // 医养结合情况(多选)---签约机构名称
  'cmtnc.orgName[0]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'cmtnc.orgName[1]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'cmtnc.orgName[2]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'cmtnc.orgName[3]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'cmtnc.orgName[4]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'cmtnc.orgName[5]':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 医养结合情况(多选)---合作护理站名称
  'cmtnc.nursingStationName[0]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'cmtnc.nursingStationName[1]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'cmtnc.nursingStationName[2]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'cmtnc.nursingStationName[3]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'cmtnc.nursingStationName[4]':[{ required: true, message: '请输入', trigger: 'blur' }],
  'cmtnc.nursingStationName[5]':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 医养结合情况(多选)---其他
  'cmtnc.other':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 医养结合服务(多选)
  'cmns.checked':[{ required: true, message: '请选择', trigger: 'change' }],
  // 医养结合服务(多选)---其他
  'cmns.other':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 日间托养服务(多选)
  'day_care_service.checked':[{ required: true, message: '请选择', trigger: 'change' }],
  // 日间托养服务(多选)---其他
  'day_care_service.other':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 个性化服务(多选)
  'personalized_service.checked':[{ required: true, message: '请选择', trigger: 'change' }],
  // 个性化服务(多选)---其他
  'personalized_service.other':[{ required: true, message: '请输入', trigger: 'blur' }],
  // 延展服务(多选)
  'extended_service.checked':[{ required: true, message: '请选择', trigger: 'change' }],
  // 延展服务(多选)---其他
  'extended_service.other':[{ required: true, message: '请输入', trigger: 'blur' }],
}
export default rulesForm
