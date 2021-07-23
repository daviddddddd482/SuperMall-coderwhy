<template>
  <!-- 这里的tabbar组件只关注于tabbar组件本身,其中的内容还是需要抽取出去  -->
  <div id="tab-bar">
    <!-- 在maintabbar中这里插入tabbaritem的组件到tabBar组件的插槽中 -->
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0%;
  bottom: 0%;

  /* rgba 顔色+透明度 */
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
#tab-bar > div {
  flex: 1;
  text-align: center;
}
</style>
