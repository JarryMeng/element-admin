<template lang="html">
<div class="tags-view">
  <scroll-view class="tags-view-scroll" ref="tagViewScroll" @wheel.native.prevent="wheelScroll" mode="horizontal">
    <div class="tags-list">
      <router-link
        class="tag"
        :class="{active: $route.path === item.path}"
        :to="item.path"
        tag="div"
        v-for="(item,index) in viewsList"
        :key="index" @click="handleClick(item)">
        <span class="">
          {{ item.text }}
        </span>
        <i class="close-icon el-icon-close" v-if="item.del" @click.prevent="handleDel(item)"></i>
      </router-link>
    </div>
  </scroll-view>
</div>
</template>

<script>
import {
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
export default {
  watch: {
    $route() {
      console.log('tagView', this.$route)
      const {
        path,
        meta: {
          title: text
        }
      } = this.$route
      this.addTagView({
        path,
        text,
        del: true
      })
    }
  },
  computed: {
    ...mapGetters(['viewsList', 'authRoutes'])
  },
  mounted() {
    this.getDefaultVisitTageView()
  },
  methods: {
    ...mapActions({
      addTagView: 'tagViews/addTagView',
      delTagView: 'tagViews/delTagView'
    }),
    // 首页和当前选中页
    getDefaultVisitTageView() {
      if (this.authRoutes.length) {
        const homePath = this.authRoutes[0].redirect
        const currentPath = this.$route.path
        const hasRoutePath = (routes, path, hasDel = true) => {
          return routes.some(item => {
            if (item.path === path) {
              this.addTagView({
                path: item.path,
                text: item.meta.title,
                del: hasDel
              })
            } else {
              item.children && hasRoutePath(item.children, path, hasDel)
            }
          })
        }
        hasRoutePath(this.authRoutes, homePath, false)
        hasRoutePath(this.authRoutes, currentPath)
      }

    },
    wheelScroll(e) {
      const eventDelta = -e.wheelDelta || -e.deltaY
      const viewScroll = this.$refs.tagViewScroll.$children[0].$refs.wrap
      viewScroll.scrollLeft = viewScroll.scrollLeft + eventDelta
    },
    handleClick(data) {

    },
    async handleDel(data) {
      await this.delTagView(data)
      if (this.$route.path === data.path) {
        const viewsList = this.viewsList
        this.$router.replace({
          path: viewsList[viewsList.length - 1].path
        })
      }

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.tags-view {
    margin: -20px -20px 20px;
    @include border(bottom);
    height: 40x;
    padding: 0 20px;
    .tags-list {
        white-space: nowrap;
        display: inline-block;
        height: 40px;

        .tag {
            display: inline-block;
            @include border(all,1px,$default-theme);
            border-radius: 4px;
            height: 28px;
            margin: 6px 0;
            line-height: 26px;
            min-width: 60px;
            position: relative;
            padding: 0 6px;
            cursor: pointer;
            transition: background 0.5s;
            text-align: center;
            &.active {
                background: $default-theme;
                color: #fff;
                .close-icon {
                    &:hover {
                        background: $ce8;
                        color: #333;
                    }
                }
            }
            & + .tag {
                margin-left: 10px;
            }
            .close-icon {
                transition: background 0.3s;
                border-radius: 50%;
                text-align: center;
                // padding: 2px;
                font-size: 12px;
                line-height: 16px;
                height: 16px;
                width: 16px;
                vertical-align: middle;
                &:hover {
                    background: $default-theme;
                    color: #fff;
                }
            }
        }
    }
}
</style>
