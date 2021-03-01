<template>
  <BPagination
    :current="value"
    :total="total"
    per-page="10"
    tabindex="-1"
    order="is-centered"
    @update:current="emitValue"
  />
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      value: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
    },
    methods: {
      emitValue(value: string | number) {
        this.$emit('input', value);
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

</style>
