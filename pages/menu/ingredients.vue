<template>
  <NuxtChild />
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Ingredients',
    middleware: ['auth'],
    transition: {
      name: 'opacity',
      mode: 'out-in',
    },
  });
</script>
