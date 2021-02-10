<template>
  <div
    :class="{'is-danger': isDanger}"
    class="f-notification"
  >
    <span class="f-notification-icon">
      <BaseIcon>
        <component :is="iconComponent" />
      </BaseIcon>
    </span>
    <slot />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { ICON_COMPONENT_MAP } from '~/services/maps/IconComponentMap';
  import { IconType } from '~/models/enums/IconType';
  import InfoIcon from '~/components/icons/InfoIcon.vue';
  import CrossIcon from '~/components/icons/CrossIcon.vue';
  import LockIcon from '~/components/icons/LockIcon.vue';

  export default Vue.extend({
    components: {
      InfoIcon,
      CrossIcon,
      LockIcon,
    },
    props: {
      isDanger: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: '',
      },
    },
    computed: {
      iconComponent(): string {
        const iconComponent = ICON_COMPONENT_MAP[this.iconKey];
        return iconComponent || '';
      },
      iconKey(): IconType {
        if (this.icon) {
          return this.icon as IconType;
        }

        if (this.isDanger) {
          return IconType.CROSS_ICON;
        }

        return IconType.INFO_ICON;
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  $notification-width-small: 338px;
  $notification-width-medium: 400px;
  $notification-width-large: 552px;
  $notification-padding-left: 44px;

  .f-notification {
    position: relative;
    width: $notification-width-medium;
    padding: $building-unit $building-unit $building-unit $notification-padding-left;
    @include font-size(5);
    background-color: rgba($aqua, 0.07);
    border: solid 1px rgba($aqua-dark, 0.42);
    border-radius: $border-radius-small;

    &.is-medium {
      width: $notification-width-large;
    }

    &.is-large {
      width: $notification-width-large;
    }

    &.is-danger {
      background-color: rgba($red, 0.07);
      border-color: rgba($red, 0.42);

      .f-notification-icon {
        color: $red;
      }
    }

    &-icon {
      color: $aqua-dark;
      @include absolute-y-center;
      left: $building-unit;
    }
  }
</style>
