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
            <SidebarMenuItem
              :route-name="$routesNames.home.index"
              :title="$t('main')"
            >
              <HomeIcon />
            </SidebarMenuItem>
            <SidebarMenuItem
              :route-name="$routesNames.menu.index"
              :title="$t('menu')"
            >
              <MenuIcon />
            </SidebarMenuItem>
            <SidebarMenuItem
              :route-name="$routesNames.kitchen.index"
              :title="$t('kitchen')"
            >
              <KitchenIcon />
            </SidebarMenuItem>
            <SidebarMenuItem
              :route-name="$routesNames.orders.index"
              :title="$t('orders')"
            >
              <OrderIcon />
            </SidebarMenuItem>
          </div>
          <div class="sidebar-menu-navigation-bottom">
            <!-- todo: notification button action-->
            <SidebarMenuItem :route-name="$routesNames.login">
              <BellIcon />
            </SidebarMenuItem>
            <SidebarMenuItem :route-name="$routesNames.settings.index">
              <SettingsIcon />
            </SidebarMenuItem>
            <SidebarMenuItem :route-name="$routesNames.login">
              <ExitIcon />
            </SidebarMenuItem>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade-horizontal">
      <div
        v-if="isAuthorized"
        :class="{'is-expanded': isSubmenuExpanded}"
        class="sidebar-submenu"
      >
        <transition
          mode="out-in"
          name="opacity"
        >
          <div
            v-if="isCurrentRouteChildOfRoot($routesNames.home.index)"
            key="home"
            class="sidebar-submenu-items"
          >
            <div class="sidebar-submenu-header">
              <transition name="opacity">
                <h1
                  v-if="isSubmenuExpanded"
                  class="title is-size-4"
                >
                  {{ $t('main') }}
                </h1>
              </transition>
            </div>
            <SidebarSubmenuItem
              :route-name="$routesNames.home.statistics"
              :title="$t('statistics')"
              :is-title-shown="isSubmenuExpanded"
            >
              <StatisticsIcon />
            </SidebarSubmenuItem>
            <SidebarSubmenuItem
              :route-name="$routesNames.home.incomeExpenses"
              :title="$t('incomeAndExpenses')"
              :is-title-shown="isSubmenuExpanded"
              :icon-width="29"
            >
              <IncomeAndExpensesIcon />
            </SidebarSubmenuItem>
            <SidebarSubmenuItem
              :route-name="$routesNames.home.analytics"
              :title="$t('analytics')"
              :is-title-shown="isSubmenuExpanded"
              :icon-width="29"
            >
              <AnalyticsIcon />
            </SidebarSubmenuItem>
          </div>
          <div
            v-else-if="isCurrentRouteChildOfRoot($routesNames.menu.index)"
            key="menu"
            class="sidebar-submenu-items"
          >
            <div class="sidebar-submenu-header">
              <transition name="opacity">
                <h1
                  v-if="isSubmenuExpanded"
                  class="title is-size-4"
                >
                  {{ $t('menu') }}
                </h1>
              </transition>
            </div>
            <SidebarSubmenuItem
              :route-name="$routesNames.menu.plans"
              :title="$t('plans')"
              :is-title-shown="isSubmenuExpanded"
            >
              <PlansIcon />
            </SidebarSubmenuItem>
            <SidebarSubmenuItem
              :route-name="$routesNames.menu.recipes"
              :title="$t('recipes')"
              :is-title-shown="isSubmenuExpanded"
              :icon-width="29"
            >
              <MenuIcon />
            </SidebarSubmenuItem>
            <SidebarSubmenuItem
              :route-name="$routesNames.menu.ingredients"
              :title="$t('ingredients')"
              :is-title-shown="isSubmenuExpanded"
            >
              <IngredientIcon />
            </SidebarSubmenuItem>
          </div>
          <div
            v-else-if="isCurrentRouteChildOfRoot($routesNames.kitchen.index)"
            key="kitchen"
            class="sidebar-submenu-items"
          >
            <div class="sidebar-submenu-header">
              <transition name="opacity">
                <h1
                  v-if="isSubmenuExpanded"
                  class="title is-size-4"
                >
                  {{ $t('kitchen') }}
                </h1>
              </transition>
            </div>
            <SidebarSubmenuItem
              :route-name="$routesNames.kitchen.clients"
              :title="$t('clients')"
              :is-title-shown="isSubmenuExpanded"
            >
              <CustomersIcon />
            </SidebarSubmenuItem>
            <SidebarSubmenuItem
              :route-name="$routesNames.kitchen.settings"
              :title="$t('kitchenSetting')"
              :is-title-shown="isSubmenuExpanded"
              :icon-width="29"
            >
              <KitchenSettingsIcon />
            </SidebarSubmenuItem>
            <SidebarSubmenuItem
              :route-name="$routesNames.kitchen.promoCodes"
              :title="$t('promoCodes')"
              :is-title-shown="isSubmenuExpanded"
            >
              <PromoCodesIcon />
            </SidebarSubmenuItem>
          </div>
          <div
            v-else-if="isCurrentRouteChildOfRoot($routesNames.orders.index)"
            key="orders"
            class="sidebar-submenu-items"
          >
            <div class="sidebar-submenu-header">
              <transition name="opacity">
                <h1
                  v-if="isSubmenuExpanded"
                  class="title is-size-4"
                >
                  {{ $t('orders') }}
                </h1>
              </transition>
            </div>
            <SidebarSubmenuItem
              :route-name="$routesNames.orders.index"
              :title="$t('orders')"
              :is-title-shown="isSubmenuExpanded"
            >
              <OrderIcon />
            </SidebarSubmenuItem>
            <SidebarSubmenuItem
              :route-name="$routesNames.orders.feedback"
              :title="$t('feedback')"
              :is-title-shown="isSubmenuExpanded"
              :icon-width="29"
            >
              <FeedbackIcon />
            </SidebarSubmenuItem>
          </div>
          <div
            v-else-if="isCurrentRouteChildOfRoot($routesNames.settings.index)"
            key="settings"
            class="sidebar-submenu-items"
          >
            <div class="sidebar-submenu-header">
              <transition name="opacity">
                <h1
                  v-if="isSubmenuExpanded"
                  class="title is-size-4"
                >
                  {{ $t('settings') }}
                </h1>
              </transition>
            </div>
            <SidebarSubmenuItem
              :route-name="$routesNames.settings.profile"
              :title="$t('profileSettings')"
              :is-title-shown="isSubmenuExpanded"
            >
              <ProfileSettingsIcon />
            </SidebarSubmenuItem>
            <SidebarSubmenuItem
              :route-name="$routesNames.settings.subscriptionAndPayment"
              :title="$t('subscriptionAndPayment')"
              :is-title-shown="isSubmenuExpanded"
              :icon-width="29"
            >
              <SubscriptionIcon />
            </SidebarSubmenuItem>
            <SidebarSubmenuItem
              :route-name="$routesNames.settings.company"
              :title="$t('companySettings')"
              :is-title-shown="isSubmenuExpanded"
              :icon-width="29"
            >
              <CompanyIcon />
            </SidebarSubmenuItem>
            <SidebarSubmenuItem
              :route-name="$routesNames.settings.mailbox"
              :title="$t('mailboxSettings')"
              :is-title-shown="isSubmenuExpanded"
              :icon-width="29"
            >
              <MailboxSettingsIcon />
            </SidebarSubmenuItem>
          </div>
        </transition>
        <span
          class="sidebar-submenu-expander"
          @click="toggleSidebarSubmenu"
        >
          <BaseIcon class="sidebar-submenu-expander-icon">
            <ArrowRightIcon />
          </BaseIcon>
        </span>
      </div>
    </transition>
  </aside>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        isSubmenuExpanded: true,
      };
    },
    computed: {
      isAuthorized(): boolean {
        // TODO: tbd
        return this.$route.name !== this.$routesNames.login &&
          this.$route.name !== this.$routesNames.resetPassword &&
          this.$route.name !== this.$routesNames.register;
      },
    },
    methods: {
      isCurrentRouteChildOfRoot(routeName: string) {
        const route = this.$router.resolve({ name: routeName });
        return this.$route.fullPath.startsWith(route.href);
      },
      toggleSidebarSubmenu() {
        this.isSubmenuExpanded = !this.isSubmenuExpanded;
      },
    },
    meta: {
      hey: 'get',
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  $sidebar-menu-width: 96px;
  $sidebar-submenu-width: 96px;
  $sidebar-submenu-width-expanded: 250px;
  $logo-size: 54px;
  $menu-item-width: 82px;
  $submenu-expander-size: 24px;
  $submenu-expander-top: 51px;
  $submenu-padding: 0 34px;

  .sidebar {
    display: flex;

    &-menu {
      align-items: center;
      background: linear-gradient(176deg, #12b8c6 15%, #0e98a4 89%);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: $building-unit-x2_5 $building-unit-x0_5 $building-unit-x0_5;
      width: $sidebar-menu-width;

      &-logo {
        background: url('~assets/icons/logo.svg');
        height: $logo-size;
        margin-bottom: $building-unit-x5;
        width: $logo-size;
      }

      &-navigation {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;
      }

      &-item {
        align-items: center;
        border-radius: $building-unit-x1_5;
        color: $gray-233;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        padding: $building-unit $building-unit_x0_5;
        transition: $transition-default;
        width: $menu-item-width;

        svg:not(:only-child) {
          margin-bottom: $building-unit;
        }

        &.is-active,
        &:hover {
          background-color: rgba($gray-53, 0.42);
          color: $white;
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
      background-color: $white;
      box-shadow: $shadow-2;
      display: flex;
      flex-direction: column;
      padding: $submenu-padding;
      position: relative;
      transition: width 0.2s;
      width: $sidebar-submenu-width;

      .title {
        font-weight: $font-weight-semi-bold;
        letter-spacing: -0.2px;
        line-height: $lh-5;
        margin-bottom: 0;
      }

      &-header {
        align-items: center;
        display: flex;
        height: $building-unit-x9;
      }

      &-expander {
        align-items: center;
        background-color: $white;
        border-radius: 50%;
        box-shadow: $shadow-1;
        color: $gray-193;
        cursor: pointer;
        display: flex;
        height: $submenu-expander-size;
        justify-content: center;
        left: calc(100% - 3 / 4 * #{$submenu-expander-size});
        position: absolute;
        top: $submenu-expander-top;
        transition: $transition-default;
        width: $submenu-expander-size;

        &-icon {
          transition: $transition-default;
        }
      }

      &.is-expanded {
        width: $sidebar-submenu-width-expanded;

        .sidebar-submenu-expander-icon {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
