<template>
  <div>
    朱啟文的输入框
    <input type="text" v-model="name" />
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "zqw-input",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style>
</style>