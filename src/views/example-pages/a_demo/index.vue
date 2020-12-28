<!-- 三级页面跳转 -->
<template>
  <section>
    <transition mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'Demo', // 很重要，务必和路由的二级路由name 保持一致
  computed: {
    // include 是匹配需要缓存的页面的name
    // this.$store.state.tagsView.cachedViews 存的是路由缓存的name
    // 路由的meta属性添加 noCache:true/false（默认为false），
    // 若为true页面不进行缓存，为false进行缓存
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

