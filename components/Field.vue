<template>
  <b-field label="Name">
    <b-input v-model="name" />
  </b-field>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      value: {
        type: [Number, String],
      },
    },
  });
</script>

<style lang="scss" scoped>
</style>
