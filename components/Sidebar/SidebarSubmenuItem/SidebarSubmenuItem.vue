
<template>
  <NuxtLink
    tag="div"
    class="sidebar-submenu-item"
    :to="{name: routeName}"
  >
    <BaseIcon
      :height="iconHeight"
      :width="iconWidth"
    >
      <slot />
    </BaseIcon>
    <transition name="opacity">
      <span
        v-if="isTitleShown"
        class="sidebar-submenu-item-title"
      >
        {{ title }}
      </span>
    </transition>
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
        required: true,
      },
      isTitleShown: {
        type: Boolean,
        default: false,
      },
      iconWidth: {
        type: [Number, String],
        default: 28,
      },
      iconHeight: {
        type: [Number, String],
        default: 28,
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  .sidebar-submenu-item {
    @include font-size(6);

    align-items: center;
    color: $gray;
    cursor: pointer;
    display: flex;
    transition: $transition-default;

    &.is-active {
      color: $aqua-dark;
      letter-spacing: -0.2px;
    }

    & + & {
      margin-top: $building-unit-x2;
    }

    &-title {
      margin-left: $building-unit;
      white-space: nowrap;
    }

    svg {
      flex-shrink: 0;
    }
  }
</style>
