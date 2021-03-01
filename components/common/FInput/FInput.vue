<template>
  <div class="control f-control">
    <input
      v-if="type !== 'textarea'"
      ref="input"
      class="input f-input"
      :class="{'is-danger': isDanger}"
      :type="newType"
      :autocomplete="autocomplete"
      :value="value"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="onInput($event.target.value)"
      @blur="onBlur"
      @focus="onFocus"
    >
    <textarea
      v-else
      ref="textarea"
      class="textarea"
      :class="{'is-danger': isDanger}"
      :value="value"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />
    <span
      v-if="iconLeft"
      :class="{'is-clickable': isIconLeftClickable}"
      class="f-input-icon is-left"
      @click="iconLeftClick"
    >
      <BaseIcon
        :width="isIconLeftLarge ? 28 : 16"
        :height="isIconLeftLarge ? 28 : 16"
      >
        <component :is="iconLeftComponent" />
      </BaseIcon>
    </span>
    <span
      v-if="iconRight"
      :class="{'is-clickable': isIconRightClickable}"
      class="f-input-icon is-right"
      @click="iconRightClick"
    >
      <BaseIcon
        :width="isIconRightLarge ? 28 : 16"
        :height="isIconRightLarge ? 28 : 16"
      >
        <component :is="iconRightComponent" />
      </BaseIcon>
    </span>
    <transition name="opacity">
      <div
        v-if="$slots.hint && isFocused"
        class="hint-container"
      >
        <slot name="hint" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { IconType } from '~/models/enums/IconType';
  import { ICON_COMPONENT_MAP } from '~/services/maps/IconComponentMap';
  import EyeIcon from '~/components/icons/EyeIcon.vue';
  import SearchIcon from '~/components/icons/SearchIcon.vue';

  enum InputType {
    TEXT = 'text',
    PASSWORD = 'password'
  }

  export default Vue.extend({
    components: { EyeIcon, SearchIcon },
    props: {
      value: {
        type: [Number, String],
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: InputType.TEXT,
      },
      autocomplete: {
        type: String,
        default: 'on',
      },
      iconRight: {
        type: String,
        default: '',
      },
      iconLeft: {
        type: String,
        default: '',
      },
      isIconRightClickable: {
        type: Boolean,
        default: false,
      },
      isIconLeftClickable: {
        type: Boolean,
        default: false,
      },
      isIconRightLarge: {
        type: Boolean,
        default: false,
      },
      isIconLeftLarge: {
        type: Boolean,
        default: false,
      },
      isDanger: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isPasswordVisible: false,
        newType: this.type,
        isFocused: false,
        InputType,
      };
    },
    computed: {
      iconRightComponent(): string {
        const iconComponent = ICON_COMPONENT_MAP[this.iconRight as IconType];

        return iconComponent || '';
      },
      iconLeftComponent(): string {
        const iconComponent = ICON_COMPONENT_MAP[this.iconLeft as IconType];

        return iconComponent || '';
      },
    },
    methods: {
      onInput(value: string | number) {
        this.$emit('input', value);
      },
      onBlur() {
        this.$emit('blur');
        this.isFocused = false;
      },
      onFocus() {
        this.$emit('focus');
        this.isFocused = true;
      },
      iconRightClick() {
        if (this.type === InputType.PASSWORD) {
          this.togglePasswordVisibility();
        } else if (this.isIconRightClickable) {
          this.$emit('right-icon-click');
        }
      },
      iconLeftClick() {
        this.$emit('left-icon-click');
      },
      togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
        this.newType = this.isPasswordVisible ? InputType.TEXT : InputType.PASSWORD;

        this.$nextTick(() => {
          this.focus();
        });
      },
      focus() {
        const input = this.$refs.input as HTMLElement;

        if (!input) {
          return;
        }

        input.focus();
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';
  @import '~assets/styles/bulma/bulma-overrides-variables';

  .f-control {
    display: flex;
    position: relative;

    &.has-icon-right {
      .f-input {
        padding-right: 2 * $control-padding-horizontal + $default-icon-size;
      }

      &.is-large {
        .f-input {
          padding-right: 2 * $control-padding-horizontal + $large-icon-size;
        }
      }
    }

    &.has-icon-left {
      .f-input {
        padding-left: 2 * $control-padding-horizontal + $default-icon-size;
      }

      &.is-large {
        .f-input {
          padding-left: 2 * $control-padding-horizontal + $large-icon-size;
        }
      }
    }

    .f-input-icon {
      @include absolute-y-center;

      color: $gray-193;
      display: inline-flex;
      transition: $transition-default;
      user-select: none;

      &.is-right {
        right: $control-padding-horizontal;
      }

      &.is-left {
        left: $control-padding-horizontal;
      }

      &.is-clickable {
        color: $aqua-dark;
        cursor: pointer;
        pointer-events: auto;
      }
    }

    .hint-container {
      left: calc(100% + #{$building-unit-x1_5});
      position: absolute;
      top: 4px;
    }
  }

</style>
