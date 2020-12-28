<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <h2 class="title">上海市养老服务平台</h2>
    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" title="搜索菜单" class="right-menu-item hover-effect" />

        <!-- <error-log class="errLog-container right-menu-item hover-effect" /> -->

        <screenfull id="screenfull" title="全屏" class="right-menu-item hover-effect" />

        <!-- <el-tooltip content="Global Size" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip> -->

      </template>

      <!-- trigger="click" 点击显示隐藏 -->
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <span class="user-name">张三</span>
          <!-- <i class="el-icon-setting" /> -->
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <a @click="showChangeSkin"><el-dropdown-item>换肤</el-dropdown-item></a>
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <el-dialog
      title="改变主题"
      :visible.sync="dialogVisible"
      width="600px"
      :modal-append-to-body="false"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <el-form ref="form" label-width="100px">
        <el-form-item label="选择主题色">
          <el-radio-group v-model="color">
            <el-radio label="1">蓝色</el-radio>
            <el-radio label="2">粉色</el-radio>
            <el-radio label="3">绿色</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button class="change-skin-cancel-btn" @click="cancelClick">取 消</el-button>
        <el-button type="primary" class="change-skin-confirm-btn" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
// import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
// import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'

import { changePageStyle } from '@/utils'

export default {
  components: {
    // Breadcrumb,
    Hamburger,
    // ErrorLog,
    Screenfull,
    // SizeSelect,
    Search
  },
  data() {
    return {
      dialogVisible: false,
      color: '1', // 选择的主题色
      oldColor: '' // 没有改变颜色时的状态
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  watch: {
    color() {
      changePageStyle(document.body, this.color)
    }
  },
  mounted() {
    const customClass = localStorage.getItem('customClass')
    this.color = customClass || '1'
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    // 打开换肤弹框
    showChangeSkin() {
      this.dialogVisible = true
      this.oldColor = this.color
    },
    // 弹框取消
    cancelClick() {
      this.dialogVisible = false
      this.color = this.oldColor
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .title{
    height: 60px;
    line-height: 60px;
    float: left;
    margin: 0;
    color: #ffffff;
    font-size: 22px;
  }

  .user-name{
    font-size: 18px;
    padding: 0 5px;
  }

  .hamburger-container {
    line-height: 60px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .08)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #ffffff;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .08)
        }
      }
    }

    .avatar-container {
      padding-right: 30px;

      .avatar-wrapper {
        position: relative;

        .user-avatar {
          position: relative;
          top: 5px;
          cursor: pointer;
          width: 24px;
          height: 24px;
          border-radius: 12px;
        }

        .el-icon-caret-bottom,
        .el-icon-caret-top {
          cursor: pointer;
          position: absolute;
          right: -22px;
          top: 20px;
          font-size: 18px;
          color: #ededed;
        }

        .el-icon-setting{
          position: relative;
          top: -2px;
          font-size: 22px;
        }
      }
    }
  }
}
</style>
