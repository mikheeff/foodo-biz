<template>
  <NuxtChild />
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Menu',
    middleware: ['auth'],
  });
</script>
