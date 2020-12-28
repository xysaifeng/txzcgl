<!-- 统一组件风格 -->
<template>
  <div class="wrap">
    <h1>统一组件风格</h1>
    <br><br>
    <el-divider content-position="left">form 表单</el-divider>
    <br>
    <el-form ref="form" :model="form" label-width="150px">
      <!-- input -->
      <el-form-item label="输入框">
        <el-input v-model="form.name" placeholder="请输入" clearable />
      </el-form-item>

      <!-- 下拉框 -->
      <el-form-item label="下拉框">
        <el-select v-model="form.region" placeholder="请选择" clearable style="width:100%;">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>

      <!-- 日期控件 -->
      <el-form-item label="日期范围选择器">
        <el-date-picker
          v-model="form.daterange1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="width:100%;"
        />
      </el-form-item>

      <!-- 多选框 -->
      <el-form-item label="多选框">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type" />
          <el-checkbox label="地推活动" name="type" />
          <el-checkbox label="线下主题活动" name="type" />
          <el-checkbox label="单纯品牌曝光" name="type" />
        </el-checkbox-group>
      </el-form-item>

      <!-- 单选框 -->
      <el-form-item label="单选框">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助" />
          <el-radio label="线下场地免费" />
        </el-radio-group>
      </el-form-item>

      <!-- 按钮 -->
      <el-form-item label="按钮">
        <el-button type="primary">默认</el-button>
        <el-button type="success">成功</el-button>
        <el-button type="warning">警告</el-button>
        <el-button type="danger">错误</el-button>
        <el-button type="primary" disabled>禁用</el-button>
        <el-button type="info">次用</el-button>
        <el-button type="primary" class="reset-btn-custom" plain>重置</el-button>
      </el-form-item>

      <!-- 提示 -->
      <el-form-item label="提示">
        <el-tooltip class="item" effect="dark" content="指：同址的老年活动室的总面积" placement="right" >
          <i class="el-icon-info"></i>
        </el-tooltip>
      </el-form-item>

      <!-- 带换行的提示 -->
      <el-form-item label="带换行的提示">
        <el-tooltip class="item" effect="dark" placement="right" >
          <i class="el-icon-info"></i>
          <div slot="content">说明：用于休息、就餐及生活照料。<br/>提供助浴服务的，应当设置洗浴间。</div>
        </el-tooltip>
      </el-form-item>

    </el-form>

    <br><br>
    <el-divider content-position="left">tree 树</el-divider>
    <br>

    <el-tree
      ref="tree"
      node-key="id"
      :data="treeData"
      show-checkbox
      default-expand-all
      highlight-current
      :props="defaultProps"
    />

    <br><br>
    <el-divider content-position="left">table 表格</el-divider>
    <br>

    <!-- table -->
    <!--
      border	是否带有纵向边框
      stripe	是否为斑马纹 table
      show-overflow-tooltip	当内容过长被隐藏时显示 tooltip
     -->
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column fixed prop="date" label="日期" min-width="150" align="center" />
      <el-table-column prop="name" label="姓名" min-width="120" align="center" />
      <el-table-column prop="province" label="省份" min-width="120" align="center" />
      <el-table-column prop="city" label="市区" min-width="120" align="center" />
      <el-table-column prop="address" label="地址" min-width="300" align="center" show-overflow-tooltip />
      <el-table-column prop="zip" label="邮编" min-width="120" align="center" />
      <el-table-column fixed="right" label="操作" min-width="250" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" class="table-look-btn" @click="handleClick(scope.row)">查看</el-button>
          <el-button type="text" size="small" class="table-edit-btn">编辑</el-button>
          <el-button type="text" size="small" class="table-delete-btn">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <!-- 分页 -->
    <el-pagination background layout="total, sizes, ->, prev, pager, next, jumper" :total="1000" />
    <br><br>

    <el-divider content-position="left">级联选择器</el-divider>
    <br>
    <!-- 级联选择器 -->
    <el-cascader :options="cascaderOptions" :props="{ multiple: true, checkStrictly: true }" clearable />

    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: 'StandardComponent',
  data() {
    return {
      form: {
        name: '',
        region: '',
        daterange1: '',
        type: [],
        resource: ''
      },
      tableData: [
        { date: '2016-05-02', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333 },
        { date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: 200333 },
        { date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: 200333 },
        { date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: 200333 },
        { date: '2016-05-02', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333 },
        { date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: 200333 },
        { date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: 200333 },
        { date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: 200333 }
      ],
      treeData: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      cascaderOptions: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则'
        }, {
          value: 'daohang',
          label: '导航'
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic'
        }, {
          value: 'form',
          label: 'Form'
        }, {
          value: 'others',
          label: 'Others'
        }]
      }]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-divider__text{
    font-size: 24px;
  }
  .wrap{
    padding: 20px;
  }
</style>

