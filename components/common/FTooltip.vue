<template>
  <BTooltip
    ref="tooltip"
    :label="text"
    :position="currentPosition"
    :multilined="multilined"
    always
    class="f-tooltip"
  >
    <slot />
  </BTooltip>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      text: {
        type: String,
        default: '',
      },
      position: {
        type: String,
        default: 'is-right',
      },
      multilined: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isRight: true,
        currentPosition: this.position,
        initialPosition: {
          left: 0,
          right: 0,
        },
      };
    },
    mounted() {
      this.setInitial();
      this.setPosition();
      window.addEventListener('resize', this.setPosition);
    },
    destroyed() {
      window.removeEventListener('resize', this.setPosition);
    },
    methods: {
      setPosition() {
        if (this.isOutsideLeft()) {
          this.currentPosition = 'is-right';
        } else if (this.isOutsideRight()) {
          this.currentPosition = 'is-left';
        } else {
          this.currentPosition = this.position;
        }
      },
      getTooltipContentPosition(): ClientRect {
        const tooltipContent = (this.$refs.tooltip as Vue).$el.children.item(0) as Element;

        return tooltipContent.getBoundingClientRect();
      },
      getTooltipPosition(): ClientRect {
        return (this.$refs.tooltip as Vue).$el.getBoundingClientRect();
      },
      isOutsideLeft(): boolean {
        return this.getTooltipPosition().left + this.initialPosition.left < 0;
      },
      isOutsideRight(): boolean {
        if (!document.documentElement) {
          return false;
        }

        return this.getTooltipPosition().right + this.initialPosition.right >
          document.documentElement.clientWidth;
      },
      setInitial() {
        this.initialPosition.left = this.getTooltipContentPosition().left - this.getTooltipPosition().left;
        this.initialPosition.right = this.getTooltipContentPosition().right - this.getTooltipPosition().right;
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';

  .f-tooltip {
    ::v-deep .tooltip-content,
    &:before {
      transition: $transition-default;
      visibility: hidden;
      opacity: 0;
    }

    &:hover {
      ::v-deep .tooltip-content,
      &:before {
        visibility: visible;
        opacity: 1;
      }
    }
  }
</style>
