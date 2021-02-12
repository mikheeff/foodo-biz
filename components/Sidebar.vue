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
              :to="{name: $routesNames.home}"
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
              :to="{name: $routesNames.menu}"
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
              :to="{name: $routesNames.kitchen}"
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
              :to="{name: $routesNames.orders}"
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
              :to="{name: $routesNames.settings}"
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
    <div class="sidebar-submenu">
      <div class="sidebar-submenu-header">
        <h1 class="title is-size-4">
          {{ $t('main') }}
        </h1>
      </div>
      <div
        v-if="isHomeRoute"
        class="sidebar-submenu-items"
      >
        <NuxtLink
          :to="{name: $routesNames.home}"
          tag="div"
          class="sidebar-submenu-item"
        >
          <BaseIcon
            height="28"
            width="28"
          >
            <StatisticsIcon />
          </BaseIcon>
          <span>{{ $t('statistics') }}</span>
        </NuxtLink>
        <NuxtLink
          :to="{name: $routesNames.homeIncomeExpenses}"
          tag="div"
          class="sidebar-submenu-item"
        >
          <BaseIcon
            height="28"
            width="29"
          >
            <IncomeAndExpensesIcon />
          </BaseIcon>
          <span>{{ $t('incomeAndExpenses') }}</span>
        </NuxtLink>
        <NuxtLink
          :to="{name: $routesNames.homeAnalytics}"
          tag="div"
          class="sidebar-submenu-item"
        >
          <BaseIcon
            height="28"
            width="29"
          >
            <AnalyticsIcon />
          </BaseIcon>
          <span>{{ $t('analytics') }}</span>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
  import Vue from 'vue';
  import IncomeAndExpensesIcon from '~/components/icons/IncomeAndExpensesIcon.vue';
  import AnalyticsIcon from '~/components/icons/AnalyticsIcon.vue';

  export default Vue.extend({
    components: { AnalyticsIcon, IncomeAndExpensesIcon },
    computed: {
      isAuthorized(): boolean {
        // TODO: tbd
        return this.$route.name !== this.$routesNames.login &&
          this.$route.name !== this.$routesNames.resetPassword &&
          this.$route.name !== this.$routesNames.register;
      },
      isHomeRoute() {
        return true;
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  $sidebar-menu-width: 96px;
  $sidebar-submenu-width-expanded: 250px;
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
      width: $sidebar-menu-width;
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

        &.is-active,
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

    &-submenu {
      display: flex;
      flex-direction: column;
      width: $sidebar-submenu-width-expanded;
      background-color: $white;
      box-shadow: 1px 0 2px 0 rgba($gray-190, 0.35);
      padding: 0 $building-unit_x2;

      &-item {
        transition: color $transition-default;
        cursor: pointer;
        display: flex;
        align-items: center;
        color: $gray;
        @include font-size(6);

        &.is-exact-active {
          color: $aqua-dark;
          letter-spacing: -0.2px;
        }

        & + & {
          margin-top: $building-unit-x2;
        }

        svg {
          margin-right: $building-unit;
        }
      }

      .title {
        line-height: $lh-5;
        letter-spacing: -0.2px;
        font-weight: $font-weight-semi-bold;
      }

      &-header {
        display: flex;
        height: $building-unit-x9;
        align-items: center;
      }
    }
  }
</style>
