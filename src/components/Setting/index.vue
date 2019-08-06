<template lang="html">
  <Popup>
    <scroll-view>
      <div class="app-setting">
        <div class="title">
          整体风格设置
        </div>
        <div class="select">
          <el-tooltip effect="dark" content="暗色菜单风格" placement="top" @click.native="setTheme('dark')">
            <div class="item">
              <img src="./icons/dark-theme.svg" alt="dark">
              <div class="select-icon" v-if="theme === 'dark'">
                <i class="el-icon-check"></i>
              </div>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="亮色菜单风格" placement="top" @click.native="setTheme('light')">
            <div class="item">
              <img src="./icons/light-theme.svg" alt="light">
              <div class="select-icon" v-if="theme === 'light'">
                <i class="el-icon-check"></i>
              </div>
            </div>
          </el-tooltip>
        </div>
        <div class="title">
          主题色
        </div>
        <div class="them-color">
          <el-tooltip effect="dark"
            @click.native="handleThemeColor(item.color)"
            v-for="(item,index) in colorList"
            :key="index"
            :content="item.key" placement="top">
            <div class="item">
              <el-tag :color="item.color"></el-tag>
              <div class="select-icon" v-show="themeColor == item.color">
                <i class="el-icon-check"></i>
              </div>
            </div>
          </el-tooltip>
        </div>
        <el-divider></el-divider>
        <div class="title">
          导航模式
        </div>
        <div class="select">
          <el-tooltip effect="dark" content="侧边栏导航" placement="top" @click.native="setLayoutMode('sidemenu')">
            <div class="item">
              <img src="./icons/dark-theme.svg" alt="dark">
              <div class="select-icon" v-if="layoutMode === 'sidemenu'">
                <i class="el-icon-check"></i>
              </div>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="顶部栏导航" placement="top" @click.native="setLayoutMode('topmenu')">
            <div class="item">
              <img src="./icons/top-navbar.svg" alt="light">
              <div class="select-icon" v-if="layoutMode === 'topmenu'">
                <i class="el-icon-check"></i>
              </div>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="头部合并" placement="top" @click.native="setLayoutMode('mergeHeader')">
            <div class="item">
              <img src="./icons/light-theme0.svg" alt="mergeHeader">
              <div class="select-icon" v-if="layoutMode === 'mergeHeader'">
                <i class="el-icon-check"></i>
              </div>
            </div>
          </el-tooltip>
        </div>
        <div class="switch-item">
          <div class="label">
            内容区域宽度
          </div>
          <el-select :value="contentWidth" placeholder=" " @change="setContentWidth">
            <el-option label="固定" v-if="layoutMode === 'topmenu'" value="fixed"></el-option>
            <el-option label="流式" value="fluid"></el-option>
          </el-select>
        </div>
        <div class="switch-item">
          <div class="label" :style="{ textDecoration: layoutMode === 'mergeHeader' ? 'line-through' : 'unset' }">
            固定 Header
          </div>
          <ElSwitch :value="fixedHeader" :disabled="layoutMode === 'mergeHeader'" @change="setFixedHeader" />
        </div>
        <div class="switch-item">
          <div class="label" :style="{ textDecoration: (layoutMode === 'topmenu'||layoutMode === 'mergeHeader') ? 'line-through' : 'unset' }">
            固定侧边菜单
          </div>
          <ElSwitch :value="fixedSiderbar" :disabled="layoutMode === 'topmenu'||layoutMode === 'mergeHeader'" @change="setFixedSiderbar" />
        </div>
        <el-divider></el-divider>
        <div class="title">
          其他设置
        </div>
        <div class="switch-item">
          <div class="label">
            开启标签导航
          </div>
          <ElSwitch :value="tagViewShow" @change="setTagViewsShow" />
        </div>
        <el-divider></el-divider>
        <div class="setting-item">
          <el-button type="primary" ref="copySetting" icon="el-icon-document-copy" @click="copySettings">拷贝设置</el-button>
          <div class="label">
            配置栏只在开发环境用于预览，生产环境不会展现，请手动修改配置文件
            /src/settings/index.js
          </div>
        </div>
        <el-divider></el-divider>
      </div>
    </scroll-view>
  </Popup>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import {
  colorList
} from '@/settings'
import Clipboard from 'clipboard'
import ThemeColor from '@/utils/changeTheme'
import Popup from './components/Popup.vue'
export default {
  data() {
    return {
      colorList
    }
  },
  components: {
    Popup
  },
  computed: {
    ...mapGetters(['layoutMode', 'theme', 'tagViewShow', 'themeColor', 'fixedHeader', 'contentWidth', 'fixedSiderbar'])
  },
  mounted() {
    this.clipboardEl = this.$refs.copySetting.$el
    this.clipboard = new Clipboard(this.clipboardEl)
    this.clipboardEl.setAttribute('data-clipboard-text', '')
    this.clipboard.on('success', (e) => {
      e.clearSelection();
      this.$message.success('复制成功')
    })
    this.clipboard.on('error', (e) => {
      this.$message.error('复制失败');
    })
  },
  beforeDestroy() {
    this.clipboard.destroy()
  },
  methods: {
    ...mapActions({
      setLayoutMode: 'app/setLayoutMode',
      setTheme: 'app/setTheme',
      setTagViewsShow: 'app/setTagViewsShow',
      setThemeColor: 'app/setThemeColor',
      setContentWidth: 'app/setContentWidth',
      setFixedHeader: 'app/setFixedHeader',
      setFixedSiderbar: 'app/setFixedSiderbar'
    }),
    async handleThemeColor(color) {
      await ThemeColor.changeTheme(color)
      this.setThemeColor(color)
    },
    copySettings(e) {
      const settings = `{
        layoutMode: '${this.layoutMode}',
        theme: '${this.theme}',
        themeColor: '${this.themeColor}',
        tagViewShow: ${this.tagViewShow},
        contentWidth: '${this.contentWidth}',
        fixedHeader: ${this.fixedHeader},
        fixedSiderbar: ${this.fixedSiderbar}
      }`
      this.clipboardEl.setAttribute('data-clipboard-text', settings)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-setting {
    width: 300px;
    padding: 36px 24px 24px;
    .title {
        color: rgba(0, 0, 0, 0.85);
        font-size: 16px;
    }
    .el-divider {
        margin: 16px 0;
    }
    .select {
        padding: 10px 0;
        .item {
            display: inline-block;
            margin-right: 16px;
            position: relative;
            cursor: pointer;
            .select-icon {
                position: absolute;
                z-index: 10;
                right: 8px;
                bottom: 12px;
                font-size: 16px;
                color: #1890ff;
                text-shadow: 0 0 4px #1890ff;
            }
        }
    }
    .them-color {
        padding: 10px 0;
        .item {
            display: inline-block;
            position: relative;
            margin-right: 8px;
            border: 0;
            cursor: pointer;
            .el-tag {
                width: 22px;
                height: 22px;
                color: #fff;
            }
            .select-icon {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                text-align: center;
                line-height: 20px;
                color: #fff;
            }
        }
    }
    .switch-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 26px;
        padding: 24px 0;
        cursor: pointer;
    }
    .setting-item {
        @include flex-box(column,center,center);
        .label {
            margin-top: 20px;
        }
    }
}
</style>
<style  lang="scss">
.app-setting {
    .el-select {
        width: 80px;
        height: 24px;
        .el-input__inner {
            height: 24px;
            line-height: 24px;
        }
        .el-input__icon {
            line-height: 24px;
        }
    }
}
</style>
