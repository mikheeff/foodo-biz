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
              :to="{name: $routesNames.home.index}"
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
              :to="{name: $routesNames.menu.index}"
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
              :to="{name: $routesNames.kitchen.index}"
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
              :to="{name: $routesNames.orders.index}"
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
            <!-- todo: notification button action-->
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
              :to="{name: $routesNames.settings.index}"
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
    <div
      v-if="isAuthorized"
      class="sidebar-submenu"
    >
      <div class="sidebar-submenu-header">
        <h1 class="title is-size-4">
          {{ $t('main') }}
        </h1>
      </div>
      <transition
        mode="out-in"
        name="opacity"
      >
        <div
          v-if="isCurrentRouteChildOfRoot($routesNames.home.index)"
          key="home"
          class="sidebar-submenu-items"
        >
          <NuxtLink
            :to="{name: $routesNames.home.statistics}"
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
            :to="{name: $routesNames.home.incomeExpenses}"
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
            :to="{name: $routesNames.home.analytics}"
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
        <div
          v-else-if="isCurrentRouteChildOfRoot($routesNames.menu.index)"
          key="menu"
          class="sidebar-submenu-items"
        >
          <NuxtLink
            :to="{name: $routesNames.menu.plans}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="28"
            >
              <PlansIcon />
            </BaseIcon>
            <span>{{ $t('plans') }}</span>
          </NuxtLink>
          <NuxtLink
            :to="{name: $routesNames.menu.recipes}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="29"
            >
              <MenuIcon />
            </BaseIcon>
            <span>{{ $t('recipes') }}</span>
          </NuxtLink>
          <NuxtLink
            :to="{name: $routesNames.menu.ingredients}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="28"
            >
              <IngredientIcon />
            </BaseIcon>
            <span>{{ $t('ingredients') }}</span>
          </NuxtLink>
        </div>
        <div
          v-else-if="isCurrentRouteChildOfRoot($routesNames.kitchen.index)"
          key="kitchen"
          class="sidebar-submenu-items"
        >
          <NuxtLink
            :to="{name: $routesNames.kitchen.clients}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="28"
            >
              <CustomersIcon />
            </BaseIcon>
            <span>{{ $t('clients') }}</span>
          </NuxtLink>
          <NuxtLink
            :to="{name: $routesNames.kitchen.settings}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="29"
            >
              <KitchenSettingsIcon />
            </BaseIcon>
            <span>{{ $t('kitchenSetting') }}</span>
          </NuxtLink>
          <NuxtLink
            :to="{name: $routesNames.kitchen.promoCodes}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="28"
            >
              <PromoCodesIcon />
            </BaseIcon>
            <span>{{ $t('promoCodes') }}</span>
          </NuxtLink>
        </div>
        <div
          v-else-if="isCurrentRouteChildOfRoot($routesNames.orders.index)"
          key="orders"
          class="sidebar-submenu-items"
        >
          <NuxtLink
            :to="{name: $routesNames.orders.index}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="28"
            >
              <OrderIcon />
            </BaseIcon>
            <span>{{ $t('orders') }}</span>
          </NuxtLink>
          <NuxtLink
            :to="{name: $routesNames.orders.feedback}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="29"
            >
              <FeedbackIcon />
            </BaseIcon>
            <span>{{ $t('feedback') }}</span>
          </NuxtLink>
        </div>
        <div
          v-else-if="isCurrentRouteChildOfRoot($routesNames.settings.index)"
          key="settings"
          class="sidebar-submenu-items"
        >
          <NuxtLink
            :to="{name: $routesNames.settings.profile}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="28"
            >
              <ProfileSettingsIcon />
            </BaseIcon>
            <span>{{ $t('profileSettings') }}</span>
          </NuxtLink>
          <NuxtLink
            :to="{name: $routesNames.settings.subscriptionAndPayment}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="29"
            >
              <SubscriptionIcon />
            </BaseIcon>
            <span>{{ $t('subscriptionAndPayment') }}</span>
          </NuxtLink>
          <NuxtLink
            :to="{name: $routesNames.settings.company}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="29"
            >
              <CompanyIcon />
            </BaseIcon>
            <span>{{ $t('companySettings') }}</span>
          </NuxtLink>
          <NuxtLink
            :to="{name: $routesNames.settings.mailbox}"
            tag="div"
            class="sidebar-submenu-item"
          >
            <BaseIcon
              height="28"
              width="29"
            >
              <MailboxSettingsIcon />
            </BaseIcon>
            <span>{{ $t('mailboxSettings') }}</span>
          </NuxtLink>
        </div>
      </transition>
    </div>
  </aside>
</template>

<script lang="ts">
  import Vue from 'vue';
  import OrderIcon from '~/components/icons/OrderIcon.vue';
  import FeedbackIcon from '~/components/icons/FeedbackIcon.vue';
  import ProfileSettingsIcon from '~/components/icons/ProfileSettingsIcon.vue';
  import CompanyIcon from '~/components/icons/CompanyIcon.vue';
  import SubscriptionIcon from '~/components/icons/SubscriptionIcon.vue';
  import MailboxSettingsIcon from '~/components/icons/MailboxSettingsIcon.vue';

  export default Vue.extend({
    components: { MailboxSettingsIcon, SubscriptionIcon, CompanyIcon, ProfileSettingsIcon, FeedbackIcon, OrderIcon },
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
