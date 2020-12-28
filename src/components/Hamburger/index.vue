<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <svg-icon :class="{'is-active':isActive}" class="holdMenu" icon-class="hold-menu" />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.holdMenu{
  position: relative;
  top: 2px;
  color: #fff;
  font-size: 22px;
}
.holdMenu.is-active{
  transform: rotate(180deg);
}
</style>
