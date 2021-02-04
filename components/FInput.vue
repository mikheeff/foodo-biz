<template>
  <div class="control f-control">
    <input
      v-if="type !== 'textarea'"
      ref="input"
      class="input f-input"
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
      :value="value"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />
    <span
      v-if="iconRight"
      :class="{'is-clickable': isIconRightClickable}"
      class="f-input-icon-right"
      @click="iconClick"
    >
      <BaseIcon>
        <component :is="iconRightComponent" />
      </BaseIcon>
    </span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { IconType } from '~/models/enums/IconType';
  import { ICON_COMPONENT_MAP } from '~/services/maps/IconComponentMap';
  import EyeIcon from '~/components/icons/EyeIcon.vue';

  enum InputType {
    TEXT = 'text',
    PASSWORD = 'password'
  }

  export default Vue.extend({
    components: { EyeIcon },
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
      isIconRightClickable: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isPasswordVisible: false,
        newType: this.type,
        InputType,
      };
    },
    computed: {
      iconRightComponent(): string {
        const iconComponent = ICON_COMPONENT_MAP[this.iconRight as IconType];

        return iconComponent || '';
      },
    },
    methods: {
      onInput(value: string | number) {
        this.$emit('input', value);
      },
      onBlur() {
        this.$emit('blur');
      },
      onFocus() {
        this.$emit('focus');
      },
      iconClick() {
        if (this.type === InputType.PASSWORD) {
          this.togglePasswordVisibility();
        } else if (this.isIconRightClickable) {
          this.$emit('right-icon-click');
        }
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
    &.has-icon-right {
      .f-input {
        padding-right: 2 * $control-padding-horizontal + $default-icon-size;
      }
    }

    .f-input-icon-right {
      @include absolute-y-center;
      display: inline-flex;
      right: $control-padding-horizontal;
      color: $gray-193;
      user-select: none;

      &.is-clickable {
        pointer-events: auto;
        cursor: pointer;
      }
    }
  }

</style>
