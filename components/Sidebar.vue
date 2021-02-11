<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="logo" />
      <div class="sidebar-menu">
        <div class="sidebar-menu-item">
          <BaseIcon
            height="28"
            width="28"
          >
            <HomeIcon />
          </BaseIcon>
          <span class="sidebar-menu-item-title">{{ $t('main') }}</span>
        </div>
        <div class="sidebar-menu-item">
          <BaseIcon
            height="28"
            width="28"
          >
            <MenuIcon />
          </BaseIcon>
          <span class="sidebar-menu-item-title">{{ $t('menu') }}</span>
        </div>
        <div class="sidebar-menu-item">
          <BaseIcon
            height="28"
            width="28"
          >
            <KitchenIcon />
          </BaseIcon>
          <span class="sidebar-menu-item-title">{{ $t('kitchen') }}</span>
        </div>
        <div class="sidebar-menu-item">
          <BaseIcon
            height="28"
            width="28"
          >
            <OrderIcon />
          </BaseIcon>
          <span class="sidebar-menu-item-title">{{ $t('orders') }}</span>
        </div>
      </div>
    </div>
    <div class="sidebar-footer">
      <div class="sidebar-bottom-menu">
        <div class="sidebar-menu-item">
          <BaseIcon
            height="28"
            width="28"
          >
            <BellIcon />
          </BaseIcon>
        </div>
        <div class="sidebar-menu-item">
          <BaseIcon
            height="28"
            width="28"
          >
            <SettingsIcon />
          </BaseIcon>
        </div>
        <div class="sidebar-menu-item">
          <BaseIcon
            height="28"
            width="28"
          >
            <ExitIcon />
          </BaseIcon>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
  import Vue from 'vue';
  import MenuIcon from '~/components/icons/MenuIcon.vue';
  import KitchenIcon from '~/components/icons/KitchenIcon.vue';
  import OrderIcon from '~/components/icons/OrderIcon.vue';
  import SettingsIcon from '~/components/icons/SettingsIcon.vue';
  import ExitIcon from '~/components/icons/ExitIcon.vue';

  export default Vue.extend({
    components: { ExitIcon, SettingsIcon, OrderIcon, KitchenIcon, MenuIcon },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  $sidebar-width: 96px;
  $logo-size: 54px;
  $menu-item-width: 82px;
  $menu-item-height: 90px;

  .sidebar {
    width: $sidebar-width;
    padding: $building-unit-x2_5 $building-unit-x0_5 $building-unit-x0_5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(176deg, #12b8c6 15%, #0e98a4 89%);

    &-header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .logo {
      height: $logo-size;
      width: $logo-size;
      margin-bottom: $building-unit-x5;
      background: url('~assets/icons/logo.svg');
    }

    &-menu {

      &-item {
        cursor: pointer;
        transition: background $transition-default;
        padding: $building-unit $building-unit_x0_5;
        width: $menu-item-width;
        border-radius: $building-unit-x1_5;
        color: $white;
        display: flex;
        flex-direction: column;
        align-items: center;

        svg:not(:only-child) {
          margin-bottom: $building-unit;
        }

        &:hover {
          background-color: rgba($gray-53, 0.42);
        }

        &-title {
          @include font-size(6);
        }

        & + & {
          margin-top: $building-unit-x0_5;
        }
      }
    }

    &-bottom-menu {

    }
  }
</style>
