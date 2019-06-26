<template>
  <div>
    <div>第一个组件</div>
    <hello></hello>
  </div>
</template>

<script>
import hello from "@/hello";
export default {
  components: { hello }
};
</script>

<style scoped>
div {
  color: goldenrod;
}
</style>