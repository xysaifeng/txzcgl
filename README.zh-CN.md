### 文件/文件夹命名规范
```bash
# index.js 或者 index.vue，统一使用小写字母开头的(kebab-case)命名规范
# 属于组件或类的，统一使用大写字母开头的(PascalCase)命名规范
# 其他非组件或类的，统一使用小写字母开头的(kebab-case)命名规范
```

### 代码书写规范
```bash
# 1、如果html元素没有子级，则使用单标签。
# 例如：<div />，<span /> ，并且标签名和/之间要有空格
# 2、如果html元素有子级，则使用双标签。
# 例如：<div prop="">子级</div>，<span prop="">子级</span>，并且上标签的>左侧不能有空格
# 3、注释元素 // ..., /* ... */ 要和注释内容有空格
# 4、js代码一行结束不加逗号符';'

# 类名class，id命名规则：
# 用小写加横杠。例如：content-header-custom
```


## 开发

```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-element-admin.git

# 进入项目目录
cd vue-element-admin

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9527

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```
