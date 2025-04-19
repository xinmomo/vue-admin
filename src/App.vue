<template>
  <div class="box">
    <h1>hh</h1>
   <svg-icon name="home" color="yellow" width="30px" height="30px"></svg-icon>
  </div>
</template>

<script setup lang="ts">
//引入图标组件
import SvgIcon from './components/SvgIcon/index.vue'

</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background-color: pink;
}
h1 {
  color: $color;
}
</style>
