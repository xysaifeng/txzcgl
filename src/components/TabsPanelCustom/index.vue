<template>
  <div>
    <ul class="tabs-card-panel-custom">
      <li :class="item.value === activeValue ? 'tabs-list active' : 'tabs-list'" v-for="(item,index) in panelItem" :key="index" @click="handelTabsPanelClick(item)">
        <div class="tabs-list-in">
          <span>{{ item.label }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabsPanelCustom',
  props: ['panelItem','activeValue'],
  // watch: {
  //   activeValue: {
  //     handler() {
  //       console.log('panelItem-------',panelItem);
  //     }
  //   }
  // },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    handelTabsPanelClick(val) {
      // 触发事件=====
      this.$emit('tabsPanelClick',val);
    }
  }
}
</script>
<style lang="scss">
  // tabs card 切换面板样式自定义
  .tabs-card-panel-custom{
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    & .tabs-list{
      list-style: none;
      position: relative;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      color: #40485b;
      border-color: red; // 换肤
      border-width: 1px;
      border-style: solid;
      border-left: none;
      border-right: none;
      margin: 0 4px;
      background-color: #ffffff;
      cursor: pointer;
      transition: all 0.2s;

      & > .tabs-list-in{
        width: 150px;
        text-align: center;
        & > span{
          position: relative;
          left: 10px;
        }
        &::before{
          position: absolute;
          content: '';
          top: -1px;
          right: -45px;
          border-top: 25px transparent dashed;
          border-right: 25px transparent dashed;
          border-left: 25px red solid;
          border-bottom: 25px transparent dashed;
          transform: scaleX(0.8);
          z-index: 3;
        }
        &::after{
          position: absolute;
          content: '';
          top: -1px;
          right: -44px;
          border-top: 25px transparent dashed;
          border-right: 25px transparent dashed;
          border-left: 25px #fff solid;
          border-bottom: 25px transparent dashed;
          transform: scaleX(0.8);
          z-index: 4;
          transition: all 0.2s;
        }
      }
      &::before{
        position: absolute;
        content: '';
        top: -1px;
        left: -5px;
        border-top: 25px transparent dashed;
        border-right: 25px transparent dashed;
        border-left: 25px red solid;
        border-bottom: 25px transparent dashed;
        transform: scaleX(0.8);
        z-index: 1;
      }
      &::after{
        position: absolute;
        content: '';
        top: -1px;
        left: -6px;
        border-top: 25px transparent dashed;
        border-right: 25px transparent dashed;
        border-left: 25px #fff solid;
        border-bottom: 25px transparent dashed;
        transform: scaleX(0.8);
        z-index: 2;
      }
    }
    & .tabs-list.active{
      background-color: red;
      & > .tabs-list-in{
        &::after{
          border-left: 25px red solid;
        }
        & > span{
          color: #ffffff;
        }
      }
    }
  }
</style>
