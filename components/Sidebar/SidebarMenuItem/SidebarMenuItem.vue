<template>
  <NuxtLink
    tag="div"
    class="sidebar-menu-item"
    :to="{name: routeName}"
  >
    <BaseIcon
      width="28"
      height="28"
    >
      <slot />
    </BaseIcon>
    <span
      v-if="title"
      class="sidebar-menu-item-title"
    >
      {{ title }}
    </span>
  </NuxtLink>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      routeName: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        default: '',
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  $menu-item-width: 82px;

  .sidebar-menu-item {
    cursor: pointer;
    transition: $transition-default;
    padding: $building-unit $building-unit_x0_5;
    width: $menu-item-width;
    border-radius: $building-unit-x1_5;
    color: $gray-233;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg:not(:only-child) {
      margin-bottom: $building-unit;
    }

    &.is-active,
    &:hover {
      color: $white;
      background-color: rgba($gray-53, 0.42);
    }

    &-title {
      @include font-size(6);
    }

    & + & {
      margin-top: $building-unit-x0_5;
    }
  }
</style>
