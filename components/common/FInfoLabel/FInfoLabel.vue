<template>
  <div class="f-info-label">
    <span class="f-info-label-text">
      <slot />
    </span>
    <FTooltip
      multilined
      :text="tooltipText"
    >
      <span class="f-info-label-icon">
        <BaseIcon>
          <InfoIcon />
        </BaseIcon>
      </span>
    </FTooltip>
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
    color: $gray-dark;
    display: flex;
    left: 100%;

    &-text {
      margin-right: $building-unit;
    }

    &-icon {
      align-items: center;
      background-color: $black;
      border-radius: $border-radius-small;
      color: $white;
      display: flex;
      height: $info-icon-size;
      justify-content: center;
      opacity: 0.28;
      transition: opacity $transition-default;
      width: $info-icon-size;

      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>
