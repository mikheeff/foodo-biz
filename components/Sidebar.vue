<template>
  <aside class="sidebar">
    <div class="logo" />
  </aside>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>

<style lang="scss" scoped>

  .sidebar {
    padding: 35px 21px;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(176deg, #12b8c6 15%, #0e98a4 89%);

    .logo {
      height: 54px;
      width: 54px;
      background: url('~assets/logo.svg');
    }
  }
</style>
