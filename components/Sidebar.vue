<template>
  <aside class="sidebar">
    <div class="sidebar-menu">
      <div class="sidebar-menu-logo" />
      <transition name="opacity">
        <div
          v-if="isAuthorized"
          class="sidebar-menu-navigation"
        >
          <div class="sidebar-menu-navigation-top">
            <NuxtLink
              tag="div"
              class="sidebar-menu-item"
              :to="{name: $routesNames.homeStatistics}"
            >
              <BaseIcon
                height="28"
                width="28"
              >
                <HomeIcon />
              </BaseIcon>
              <span class="sidebar-menu-item-title">{{ $t('main') }}</span>
            </NuxtLink>
            <NuxtLink
              tag="div"
              class="sidebar-menu-item"
              :to="{name: $routesNames.menuPlans}"
            >
              <BaseIcon
                height="28"
                width="28"
              >
                <MenuIcon />
              </BaseIcon>
              <span class="sidebar-menu-item-title">{{ $t('menu') }}</span>
            </NuxtLink>
            <NuxtLink
              tag="div"
              class="sidebar-menu-item"
              :to="{name: $routesNames.kitchenClients}"
            >
              <BaseIcon
                height="28"
                width="28"
              >
                <KitchenIcon />
              </BaseIcon>
              <span class="sidebar-menu-item-title">{{ $t('kitchen') }}</span>
            </NuxtLink>
            <NuxtLink
              tag="div"
              class="sidebar-menu-item"
              :to="{name: $routesNames.ordersOrders}"
            >
              <BaseIcon
                height="28"
                width="28"
              >
                <OrderIcon />
              </BaseIcon>
              <span class="sidebar-menu-item-title">{{ $t('orders') }}</span>
            </NuxtLink>
          </div>
          <div class="sidebar-menu-navigation-bottom">
            <NuxtLink
              tag="div"
              class="sidebar-menu-item"
              :to="{name: $routesNames.login}"
            >
              <BaseIcon
                height="28"
                width="28"
              >
                <BellIcon />
              </BaseIcon>
            </NuxtLink>
            <NuxtLink
              tag="div"
              class="sidebar-menu-item"
              :to="{name: $routesNames.settingsProfile}"
            >
              <BaseIcon
                height="28"
                width="28"
              >
                <SettingsIcon />
              </BaseIcon>
            </NuxtLink>
            <NuxtLink
              tag="div"
              class="sidebar-menu-item"
              :to="{name: $routesNames.login}"
            >
              <BaseIcon
                height="28"
                width="28"
              >
                <ExitIcon />
              </BaseIcon>
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
    <div class="sidebar-submenu" />
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
    components: {
      ExitIcon,
      SettingsIcon,
      OrderIcon,
      KitchenIcon,
      MenuIcon,
    },
    computed: {
      isAuthorized(): boolean {
        // TODO: tbd
        return this.$route.name !== this.$routesNames.login &&
          this.$route.name !== this.$routesNames.resetPassword &&
          this.$route.name !== this.$routesNames.register;
      },
    },
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
    display: flex;

    &-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: $sidebar-width;
      padding: $building-unit-x2_5 $building-unit-x0_5 $building-unit-x0_5;
      background: linear-gradient(176deg, #12b8c6 15%, #0e98a4 89%);

      &-logo {
        height: $logo-size;
        width: $logo-size;
        margin-bottom: $building-unit-x5;
        background: url('~assets/icons/logo.svg');
      }

      &-navigation {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
      }

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

        &.nuxt-link-exact-active,
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
  }
</style>
