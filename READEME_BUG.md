### 【安装问题解决】
```bash
# 一、
# error An unexpected error occurred: "https://raw.githubusercontent.com/sohee-lee7/Squire/b1e0e1031fa18912d233c204cbe7c7fae4a42621/  package.json: connect ETIMEDOUT 151.101.108.133:443".

# 解决方法: https://blog.csdn.net/pznavbypte/article/details/90710878

# 二、
# Yarn 安装过程出现 read ECONNRESET 错误
# 解决方法: https://blog.csdn.net/j510924/article/details/84826692
```



### 关于页面路由缓存的问题解决
```bash
# AppMain.vue 设置 <keep-alive></keep-alive>
# 注意：路由设置的name 必须和 vue组件的name 保持一致

# 对于三级及以下的嵌套路由，keep-alive失效的解决方法:
# 在二级文件加下，新建一个index.vue，内容和AppMain.vue保持一致，且组件的name和二级路由name 保持一致，
# 最后在 tagsView.js 的 cachedViews数组中添加 当前组件的name
```

