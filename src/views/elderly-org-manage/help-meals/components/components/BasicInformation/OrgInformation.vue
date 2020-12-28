<!--【基础信息】---投资主体及投入情况-->
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">机构信息</el-divider>
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">

      <!-- 投资主体名称 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">
            <el-tooltip class="item" effect="dark" content="说明：此处不是指运营机构。" placement="right">
              <i class="el-icon-question el-icon-question-custom"></i>
            </el-tooltip>
            是否利用该场所进行机构合法登记：
          </span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="is_legally_registered">
            <el-radio-group v-if="this.isEditForm" v-model="form.is_legally_registered" class="radio-item-custom" style="width: 300px;" @change="handelChange_is_legally_registered">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
            <span v-else>{{form.is_legally_registered}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 投资主体名称 end -->

      <!-- 选择‘是否利用该场所进行机构合法登记’ 的子面板 start -->
      <div v-if="this.form.is_legally_registered === '1'" class="hidden-form-wrap-custom" style="margin-bottom:15px;">

        <!-- 统一社会信用代码 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">统一社会信用代码：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.unified_social_credit_code">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.unified_social_credit_code" placeholder="请输入统一社会信用代码" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.unified_social_credit_code}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 统一社会信用代码 end -->

        <!-- 法定代表人 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">法定代表人：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.legal_representative">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.legal_representative" placeholder="请输入法定代表人" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.legal_representative}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 法定代表人 end -->

        <!-- 法定代表人身份证 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">法定代表人身份证：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.legal_representative_idCard">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.legal_representative_idCard" placeholder="请输入法定代表人身份证" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.legal_representative_idCard}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 法定代表人身份证 end -->

        <!-- 联系人 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">联系人：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.contacts">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.contacts" placeholder="请输入联系人" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.contacts}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 联系人 end -->

        <!-- 联系电话 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">联系电话：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.contact_number">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.contact_number" placeholder="请输入联系电话" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.contact_number}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 联系联系电话人 end -->

        <!-- 运营品牌(选填) start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">运营品牌(选填)：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.operating_brands">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.operating_brands" placeholder="请输入运营品牌(选填)" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.operating_brands}}</span>
              <el-tooltip class="item" effect="dark" content="如：福苑" placement="right">
                <i class="el-icon-question el-icon-question-custom"></i>
              </el-tooltip>
            </el-form-item>
          </div>
        </div>
        <!-- 运营品牌(选填) end -->

        <!-- 机构名称 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">机构名称：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.org_name">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.org_name" placeholder="请输入机构名称" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.org_name}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 机构名称 end -->

        <!-- 法人性质 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">法人性质：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.legal_nature">
              <el-select v-if="this.isEditForm" v-model="form.is_legally_registered_yes.legal_nature" placeholder="请选择法人性质" clearable class="long-form-item" @change="handelChange_is_legally_registered_yes_legal_nature">
                <el-option label="事业单位" value="0" />
                <el-option label="社会服务组织" value="1" />
                <el-option label="企业" value="2" />
              </el-select>
              <span v-else>{{form.is_legally_registered_yes.legal_nature}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 法人性质 end -->

        <!-- 发证机关 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">发证机关：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.licence_issuing_authority">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.licence_issuing_authority" placeholder="请输入发证机关" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.licence_issuing_authority}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 发证机关 end -->

        <!-- 证书有效期限 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">证书有效期限：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.validity_certificate">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.validity_certificate" placeholder="请输入证书有效期限" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.validity_certificate}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 证书有效期限 end -->

        <!-- 发证日期 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">发证日期：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.opening_date">
              <el-date-picker
                v-if="this.isEditForm"
                v-model="form.is_legally_registered_yes.opening_date"
                type="date"
                placeholder="请选择发证日期"
                class="long-form-item">
              </el-date-picker>
              <span v-else>{{form.is_legally_registered_yes.opening_date}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 发证日期 end -->

        <!-- 举办单位 start -->
        <div class="form-item-panel-custom" v-if="form.is_legally_registered_yes.legal_nature !== '2'">
          <div class="form-item-title-custom">举办单位：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.sponsor">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.sponsor" placeholder="请输入举办单位" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.sponsor}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 举办单位 end -->

        <!-- 开办资金 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">开办资金：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.initial_fund">
              <el-input v-if="this.isEditForm" v-model="form.is_legally_registered_yes.initial_fund" placeholder="请输入开办资金" clearable class="long-form-item" />
              <span v-else>{{form.is_legally_registered_yes.initial_fund}}</span>
              <span style="margin-right:5px;">万元</span>
            </el-form-item>
          </div>
        </div>
        <!-- 开办资金 end -->

        <!-- 经营范围 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">经营范围：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_legally_registered_yes.business_scope">
              <el-input v-if="this.isEditForm" type="textarea" v-model="form.is_legally_registered_yes.business_scope" placeholder="请输入经营范围" clearable class="long-form-item textarea-custom" :rows="5"/>
              <span v-else>{{form.is_legally_registered_yes.business_scope}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 经营范围 end -->

      </div>
      <!-- 选择‘是否利用该场所进行机构合法登记’ 的子面板 end -->

      <!-- 是否委托第三方运营 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom">
          <span class="mandatory-start-custom">
            <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;">
              <i class="el-icon-question el-icon-question-custom"></i>
              <div slot="content">说明：主要指该机构的日常管理运营<br/>均由第三方机构负责，仅购买第三方<br/>部分服务的不计入第三方运营。</div>
            </el-tooltip>
            是否委托第三方运营：
          </span>
        </div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="is_entrusted_operation">
            <el-radio-group v-if="this.isEditForm" v-model="form.is_entrusted_operation" class="radio-item-custom" style="width: 300px;" @change="handelChange_is_entrusted_operation">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
            <span v-else>{{form.is_entrusted_operation}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 是否委托第三方运营 end -->

      <!-- 选择‘是否委托第三方运营’ 的子面板 start -->
      <div v-if="this.form.is_entrusted_operation === '1'" class="hidden-form-wrap-custom" style="margin-bottom:15px;">

        <!-- 统一社会信用代码 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">统一社会信用代码：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.unified_social_credit_code">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.unified_social_credit_code" placeholder="请输入统一社会信用代码" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.unified_social_credit_code}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 统一社会信用代码 end -->

        <!-- 法定代表人 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">法定代表人：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.legal_representative">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.legal_representative" placeholder="请输入法定代表人" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.legal_representative}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 法定代表人 end -->

        <!-- 法定代表人身份证 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">法定代表人身份证：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.legal_representative_idCard">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.legal_representative_idCard" placeholder="请输入法定代表人身份证" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.legal_representative_idCard}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 法定代表人身份证 end -->

        <!-- 联系人 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">联系人：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.contacts">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.contacts" placeholder="请输入联系人" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.contacts}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 联系人 end -->

        <!-- 联系电话 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">联系电话：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.contact_number">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.contact_number" placeholder="请输入联系电话" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.contact_number}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 联系联系电话人 end -->

        <!-- 运营品牌(选填) start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">运营品牌(选填)：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.operating_brands">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.operating_brands" placeholder="请输入运营品牌(选填)" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.operating_brands}}</span>
              <el-tooltip class="item" effect="dark" content="如：福苑" placement="right">
                <i class="el-icon-question el-icon-question-custom"></i>
              </el-tooltip>
            </el-form-item>
          </div>
        </div>
        <!-- 运营品牌(选填) end -->

        <!-- 机构名称 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">机构名称：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.org_name">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.org_name" placeholder="请输入机构名称" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.org_name}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 机构名称 end -->

        <!-- 法人性质 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">法人性质：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.legal_nature">
              <el-select v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.legal_nature" placeholder="请选择法人性质" clearable class="long-form-item" @change="handelChange_is_entrusted_operation_yes_legal_nature">
                <el-option label="事业单位" value="0" />
                <el-option label="社会服务组织" value="1" />
                <el-option label="企业" value="2" />
              </el-select>
              <span v-else>{{form.is_entrusted_operation_yes.legal_nature}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 法人性质 end -->

        <!-- 发证机关 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">发证机关：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.licence_issuing_authority">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.licence_issuing_authority" placeholder="请输入发证机关" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.licence_issuing_authority}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 发证机关 end -->

        <!-- 证书有效期限 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">证书有效期限：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.validity_certificate">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.validity_certificate" placeholder="请输入证书有效期限" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.validity_certificate}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 证书有效期限 end -->

        <!-- 发证日期 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">发证日期：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.opening_date">
              <el-date-picker
                v-if="this.isEditForm"
                v-model="form.is_entrusted_operation_yes.opening_date"
                type="date"
                placeholder="请选择发证日期"
                class="long-form-item">
              </el-date-picker>
              <span v-else>{{form.is_entrusted_operation_yes.opening_date}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 发证日期 end -->

        <!-- 举办单位 start -->
        <div class="form-item-panel-custom" v-if="form.is_entrusted_operation_yes.legal_nature !== '2'">
          <div class="form-item-title-custom">举办单位：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.sponsor">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.sponsor" placeholder="请输入举办单位" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.sponsor}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 举办单位 end -->

        <!-- 开办资金 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">开办资金：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.initial_fund">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.initial_fund" placeholder="请输入开办资金" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.initial_fund}}</span>
              <span style="margin-right:5px;">万元</span>
            </el-form-item>
          </div>
        </div>
        <!-- 开办资金 end -->

        <!-- 经营范围 start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom">经营范围：</div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.business_scope">
              <el-input v-if="this.isEditForm" type="textarea" v-model="form.is_entrusted_operation_yes.business_scope" placeholder="请输入经营范围" clearable class="long-form-item textarea-custom" :rows="5"/>
              <span v-else>{{form.is_entrusted_operation_yes.business_scope}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 经营范围 end -->

        <!-- 委托方(甲方) start -->
        <div class="form-item-panel-custom">
          <div class="form-item-title-custom"><span class="mandatory-start-custom">委托方(甲方)：</span></div>
          <div class="form-item-wrap-custom">
            <el-form-item class="form-item-custom" prop="is_entrusted_operation_yes.entrusting_party">
              <el-input v-if="this.isEditForm" v-model="form.is_entrusted_operation_yes.entrusting_party" placeholder="请输入委托方(甲方)" clearable class="long-form-item" />
              <span v-else>{{form.is_entrusted_operation_yes.entrusting_party}}</span>
            </el-form-item>
          </div>
        </div>
        <!-- 委托方(甲方) end -->

        <!-- 文件上传 start -->
        <!-- <upload-custom></upload-custom> -->
        <!-- 文件上传 end -->

      </div>
      <!-- 选择‘是否委托第三方运营’ 的子面板 end -->

      <!-- 运营模式 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">运营模式：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="operating_model">
            <el-input v-model="form.operating_model" disabled class="long-form-item" />
            <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;">
              <i class="el-icon-question el-icon-question-custom"></i>
              <div slot="content">
                说明：运营模式根据投资主体性质及机构信息自动生成。<br/>
                如您需要修改，请先修改投资主体性质及机构信息。<br/>
                公建公营（投资主体选择：政府，且利用该场所进行机构合法登记）<br/>
                公建民营（投资主体选择：政府，且委托第三方运营模式）<br/>
                民建民营（投资主体选择：企业/社会组织/个体）
              </div>
            </el-tooltip>
          </el-form-item>
        </div>
      </div>
      <!-- 运营模式 end -->

    </el-form>

    <el-divider content-position="left" class="divider-custom">服务质量</el-divider>
    <!-- 服务质量暂无，若表单内容过多，请拆分成单独组建 -->
  </div>
</template>

<script>
import rulesForm from '../../../js/basic-information-rules-form.js'

// 文件，图片上传
// import UploadCustom from "@/components/UploadCustom";

export default {
  name: 'OrgInformation',
  components: {
    // UploadCustom
  },
  props: ['operatingModel'],
  watch: {
    operatingModel: {
      handler() {
        this.watchOperatingModelChangeText()
      }
    }
  },
  data() {
    return {
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: '',//查看：look  编辑：edit  新增：add
      rulesForm, // 校验规则
      form:{
        is_legally_registered: '',// 是否利用该场所进行机构合法登记
        is_legally_registered_yes:{
          unified_social_credit_code:'', // 统一社会信用代码
          legal_representative:'', // 法定代表人
          legal_representative_idCard:'', // 法定代表人身份证
          contacts:'' ,// 联系人
          contact_number:'' ,// 联系电话
          operating_brands: '' ,// 运营品牌（选填）
          org_name:'',// 机构名称
          licence_issuing_authority:'',// 发证机关
          validity_certificate:'',// 证书有效期
          opening_date:'',// 发证日期
          sponsor:'',// 举办单位
          initial_fund:'', // 开办资金
          business_scope: '' ,// 经营范围
        },
        is_entrusted_operation: '',// 是否利用该场所进行机构合法登记
        is_entrusted_operation_yes:{
          unified_social_credit_code:'', // 统一社会信用代码
          legal_representative:'', // 法定代表人
          legal_representative_idCard:'', // 法定代表人身份证
          contacts:'' ,// 联系人
          contact_number:'' ,// 联系电话
          operating_brands: '' ,// 运营品牌（选填）
          org_name:'',// 机构名称
          licence_issuing_authority:'',// 发证机关
          validity_certificate:'',// 证书有效期
          opening_date:'',// 发证日期
          sponsor:'',// 举办单位
          initial_fund:'', // 开办资金
          business_scope: '' ,// 经营范围
          entrusting_party:'',// 委托方（甲方）
        },
        operating_model:'', // 运营模式
      }
    }
  },
  //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  mounted() {
    this.modelType = this.$route.query.modelType;
    if (this.modelType === 'edit') {
      this.isEditForm = true;
    }
    else if (this.modelType === 'add') {
      this.isEditForm = true;
    }
    else if (this.modelType === 'look') {
      this.isEditForm = false;
    }
  },
  methods: {
    // 是否利用该场所进行机构合法登记 change 事件
    handelChange_is_legally_registered(val) {
      this.form.is_legally_registered_yes = {
        unified_social_credit_code:'', // 统一社会信用代码
        legal_representative:'', // 法定代表人
        legal_representative_idCard:'', // 法定代表人身份证
        contacts:'' ,// 联系人
        contact_number:'' ,// 联系电话
        operating_brands: '' ,// 运营品牌（选填）
        org_name:'',// 机构名称
        licence_issuing_authority:'',// 发证机关
        validity_certificate:'',// 证书有效期
        opening_date:'',// 发证日期
        sponsor:'',// 举办单位
        initial_fund:'', // 开办资金
        business_scope: '' ,// 经营范围
      }
      this.watchOperatingModelChangeText()
    },
    // 法人性质 change 事件，当选择‘企业’时，‘举办单位’隐藏重置
    handelChange_is_legally_registered_yes_legal_nature(val) {
      if(val === '2'){
        this.form.is_legally_registered_yes.sponsor = ''
      }
    },
    // 是否委托第三方运营 change 事件
    handelChange_is_entrusted_operation() {
      this.form.is_entrusted_operation_yes = {
        unified_social_credit_code:'', // 统一社会信用代码
        legal_representative:'', // 法定代表人
        legal_representative_idCard:'', // 法定代表人身份证
        contacts:'' ,// 联系人
        contact_number:'' ,// 联系电话
        operating_brands: '' ,// 运营品牌（选填）
        org_name:'',// 机构名称
        licence_issuing_authority:'',// 发证机关
        validity_certificate:'',// 证书有效期
        opening_date:'',// 发证日期
        sponsor:'',// 举办单位
        initial_fund:'', // 开办资金
        business_scope: '' ,// 经营范围
        entrusting_party:'',// 委托方（甲方）
      }
      this.watchOperatingModelChangeText()
    },
    // 法人性质 change 事件，当选择‘企业’时，‘举办单位’隐藏重置
    handelChange_is_entrusted_operation_yes_legal_nature(val) {
      if(val === '2'){
        this.form.is_entrusted_operation_yes.sponsor = ''
      }
    },
    // 监听改变‘运营模式’的值
    watchOperatingModelChangeText(){
      /**
        公建公营（投资主体选择：政府，且利用该场所进行机构合法登记）
        公建民营（投资主体选择：政府，且委托第三方运营模式）
        民建民营（投资主体选择：企业/社会组织/个体）
       */
      this.form.operating_model = ""
      if(this.operatingModel !== ''){
        if(this.operatingModel === '0'){
          if(this.form.is_entrusted_operation === '1'){
            this.form.operating_model = '公建民营'
          }
          else{
            if(this.form.is_legally_registered === '1'){
              this.form.operating_model = '公建公营'
            }
          }
        }
        else{
          this.form.operating_model = '民建民营'
        }
      }

    },
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag = null
      this.$refs['formRef'].validate((valid, object) => {
        console.log('投资主体及投入情况---子组件校验----', valid)
        if (valid) {
          flag = true
        } else {
          flag = false
        }
      })
      return flag
    },
  }
}
</script>

<style lang="scss" >
  .textarea-custom{
    & > textarea{
      height: 100px;
      resize: none;
    }
  }
</style>
