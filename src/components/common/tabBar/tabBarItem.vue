<template>
  <!-- 这里是tab-bar组件的里具体item,在MainTabBar组件中通过具名插槽注入item信息(图标,文字:首页,购物车) -->
  <div class="tab-bar-item" v-on:click="changeActive" @click="itemClick">
    <div v-if="!isAictive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff8198"
    }
  },

  mounted() {
  },
  data: function() {
    return {};
  },

  //如果过于复杂,属性放在computed或者methods里进行处理
  computed: {
    // 计算属性判断当前组件是否active
    isAictive: {
      get() {
        return this.$route.path == this.path;
      },
      set() {}
    },

    // css无法使用js的变量,所有需要:style={}的形式,这时候从父组件传入的颜色才能使用到,现在computed里进行处理
    activeStyle() {
        return this.isAictive ? { color: this.activeColor } : {};
    }
  },

  methods: {
    changeActive() {
      this.isAictive = !this.isAictive;
    },
    itemClick: function() {
      // 可返回用history,不返回用replace
      // this.$route.path  当前路由信息
      if (this.$route.path != this.path) {
        this.$router.push({ path: this.path, query: {} });
      }
    }
  }
};
</script>
<style>
.tab-bar-item {
  /* 一般tab-bar的高度都是49px */
  height: 49px;
}
.tab-bar-item > div > img {
  height: 24px;
  width: 24px;
  margin: 3px 0 0px 0;
}
</style>
