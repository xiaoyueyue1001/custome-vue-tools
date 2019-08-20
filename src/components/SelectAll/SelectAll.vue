<template>
  <el-select v-model="itemsCurrent" multiple placeholder="请选择人员" style="width:360px">
    <el-option v-for="item in optionsAll" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    itemsCurrent(val, oldVal) {
      if (this.stopLoop) {
        this.stopLoop = false;
        return;
      }
      let items = [];
      // 取消勾选
      if (val.length < oldVal.length) {
        if (oldVal.includes("all") && !val.includes("all")) {
          // 取消的为all
          items = [];
          this.stopLoop = true;
        } else {
          // 取消的不为all
          items = val.filter(item => item !== "all");
          this.stopLoop = true;
        }
        // 添加勾选
      } else if (val.length > oldVal.length) {
        // 添加的为all
        if (val.includes("all")) {
          items = this.optionsAll.map(item => item.value);
        } else {
          // 添加的不为all
          if (val.length === this.optionsAll.length - 1) {
            items = ["all", ...val];
            this.stopLoop = true;
          } else {
            items = val;
          }
        }
      } else {
        items = val;
      }
      this.itemsCurrent = items;
      this.$emit("select", items.filter(item => item !== "all"));
    }
  },
  computed: {
    optionsAll() {
      let optionsAll = JSON.parse(JSON.stringify(this.options));
      if (optionsAll.length) {
        optionsAll.unshift({
          label: "全部",
          value: "all"
        });
      }
      return optionsAll;
    }
  },
  model: {
    prop: "items",
    event: "select"
  },
  data() {
    return {
      itemsCurrent: [],
      stopLoop: false
    };
  },
  created() {
    this.itemsCurrent = JSON.parse(JSON.stringify(this.items));
  }
};
</script>

<style lang="less">
</style>
