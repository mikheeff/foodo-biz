<template>
  <div class="f-field field">
    <label
      v-if="label"
      class="label"
    >
      <slot
        v-if="$slots.label"
        name="label"
      />
      <template v-else>{{ label }}</template>
    </label>
    <slot />
    <p
      v-if="$slots.message"
      class="help"
      :class="{'is-danger': isDanger}"
    >
      <slot name="message" />
    </p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      isDanger: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: '',
      },
    },
  });
</script>
