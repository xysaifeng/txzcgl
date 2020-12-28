<!-- 老年助餐服务场所-列表 -->
<template>
  <el-container>
    <el-header class="content-header-custom">
      <el-form ref="formRef" :model="form" label-width="110px">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
            <el-form-item label="机构名称" prop="jigoumingcheng">
              <el-input v-model="form.jigoumingcheng" placeholder="请输入机构名称" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
            <el-form-item label="行政区/街镇" prop="areaStreet">
              <el-cascader
                v-model="form.areaStreet"
                :options="areaStreetOptions"
                :props="defaultProps"
                style="width: 100%"
                placeholder="请选择行政区/街镇"
                @change="areaStreetChange"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
            <el-form-item label="开放状态" prop="openStatus">
              <el-select v-model="form.openStatus" placeholder="请选择开放状态" clearable style="width:100%;">
                <el-option label="状态a" value="1" />
                <el-option label="状态b" value="2" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
            <el-form-item label="机构建立时间" prop="orgDaterange">
              <el-date-picker
                v-model="form.orgDaterange"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width:100%;"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
            <el-form-item label="地址" prop="address">
              <el-input v-model="form.address" placeholder="请输入详细地址" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
            <el-form-item label="申请状态" prop="applyStatus">
              <el-select v-model="form.applyStatus" placeholder="请选择申请状态" clearable style="width:100%;">
                <el-option label="状态a" value="1" />
                <el-option label="状态b" value="2" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
            <el-form-item label="信息变更状态" prop="modifyInfoStatus">
              <el-select v-model="form.modifyInfoStatus" placeholder="请选择信息变更状态" clearable style="width:100%;">
                <el-option
                    v-for="item in orgIdOptions"
                    :key="item.orgId"
                    :label="item.orgName"
                    :value="item.orgId">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="16" :xl="6" style="text-align: right;margin-bottom:22px;">
            <el-button type="primary" @click="handelClickSearch">查询</el-button>
            <el-button type="primary" class="reset-btn-custom" plain @click="handelClickReset('formRef')">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-header>
    <el-main>
      <div>
        <el-button type="primary" @click="handleClickAdd">新增</el-button>
        <p class="table-total-panel-custom">选择<span>{{ selectDataLength }}</span>条数据，合计<span>{{ dataTotal }}</span>条数据</p>
      </div>
      <el-table :data="tableData" border stripe style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column fixed prop="date" label="日期" min-width="150" align="center" />
        <el-table-column prop="jigoumingcheng" label="姓名" min-width="120" align="center" />
        <el-table-column prop="province" label="省份" min-width="120" align="center" />
        <el-table-column prop="city" label="市区" min-width="120" align="center" />
        <el-table-column prop="address" label="地址" min-width="300" align="center" show-overflow-tooltip />
        <el-table-column prop="zip" label="申请状态" min-width="120" align="center">
          <template slot-scope="{ row }">
            <span v-if="row.zip === '1'" style="color:green;">通过</span>
            <span v-else>{{ row.zip }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" min-width="250" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="table-look-btn" @click="handleClickLook(scope.row)">查看</el-button>
            <el-button type="text" size="small" class="table-look-btn" @click="handelClickEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" class="table-look-btn" @click="handelClickDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <!-- 分页 -->
      <el-pagination background layout="total, sizes, ->, prev, pager, next, jumper" :total="dataTotal" :sizes="15" />
    </el-main>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      class="center-dialog-custom"
      :before-close="handelClickDialogCancel"
    >
      <span>确定删除当前机构吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handelClickDialogCancel">取 消</el-button>
        <el-button type="primary" @click="handelClickDialogConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import areaStreetOptions from '@/assets/js/shanghai.js'

export default {
  name: 'HelpMeals',
  data() {
    return {
      // 村路街-后缀 下拉数据
      orgIdOptions:[
        {
          orgId: '0',
          orgName: '村'
        }, {
          orgId: '1',
          orgName: '路'
        }, {
          orgId: '2',
          orgName: '街'
        }
      ],
      form: {
        jigoumingcheng: '', // 机构名称
        areaStreet: [], // 行政区/街镇
        openStatus: '', // 开放状态
        orgDaterange: '', // 机构建立时间
        applyStatus: '', // 申请状态
        modifyInfoStatus: '' // 信息变更状态
      },
      selectDataLength: 0, // 已勾选的数据数量
      defaultProps: {
        expandTrigger: 'hover',
        children: 'children',
        value: 'code',
        label: 'name'
      },
      areaStreetOptions,
      tableData: [
        { id: '0abc', date: '2016-05-02', jigoumingcheng: '王小虎', province: '上海', city: '普陀区', address: '假如这是一个很长很长很长很长的title', zip: '1' },
        { id: '1abc', date: '2016-05-04', jigoumingcheng: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: '0' },
        { id: '2abc', date: '2016-05-04', jigoumingcheng: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: '1' },
        { id: '3abc', date: '2016-05-04', jigoumingcheng: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: '0' },
        { id: '4abc', date: '2016-05-02', jigoumingcheng: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: '1' },
        { id: '5abc', date: '2016-05-04', jigoumingcheng: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: '1' },
        { id: '6abc', date: '2016-05-04', jigoumingcheng: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: '0' },
        { id: '7abc', date: '2016-05-04', jigoumingcheng: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: '0' }
      ],
      dataTotal: 1000, // 分页的数量
      dialogVisible: false // 提示框是否关闭打开
    }
  },
  methods: {
    // 行政区/街镇级联下拉框change事件
    areaStreetChange(value) {
      console.log(value)
    },
    // 新增
    handleClickAdd() {
      this.$router.push({
        path: '/help-meals/details/0',
        query: {
          'id': '',
          'modelType': 'add',
          'customTitle': `新增老年助餐服务场所`
        }
      })
    },
    // 查询
    handelClickSearch() {},
    // 重置
    handelClickReset(formName) {
      this.$refs[formName].resetFields()
    },
    // 查看
    // modelType类型（查看:look，编辑:edit，新增:add）
    handleClickLook(row) {
      this.$router.push({
        path: `/help-meals/details/${row.id}`,
        query: {
          'id': row.id,
          'modelType': 'look',
          'customTitle': `查看${row.address}`
        }
      })
    },
    // 编辑
    handelClickEdit(row) {
      this.$router.push({
        path: `/help-meals/details/${row.id}`,
        query: {
          'id': row.id,
          'modelType': 'edit',
          'customTitle': `编辑${row.address}`
        }
      })
    },
    // 删除
    handelClickDelete(row) {
      console.log(row.id)
      this.dialogVisible = true
    },
    // 表格多选事件监听
    handleSelectionChange(val) {
      console.log(val)
      this.selectDataLength = val.length
    },
    // 提示框-确定按钮事件
    handelClickDialogConfirm() {
      this.dialogVisible = false
      this.$message({
        message: '删除成功',
        type: 'success'
      })
    },
    // 提示框-取消/关闭按钮事件
    handelClickDialogCancel() {
      this.dialogVisible = false
      this.$message({
        message: '取消操作'
      })
    }
  }
}
</script>

<style>

</style>

