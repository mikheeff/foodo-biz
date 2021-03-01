<template>
  <div class="ingredients-page page">
    <div class="ingredients-page-header">
      <h1 class="title is-size-2 is-marginless">
        {{ $t('ingredients') }}
      </h1>
    </div>
    <div class="ingredients-page-content">
      <div class="ingredients-page-control-panel">
        <div class="control-panel-buttons">
          <button class="button" />
          <button class="button" />
          <button class="button" />
        </div>
        <FPagination
          v-model="current"
          :total="total"
        />
      </div>
      <div class="ingredients-page-table" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Ingredients',
    data() {
      return {
        total: 30,
        current: 1,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  $header-padding: 9px 0;

  .ingredients-page {
    &-header {
      padding: $header-padding;
    }

    &-control-panel {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
