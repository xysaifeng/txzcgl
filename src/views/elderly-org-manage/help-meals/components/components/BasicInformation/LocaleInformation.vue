<!--【基础信息】---场所信息-->
<template>
  <div>
    <el-divider content-position="left" class="divider-custom">场所信息</el-divider>
    <el-form ref="formRef" :model="form" :rules="this.isEditForm?rulesForm:null" label-width="150px">
      <!-- 名称 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">名称：</span></div>
        <div class="form-item-wrap-custom">
          <span style="height:36px;line-height:36px;padding-right:10px;">上海市</span>
          <el-form-item class="form-item-custom" prop="name_areaStreet">
            <el-cascader
              v-if="this.isEditForm"
              v-model="form.name_areaStreet"
              :options="areaStreetOptions"
              :props="defaultProps"
              clearable
              style="width: 100%"
              placeholder="请选择行政区/街镇"
              class="very-long-form-item"
              @change="areaStreetChange"
            />
            <span v-else>{{form.name_areaStreet_text}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="name_orgName">
            <el-input v-if="this.isEditForm" v-model="form.name_orgName" placeholder="请输入具体名称(必填)" clearable class="long-form-item" />
            <span v-else>{{form.name_orgName}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="name_houzhui">
            <el-select v-if="this.isEditForm" v-model="form.name_houzhui" placeholder="请选择名称后缀" clearable class="long-form-item">
              <el-option label="日间照料中心" value="0" />
              <el-option label="日间服务中心" value="1" />
              <el-option label="日间照护中心" value="2" />
            </el-select>
            <span v-else>{{form.name_houzhui_text}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 名称 end -->

      <!-- 地址 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">地址：</span></div>
        <div class="form-item-wrap-custom">
          <span style="height:36px;line-height:36px;padding-right:10px;">上海市</span>
          <el-form-item class="form-item-custom" prop="address_areaStreetJuwei">
            <el-cascader
              v-if="this.isEditForm"
              ref="address_areaStreetJuwei"
              v-model="form.address_areaStreetJuwei"
              :options="areaStreetOptions"
              :props="defaultProps"
              clearable
              style="width: 100%"
              placeholder="请选择行政区/街镇/居委"
              class="very-long-form-item"
              @change="areaStreetChange_1"
            />
            <span v-else>{{form.address_areaStreetJuwei}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="address_cunlujie">
            <el-input v-if="this.isEditForm" v-model="form.address_cunlujie" placeholder="请输入村/路/街(必填)" clearable class="long-form-item" />
            <span v-else>{{form.address_cunlujie}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="address_cunlujie_houzhui">
            <el-select v-if="this.isEditForm" v-model="form.address_cunlujie_houzhui" placeholder="请选择村/路/街" clearable class="long-form-item" @change="address_cunlujie_houzhui">
              <el-option
                v-for="item in address_cunlujie_houzhui_option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span v-else>{{form.address_cunlujie_houzhui}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="address_nong">
            <el-input v-if="this.isEditForm" v-model="form.address_nong" placeholder="请输入号/弄/支弄(必填)" clearable class="long-form-item" />
            <span v-else>{{form.address_nong}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="address_nong_houzhui">
            <el-select v-if="this.isEditForm" v-model="form.address_nong_houzhui" placeholder="请选择号/弄/支弄" clearable class="long-form-item" @change="address_nong_houzhui">
              <el-option
                v-for="item in address_nong_houzhui_option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span v-else>{{form.address_nong_houzhui}}</span>
          </el-form-item>
          <el-form-item class="form-item-custom" prop="address_address">
            <el-input v-if="this.isEditForm" v-model="form.address_address" placeholder="请输入详细地址" clearable class="long-form-item" />
            <span v-else>{{form.address_address}}</span>
          </el-form-item>
          <span class="preview-btn-custom" @click="handelClickPreview">预览</span>
        </div>
      </div>
      <!-- 地址 end -->

      <!-- 建成时间 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">建成时间：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="build_time">
            <el-date-picker
              v-if="this.isEditForm"
              v-model="form.build_time"
              type="date"
              placeholder="请选择建成时间"
              class="long-form-item">
            </el-date-picker>
            <span v-else>{{form.build_time}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 建成时间 end -->

      <!-- 公开咨询电话 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">公开咨询电话：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="public_enquiry_telephone">
            <el-input v-if="this.isEditForm" v-model="form.public_enquiry_telephone" placeholder="请输入座机/手机号" clearable class="long-form-item" />
            <span v-else>{{form.public_enquiry_telephone}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 公开咨询电话 end -->

      <!-- 目前运营状态 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">目前运营状态：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="current_operating_status">
            <el-radio-group v-if="this.isEditForm" v-model="form.current_operating_status" class="radio-item-custom" @change="handelChange_current_operating_status">
              <el-radio label="0">正常</el-radio>
              <el-radio label="1">暂停</el-radio>
              <el-radio label="2">关闭</el-radio>
            </el-radio-group>
            <span v-else>{{form.current_operating_status}}</span>
          </el-form-item>
          <el-form-item v-if="this.form.current_operating_status === '1'" class="form-item-custom" prop="current_operating_status_select" style="margin-left:20px;">
            <el-select v-if="this.isEditForm" v-model="form.current_operating_status_select" placeholder="请选择" clearable class="short-form-item">
              <el-option label="重建" value="0" />
              <el-option label="改造" value="1" />
              <el-option label="装修" value="2" />
            </el-select>
          </el-form-item>
        </div>
      </div>
      <!-- 目前运营状态 end -->

      <!-- 设置形式 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">设置形式：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="set_style">
            <el-radio-group v-if="this.isEditForm" v-model="form.set_style" class="radio-item-custom" @change="handelChange_set_style">
              <el-radio label="0">单独设置</el-radio>
              <el-radio label="1">与其他服务机构同址设置</el-radio>
            </el-radio-group>
            <span v-else>{{form.set_style}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 设置形式 end -->

      <!-- 选择‘设置形式’ 的子面板 start -->
      <div v-if="this.form.set_style !== ''" class="hidden-form-wrap-custom" style="margin-left: 260px;margin-right: 30px;">
          <!-- 建筑面积 start -->
          <div class="form-item-panel-custom">
            <div class="form-item-title-custom"><span class="mandatory-start-custom">建筑面积：</span></div>
            <div class="form-item-wrap-custom">
              <el-form-item class="form-item-custom" prop="building_area">
                <el-input v-if="this.isEditForm" v-model="form.building_area" placeholder="请输入建筑面积" clearable class="long-form-item" />
                <span v-else>{{form.building_area}}</span>
                <span style="margin-right:5px;">平方/米</span>
                <el-tooltip class="item" effect="dark" content="说明：不含共享场地面积" placement="right">
                  <i class="el-icon-question el-icon-question-custom"></i>
                </el-tooltip>
              </el-form-item>
            </div>
          </div>
          <!-- 建筑面积 end -->

          <!-- 其中单独休息区域面积 start -->
          <div class="form-item-panel-custom">
            <div class="form-item-title-custom">其中单独休息区域面积：</div>
            <div class="form-item-wrap-custom">
              <el-form-item class="form-item-custom" prop="individual_area">
                <el-input v-if="this.isEditForm" v-model="form.individual_area" placeholder="请输入单独休息区域面积" clearable class="long-form-item" />
                <span v-else>{{form.individual_area}}</span>
                <span style="margin-right:5px;">平方/米</span>
              </el-form-item>
            </div>
          </div>
          <!-- 其中单独休息区域面积 end -->

          <!-- 选择‘单独设置’的子面板 start-->
          <!-- 请选择功能区域(多选) start -->
          <div class="form-item-panel-custom" v-if="this.form.set_style === '0'">
            <div class="form-item-title-custom">请选择功能区域(多选)：</div>
            <div class="form-item-wrap-custom" style="display:block;width:100%;">
              <el-form-item class="form-item-custom" prop="functional_area.checked" style="display:block;width:100%;">
                <el-checkbox-group v-model="form.functional_area.checked" @change="handelChange_functional_area_checked">
                  <div class="checkbox-group-block-custom">
                    <div style="width:250px;height: 52px;">
                      <el-checkbox label="0" name="which_institutions_adress_checked">
                        <span>生活服务区域</span>
                      </el-checkbox>
                    </div>
                    <div v-if="form.functional_area.checked.includes('0')" class="form-item-panel-custom" style="">
                      <div class="form-item-title-custom" style="width:auto;min-width:auto;">建筑面积：</div>
                      <div class="form-item-wrap-custom">
                        <el-form-item class="form-item-custom" prop="functional_area.building_area[0]">
                          <el-input v-model="form.functional_area.building_area[0]" placeholder="请输入建筑面积" clearable class="long-form-item" />
                          <span style="margin-right:5px;">平方/米</span>
                          <el-tooltip class="item" effect="dark" content="指：生活服务区域的总面积" placement="right">
                            <i class="el-icon-question el-icon-question-custom"></i>
                          </el-tooltip>
                        </el-form-item>
                      </div>
                    </div>
                  </div>

                  <div class="checkbox-group-block-custom">
                    <div style="width:250px;height: 52px;">
                      <el-checkbox label="1" name="which_institutions_adress_checked">
                        <span>保健服务区域</span>
                      </el-checkbox>
                    </div>
                    <div v-if="form.functional_area.checked.includes('1')" class="form-item-panel-custom" style="">
                      <div class="form-item-title-custom" style="width:auto;min-width:auto;">建筑面积：</div>
                      <div class="form-item-wrap-custom">
                        <el-form-item class="form-item-custom" prop="functional_area.building_area[1]">
                          <el-input v-model="form.functional_area.building_area[1]" placeholder="请输入建筑面积" clearable class="long-form-item" />
                          <span style="margin-right:5px;">平方/米</span>
                          <el-tooltip class="item" effect="dark" content="指：保健服务区域的总面积" placement="right">
                            <i class="el-icon-question el-icon-question-custom"></i>
                          </el-tooltip>
                        </el-form-item>
                      </div>
                    </div>
                  </div>

                  <div class="checkbox-group-block-custom">
                    <div style="width:250px;height: 52px;">
                      <el-checkbox label="2" name="which_institutions_adress_checked">
                        <span>公共活动区域</span>
                      </el-checkbox>
                    </div>
                    <div v-if="form.functional_area.checked.includes('2')" class="form-item-panel-custom" style="">
                      <div class="form-item-title-custom" style="width:auto;min-width:auto;">建筑面积：</div>
                      <div class="form-item-wrap-custom">
                        <el-form-item class="form-item-custom" prop="functional_area.building_area[2]">
                          <el-input v-model="form.functional_area.building_area[2]" placeholder="请输入建筑面积" clearable class="long-form-item" />
                          <span style="margin-right:5px;">平方/米</span>
                          <el-tooltip class="item" effect="dark" content="指：公共活动区域的总面积" placement="right">
                            <i class="el-icon-question el-icon-question-custom"></i>
                          </el-tooltip>
                        </el-form-item>
                      </div>
                    </div>
                  </div>

                  <div class="checkbox-group-block-custom">
                    <div style="width:250px;height: 52px;">
                      <el-checkbox label="3" name="which_institutions_adress_checked">
                        <span>服务保障区域</span>
                      </el-checkbox>
                    </div>
                    <div v-if="form.functional_area.checked.includes('3')" class="form-item-panel-custom" style="">
                      <div class="form-item-title-custom" style="width:auto;min-width:auto;">建筑面积：</div>
                      <div class="form-item-wrap-custom">
                        <el-form-item class="form-item-custom" prop="functional_area.building_area[3]">
                          <el-input v-model="form.functional_area.building_area[3]" placeholder="请输入建筑面积" clearable class="long-form-item" />
                          <span style="margin-right:5px;">平方/米</span>
                          <el-tooltip class="item" effect="dark" content="指：服务保障区域的总面积" placement="right">
                            <i class="el-icon-question el-icon-question-custom"></i>
                          </el-tooltip>
                        </el-form-item>
                      </div>
                    </div>
                  </div>
                </el-checkbox-group>
              </el-form-item>
            </div>
          </div>
          <!-- 请选择功能区域(多选) end -->
          <!-- 选择‘单独设置’的子面板 end-->

          <!-- 选择‘与其他服务机构同址设置’的子面板 start-->
          <div v-else>
            <!-- 与哪些服务机构同址(多选) start -->
            <div class="form-item-panel-custom">
              <div class="form-item-title-custom"><span class="mandatory-start-custom">与哪些服务机构同址(多选)：</span></div>
              <div class="form-item-wrap-custom" style="display:block;width:100%;">
                <el-form-item class="form-item-custom" prop="which_institutions_adress.checked" style="display:block;width:100%;">
                  <el-checkbox-group v-model="form.which_institutions_adress.checked" @change="handelChange_which_institutions_adress_checked">
                    <div class="checkbox-group-block-custom">
                      <div style="width:250px;height: 52px;">
                        <el-checkbox label="0" name="which_institutions_adress_checked">
                          <span>与养老机构同址</span>
                        </el-checkbox>
                      </div>
                      <div v-if="form.which_institutions_adress.checked.includes('0')" class="form-item-panel-custom" style="">
                        <div class="form-item-title-custom" style="width:auto;min-width:auto;"><span class="mandatory-start-custom">建筑面积：</span></div>
                        <div class="form-item-wrap-custom">
                          <el-form-item class="form-item-custom" prop="which_institutions_adress.building_area[0]">
                            <el-input v-model="form.which_institutions_adress.building_area[0]" placeholder="请输入建筑面积" clearable class="long-form-item" />
                            <span style="margin-right:5px;">平方/米</span>
                            <el-tooltip class="item" effect="dark" content="指：同址的养老机构的总面积" placement="right">
                              <i class="el-icon-question el-icon-question-custom"></i>
                            </el-tooltip>
                          </el-form-item>
                        </div>
                      </div>
                    </div>

                    <div class="checkbox-group-block-custom">
                      <div style="width:250px;height: 52px;">
                        <el-checkbox label="1" name="which_institutions_adress_checked">
                          <span>与综合为老服务中心同址</span>
                        </el-checkbox>
                      </div>
                      <div v-if="form.which_institutions_adress.checked.includes('1')" class="form-item-panel-custom" style="">
                        <div class="form-item-title-custom" style="width:auto;min-width:auto;"><span class="mandatory-start-custom">建筑面积：</span></div>
                        <div class="form-item-wrap-custom">
                          <el-form-item class="form-item-custom" prop="which_institutions_adress.building_area[1]">
                            <el-input v-model="form.which_institutions_adress.building_area[1]" placeholder="请输入建筑面积" clearable class="long-form-item" />
                            <span style="margin-right:5px;">平方/米</span>
                            <el-tooltip class="item" effect="dark" content="指：同址的综合为老服务中心的总面积" placement="right">
                              <i class="el-icon-question el-icon-question-custom"></i>
                            </el-tooltip>
                          </el-form-item>
                        </div>
                      </div>
                    </div>

                    <div class="checkbox-group-block-custom">
                      <div style="width:250px;height: 52px;">
                        <el-checkbox label="2" name="which_institutions_adress_checked">
                          <span>与长者照护之家同址</span>
                        </el-checkbox>
                      </div>
                      <div v-if="form.which_institutions_adress.checked.includes('2')" class="form-item-panel-custom" style="">
                        <div class="form-item-title-custom" style="width:auto;min-width:auto;"><span class="mandatory-start-custom">建筑面积：</span></div>
                        <div class="form-item-wrap-custom">
                          <el-form-item class="form-item-custom" prop="which_institutions_adress.building_area[2]">
                            <el-input v-model="form.which_institutions_adress.building_area[2]" placeholder="请输入建筑面积" clearable class="long-form-item" />
                            <span style="margin-right:5px;">平方/米</span>
                            <el-tooltip class="item" effect="dark" content="指：同址的长者照护之家的总面积" placement="right">
                              <i class="el-icon-question el-icon-question-custom"></i>
                            </el-tooltip>
                          </el-form-item>
                        </div>
                      </div>
                    </div>

                    <div class="checkbox-group-block-custom">
                      <div style="width:250px;height: 52px;">
                        <el-checkbox label="3" name="which_institutions_adress_checked">
                          <span>与老年助餐服务场所同址</span>
                        </el-checkbox>
                      </div>
                      <div v-if="form.which_institutions_adress.checked.includes('3')" class="form-item-panel-custom" style="">
                        <div class="form-item-title-custom" style="width:auto;min-width:auto;"><span class="mandatory-start-custom">建筑面积：</span></div>
                        <div class="form-item-wrap-custom">
                          <el-form-item class="form-item-custom" prop="which_institutions_adress.building_area[3]">
                            <el-input v-model="form.which_institutions_adress.building_area[3]" placeholder="请输入建筑面积" clearable class="long-form-item" />
                            <span style="margin-right:5px;">平方/米</span>
                            <el-tooltip class="item" effect="dark" content="指：同址的老年助餐服务场所的总面积" placement="right">
                              <i class="el-icon-question el-icon-question-custom"></i>
                            </el-tooltip>
                          </el-form-item>
                        </div>
                      </div>
                    </div>

                    <div class="checkbox-group-block-custom">
                      <div style="width:250px;height: 52px;">
                        <el-checkbox label="4" name="which_institutions_adress_checked">
                          <span>与老年活动室同址</span>
                        </el-checkbox>
                      </div>
                      <div v-if="form.which_institutions_adress.checked.includes('4')" class="form-item-panel-custom" style="">
                        <div class="form-item-title-custom" style="width:auto;min-width:auto;"><span class="mandatory-start-custom">建筑面积：</span></div>
                        <div class="form-item-wrap-custom">
                          <el-form-item class="form-item-custom" prop="which_institutions_adress.building_area[4]">
                            <el-input v-model="form.which_institutions_adress.building_area[4]" placeholder="请输入建筑面积" clearable class="long-form-item" />
                            <span style="margin-right:5px;">平方/米</span>
                            <el-tooltip class="item" effect="dark" content="指：同址的老年活动室的总面积" placement="right">
                              <i class="el-icon-question el-icon-question-custom"></i>
                            </el-tooltip>
                          </el-form-item>
                        </div>
                      </div>
                    </div>
                  </el-checkbox-group>
                </el-form-item>
              </div>
            </div>
            <!-- 与哪些服务机构同址(多选) end -->

            <!-- 是否与上述机服务机构有共享场地 start -->
            <div class="form-item-panel-custom">
              <div class="form-item-title-custom"><span class="mandatory-start-custom">是否与上述机服务机构有共享场地：</span></div>
              <div class="form-item-wrap-custom">
                <el-form-item class="form-item-custom" prop="has_last_org_shared_space">
                  <el-radio-group v-if="this.isEditForm" v-model="form.has_last_org_shared_space" class="radio-item-custom" @change="handelChange_has_last_org_shared_space">
                    <el-radio label="1">是</el-radio>
                    <el-radio label="0">否</el-radio>
                  </el-radio-group>
                  <span v-else>{{form.has_last_org_shared_space}}</span>
                </el-form-item>
              </div>
            </div>
            <!-- 是否与上述机服务机构有共享场地 end -->

            <!--
              是否与上述机服务机构有共享场地:选择‘是1’
              请选择功能区域（多选）start
            -->
            <div v-if="this.form.has_last_org_shared_space === '1'" class="hidden-form-wrap-custom" style="">
              <div class="form-item-panel-custom">
                <div class="form-item-title-custom">请选择功能区域（多选）：</div>
                <div class="form-item-wrap-custom" >
                  <el-form-item class="form-item-custom">
                    <el-checkbox-group v-model="form.has_last_org_shared_space_yes">
                      <div class="checkbox-group-block-custom">
                        <div style="width:250px;height: 52px;">
                          <el-checkbox label="0" name="has_last_org_shared_space_yes">
                            <span>共享生活服务区域</span>
                          </el-checkbox>
                        </div>
                        <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 10px;">
                          <i class="el-icon-question el-icon-question-custom"></i>
                          <div slot="content">说明：用于休息、就餐及生活照料。<br/>提供助浴服务的，应当设置洗浴间。</div>
                        </el-tooltip>
                      </div>

                      <div class="checkbox-group-block-custom">
                        <div style="width:250px;height: 52px;">
                          <el-checkbox label="1" name="has_last_org_shared_space_yes">
                            <span>共享保健服务区域</span>
                          </el-checkbox>
                        </div>
                        <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 10px;">
                          <i class="el-icon-question el-icon-question-custom"></i>
                          <div slot="content">说明：用于基本康复训练、心理保健服务、<br/>简单医疗服务。</div>
                        </el-tooltip>
                      </div>

                      <div class="checkbox-group-block-custom">
                        <div style="width:250px;height: 52px;">
                          <el-checkbox label="2" name="has_last_org_shared_space_yes">
                            <span>共享公共活动区域</span>
                          </el-checkbox>
                        </div>
                        <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 10px;">
                          <i class="el-icon-question el-icon-question-custom"></i>
                          <div slot="content">说明：用于阅览、娱乐社交活动。</div>
                        </el-tooltip>
                      </div>

                      <div class="checkbox-group-block-custom">
                        <div style="width:250px;height: 52px;">
                          <el-checkbox label="3" name="has_last_org_shared_space_yes">
                            <span>共享服务保障区域</span>
                          </el-checkbox>
                        </div>
                        <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 10px;">
                          <i class="el-icon-question el-icon-question-custom"></i>
                          <div slot="content">说明：用于日常管理和后勤服务。</div>
                        </el-tooltip>
                      </div>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- 请选择功能区域（多选）end -->

            <!--
              是否与上述机服务机构有共享场地:选择‘否0’
              请选择功能区域（多选）start
            -->
            <div v-if="this.form.has_last_org_shared_space === '0'" class="hidden-form-wrap-custom" style="">
              <div class="form-item-panel-custom">
                <div class="form-item-title-custom">请选择功能区域（多选）：</div>
                <div class="form-item-wrap-custom" >
                  <el-form-item class="form-item-custom">
                    <el-checkbox-group v-model="form.has_last_org_shared_space_no">
                      <div class="checkbox-group-block-custom">
                        <div style="width:250px;height: 52px;">
                          <el-checkbox label="0" name="has_last_org_shared_space_no">
                            <span>自有生活服务区域</span>
                          </el-checkbox>
                        </div>
                        <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 10px;">
                          <i class="el-icon-question el-icon-question-custom"></i>
                          <div slot="content">说明：用于休息、就餐及生活照料。<br/>提供助浴服务的，应当设置洗浴间。</div>
                        </el-tooltip>
                      </div>

                      <div class="checkbox-group-block-custom">
                        <div style="width:250px;height: 52px;">
                          <el-checkbox label="1" name="has_last_org_shared_space_no">
                            <span>自有保健服务区域</span>
                          </el-checkbox>
                        </div>
                        <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 10px;">
                          <i class="el-icon-question el-icon-question-custom"></i>
                          <div slot="content">说明：用于基本康复训练、心理保健服务、<br/>简单医疗服务。</div>
                        </el-tooltip>
                      </div>

                      <div class="checkbox-group-block-custom">
                        <div style="width:250px;height: 52px;">
                          <el-checkbox label="2" name="has_last_org_shared_space_no">
                            <span>自有公共活动区域</span>
                          </el-checkbox>
                        </div>
                        <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 10px;">
                          <i class="el-icon-question el-icon-question-custom"></i>
                          <div slot="content">说明：用于阅览、娱乐社交活动。</div>
                        </el-tooltip>
                      </div>

                      <div class="checkbox-group-block-custom">
                        <div style="width:250px;height: 52px;">
                          <el-checkbox label="3" name="has_last_org_shared_space_no">
                            <span>自有服务保障区域</span>
                          </el-checkbox>
                        </div>
                        <el-tooltip class="item" effect="dark" placement="right" style="font-size:16px;width: 16px;height: 16px;position: relative;top: 10px;">
                          <i class="el-icon-question el-icon-question-custom"></i>
                          <div slot="content">说明：用于日常管理和后勤服务。</div>
                        </el-tooltip>
                      </div>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- 请选择功能区域（多选）end -->
          </div>

          <!-- 选择‘与其他服务机构同址设置’的子面板 end-->
      </div>
      <!-- 选择‘设置形式’ 的子面板 end -->

      <!-- 楼层信息 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">楼层信息：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="floor_information">
            <el-select v-if="this.isEditForm" v-model="form.floor_information" placeholder="请选择楼层信息" clearable class="long-form-item">
              <el-option label="1楼" value="0" />
              <el-option label="2楼" value="1" />
              <el-option label="3楼及以上" value="2" />
            </el-select>
            <span v-else>{{form.floor_information}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 楼层信息 end -->

      <!-- 设备配置 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">设备配置：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="device_configuration">
            <el-select v-if="this.isEditForm" v-model="form.device_configuration" placeholder="请选择设备配置" clearable class="long-form-item">
              <el-option label="电梯" value="0" />
              <el-option label="爬楼机" value="1" />
              <el-option label="无" value="2" />
            </el-select>
            <span v-else>{{form.device_configuration}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 设备配置 end -->

      <!-- 服务场所性质 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">服务场所性质：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="nature_service_place" style="margin-right:30px;">
            <el-radio-group v-if="this.isEditForm" v-model="form.nature_service_place" class="radio-item-custom" @change="handelChange_nature_service_place">
              <el-radio label="0">自有</el-radio>
              <el-radio label="1">租赁</el-radio>
            </el-radio-group>
            <span v-else>{{form.nature_service_place}}</span>
          </el-form-item>
          <el-form-item v-if="form.nature_service_place === '0'" class="form-item-custom" prop="nature_service_place_ziyou">
            <el-select v-if="this.isEditForm" v-model="form.nature_service_place_ziyou" placeholder="请选择" clearable class="short-form-item">
              <el-option label="公有" value="0" />
              <el-option label="私有" value="1" />
            </el-select>
            <span v-else>{{form.nature_service_place_ziyou}}</span>
          </el-form-item>
          <el-form-item v-if="form.nature_service_place === '1'" class="form-item-custom" prop="nature_service_place_zulin">
            <span>租赁场所是否归政府所有：</span>
            <el-select v-if="this.isEditForm" v-model="form.nature_service_place_zulin" placeholder="请选择" clearable class="short-form-item">
              <el-option label="是" value="1" />
              <el-option label="否" value="0" />
            </el-select>
            <span v-else>{{form.nature_service_place_zulin}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 服务场所性质 end -->

      <!-- 服务场所(建筑)产证情况 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">服务场所(建筑)产证情况：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="service_site_certificate_status">
            <el-select v-if="this.isEditForm" v-model="form.service_site_certificate_status" placeholder="请选择服务场所(建筑)产证情况" clearable class="long-form-item">
              <el-option label="有产证" value="0" />
              <el-option label="部分产证" value="1" />
              <el-option label="无产证" value="2" />
            </el-select>
            <span v-else>{{form.service_site_certificate_status}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 服务场所(建筑)产证情况 end -->

      <!-- 是否通过消防审验或备案 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">是否通过消防审验或备案：</span></div>
        <div class="form-item-wrap-custom">
          <el-form-item class="form-item-custom" prop="pass_fire_control_inspection_record">
            <el-select v-if="this.isEditForm" v-model="form.pass_fire_control_inspection_record" placeholder="请选择是否通过消防审验或备案" clearable class="long-form-item">
              <el-option label="是" value="1" />
              <el-option label="否" value="0" />
            </el-select>
            <span v-else>{{form.pass_fire_control_inspection_record}}</span>
          </el-form-item>
        </div>
      </div>
      <!-- 是否通过消防审验或备案 end -->

      <!-- 图片上传 start -->
      <div class="form-item-panel-custom">
        <div class="form-item-title-custom"><span class="mandatory-start-custom">机构图片：</span></div>
        <div class="form-item-wrap-custom">
          <span style="margin-top: 10px;margin-bottom: 15px;color: #999;">（支持jpg/jpeg格式，单张图片最大5M，最多可上传6张机构图片）</span>
          <el-form-item class="form-item-custom" prop="pass_fire_control_inspection_record">
            <upload-image-custom @pics="getPicList" :is-update="isUpdate" :form-imgs="form.org_image_arr"></upload-image-custom>
            <!-- :id-edit="isEditForm" -->
          </el-form-item>
        </div>
      </div>
      <!-- 图片上传 end -->

    </el-form>
  </div>
</template>

<script>
import areaStreetOptions from '@/assets/js/shanghai.js'
import rulesForm from '../../../js/basic-information-rules-form.js'
// 图片上传
import UploadImageCustom from "@/components/UploadImageCustom";
// 默认机构图片
import defaultImgUrl from "@/assets/img/default.png";

export default {
  name: 'LocaleInformation',
  components: {
    UploadImageCustom
	},
  data() {
    return {
      isUpdate:false,
      isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      modelType: '',//查看：look  编辑：edit  新增：add
      areaStreetOptions, // 区域街道级联假数据
      rulesForm, // 校验规则
      form:{
        name_areaStreet: [], // 行政区/街镇
        name_areaStreet_text: '', // 行政区/街镇---text
        name_orgName: '', // 详细地址
        name_houzhui: '', // 名称后缀
        name_houzhui_text: '', // 名称后缀---text
        address_areaStreetJuwei: [], // 行政区/街镇/居委
        address_cunlujie: '', // 村路街
        address_cunlujie_houzhui: '0', // 村路街-后缀
        address_nong: '', // 号/弄/支弄
        address_nong_houzhui: '0', // 号/弄/支弄-后缀
        address_address: '', // 详细地址
        build_time: '',// 建成时间
        public_enquiry_telephone: '' ,// 公开咨询电话
        current_operating_status: '',// 目前运营状态
        current_operating_status_select: '',// 【目前运营状态】选择【暂停】时的下拉框选中值
        set_style: '', // 设置形式
        building_area: '', // 建筑面积
        individual_area: '',// 其中单独休息区域面积
        // 请选择功能区域(多选)
        functional_area: {
          checked:[],
          building_area:['','','','','']
        },
        // 与哪些服务机构同址(多选)
        which_institutions_adress: {
          checked:[],
          building_area:['','','','','']
        },
        has_last_org_shared_space: '',// 是否与上述机服务机构有共享场地
        has_last_org_shared_space_yes: [] ,// 是否与上述机服务机构有共享场地--选择‘是’
        has_last_org_shared_space_no: [] ,// 是否与上述机服务机构有共享场地--选择‘否’
        floor_information:'',// 楼层信息
        device_configuration: '', // 设备配置
        nature_service_place: '',// 服务场所性质
        nature_service_place_ziyou: '' , //服务场所性质选择‘自有’的下拉框选项值
        nature_service_place_zulin: '' , //服务场所性质选择‘租赁’的下拉框选项值
        service_site_certificate_status: '',// 服务场所(建筑)产证情况
        pass_fire_control_inspection_record:'',// 是否通过消防审验或备案
        org_image_arr: [
          {index:0,name:'default_org.png',url:defaultImgUrl},
          {index:1,name:'default_org.png',url:defaultImgUrl},
          {index:2,name:'default_org.png',url:defaultImgUrl},
          {index:3,name:'default_org.png',url:defaultImgUrl},
          {index:4,name:'default_org.png',url:defaultImgUrl},
          {index:5,name:'default_org.png',url:defaultImgUrl}
        ] ,// 机构图片
      },
      // 级联下拉框的配置属性
      defaultProps: {
        expandTrigger: 'hover',
        children: 'children',
        value: 'code',
        label: 'name'
      },
      // 村路街-后缀 下拉数据
      address_cunlujie_houzhui_option:[
        { value: '0', label: '村' },
        { value: '1', label: '路' },
        { value: '2', label: '街' }
      ],
      // 号/弄/支弄-后缀 下拉数据
      address_nong_houzhui_option:[
        { value: '0', label: '号' },
        { value: '1', label: '弄' },
        { value: '2', label: '支弄' }
      ],
      // 预览地址显示文本
      showPreviewAddress:{
        city: '上海市',
        areaStreetCommitteeArr:[], // 区,街镇,居委
        area: '', // 区
        street: '', // 街镇
        committee: '', // 居委
        village_suffix: '村',// 村路街-后缀
        number_suffix: '号',// 号/弄/支弄-后缀
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
    // 获取机构图片数据
    getPicList(val) {
      this.form.org_image_arr = val
      this.isUpdate = !this.isUpdate
    },
    // 行政区/街镇 二级级联下拉框change事件
    areaStreetChange(value) {
      console.log(value)
    },
    // 行政区/街镇/居委 三级级联下拉框change事件
    areaStreetChange_1(value) {
      let _nodes_ = this.$refs['address_areaStreetJuwei'].getCheckedNodes()
      if(_nodes_ && _nodes_.length > 0){
        this.recursiveCascadeLabel(_nodes_[0])
      }
      else{
        this.showPreviewAddress.areaStreetCommitteeArr = []
      }
      this.showPreviewAddress.area = this.showPreviewAddress.areaStreetCommitteeArr[2] || ''
      this.showPreviewAddress.street = this.showPreviewAddress.areaStreetCommitteeArr[1] || ''
      this.showPreviewAddress.committee = this.showPreviewAddress.areaStreetCommitteeArr[0] || ''
    },
    // 获取级联的label数组
    recursiveCascadeLabel(obj){
      this.showPreviewAddress.areaStreetCommitteeArr.push(obj.label)
      if(obj.parent){
        this.recursiveCascadeLabel(obj.parent)
      }
    },
    // 获取村/路/街的label
    address_cunlujie_houzhui(val) {
      this.address_cunlujie_houzhui_option.filter(item=>{
        if(item.value === val){
          this.showPreviewAddress.village_suffix = item.label
          console.log(this.showPreviewAddress.village_suffix)
        }
        return true
      })
    },
    // 获取号/弄/支弄的label
    address_nong_houzhui(val) {
      this.address_nong_houzhui_option.filter(item=>{
        if(item.value === val){
          this.showPreviewAddress.number_suffix = item.label
          console.log(this.showPreviewAddress.number_suffix)
        }
        return true
      })
    },
    // 目前运营状态change
    handelChange_current_operating_status(val) {
      this.form.current_operating_status_select = ''
    },
    // 设置形式 change 重置子表单的值
    handelChange_set_style() {
      this.form.functional_area={
        checked:[],
        building_area:['','','','','']
      }
      this.form.which_institutions_adress = {
        checked:[],
        building_area:['','','','','']
      }
      this.form.has_last_org_shared_space = ''
      this.form.has_last_org_shared_space_yes = ''
      this.form.has_last_org_shared_space_no = ''
      /**
       * =========================================================================表单验证的BUG=================================================================
       */
      this.$refs.formRef.clearValidate(['which_institutions_adress'])
      this.$refs['formRef'].clearValidate(['which_institutions_adress'])
    },
    // 请选择功能区域（多选）change, 清空对应的面积
    handelChange_functional_area_checked(val) {
      this.form.functional_area.building_area.map((item,index)=>{
        if(!val.includes(index+'')){
          this.form.functional_area.building_area[index] = ''
        }
        return true
      })
    },
    // 与哪些服务机构同址(多选)change, 清空对应的面积
    handelChange_which_institutions_adress_checked(val) {
      this.form.which_institutions_adress.building_area.map((item,index)=>{
        if(!val.includes(index+'')){
          this.form.which_institutions_adress.building_area[index] = ''
        }
        return true
      })
    },
    // 是否与上述机服务机构有共享场地：切换 选项的时候，将子表单的值重置
    handelChange_has_last_org_shared_space(val) {
      this.form.has_last_org_shared_space_yes = []
      this.form.has_last_org_shared_space_no = []
    },
    // 服务场所性质change 切换对应的下拉选项
    handelChange_nature_service_place() {
      this.form.nature_service_place_ziyou = ''
      this.form.nature_service_place_zulin = ''
    },
    // 子组件校验，传递到父组件
    childrenValidateForm () {
      let flag = null
      this.$refs['formRef'].validate((valid, object) => {
        console.log('场所信息----子组件校验----', valid)
        if (valid) {
          flag = true
        } else {
          flag = false
        }
      })
      console.log('场所信息--flag----',flag)
      return flag
    },
    // 预览地址
    handelClickPreview() {
      const address = `上海市${this.showPreviewAddress.area}${this.showPreviewAddress.street}
      ${this.showPreviewAddress.committee}${this.form.address_cunlujie}
      ${this.showPreviewAddress.village_suffix}${this.form.address_nong}
      ${this.showPreviewAddress.number_suffix}${this.form.address_address}`
      this.$alert(address, '预览地址', {
        confirmButtonText: '知道了'
      })
    }
  }
}
</script>
