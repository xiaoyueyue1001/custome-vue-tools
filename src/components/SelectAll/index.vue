<template>
  <SeleCtAll v-model="items" :options="options"></SeleCtAll>
</template>
<script>
import SeleCtAll from "./SelectAll";
export default {
  components: { SeleCtAll },
  data() {
    return {
      items: ["002"],
      options: [
        { label: "张三", value: "001" },
        { label: "李四", value: "002" },
        { label: "王五", value: "003" },
        { label: "赵六", value: "004" }
      ]
    };
  }
};
</script>

<style lang="less">
</style>
