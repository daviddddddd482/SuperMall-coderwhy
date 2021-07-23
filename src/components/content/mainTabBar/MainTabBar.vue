<template>
  <div>
    <!-- <router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件。
         <router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件。 
    -->
    <router-view></router-view>
    <tab-bar>
      <!-- 四个需求插四个item,五个需求插五个item,抽取公共组件的好处 -->
      <tab-bar-item path="/home" activeColor='#ff8198' >
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <div slot="item-text">首页</div>
        <!-- 点击时选中的显示的图片也一起通过插槽插入,在item进行业务代码 -->
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
        />
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor='#ff8198' >
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="" />
        <div slot="item-text">分类</div>
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/category_active.svg"
          alt=""
        />
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor='#ff8198' >
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="" />
        <div slot="item-text">购物车</div>
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor='#ff8198' >
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="" />
        <div slot="item-text">我的</div>
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/profile_active.svg"
          alt=""
        />
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import tabBar from "@/components/common/tabBar/tabBar.vue";
import tabBarItem from "@/components/common/tabBar/tabBarItem.vue";
export default {
  components: {
    tabBar,
    tabBarItem
  }
};
</script>
<style></style>
