<template>
  <div id="app" class="app">
    <div class="view">
      <Sidebar />
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
  });
</script>

<style lang="scss" scoped>

  .app {
    display: flex;
    min-height: 100vh;
  }

  .view {
    display: flex;
    width: 100%;
  }
</style>
