<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    role="presentation"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      width: {
        type: [Number, String],
        default: 16,
      },
      height: {
        type: [Number, String],
        default: 16,
      },
      iconColor: {
        type: String,
        default: 'currentColor',
      },
    },
  });
</script>
