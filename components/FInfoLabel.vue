<template>
  <div class="f-info-label">
    <span class="f-info-label-text">
      <slot />
    </span>
    <BTooltip
      position="is-right"
      multilined
      :label="tooltipText"
    >
      <span class="f-info-label-icon">
        <BaseIcon>
          <InfoIcon />
        </BaseIcon>
      </span>
    </BTooltip>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      tooltipText: {
        type: String,
        default: '',
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  $info-icon-size: $building-unit-x2;

  .f-info-label {
    left: 100%;
    display: flex;
    color: $gray-dark;

    &-text {
      margin-right: $building-unit;
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: $white;
      width: $info-icon-size;
      height: $info-icon-size;
      transition: opacity $transition-default;
      border-radius: $border-radius-small;
      background-color: $black;
      opacity: 0.28;

      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>
