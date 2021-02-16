<template>
  <NuxtChild />
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Orders',
    middleware: ['auth'],
  });
</script>
