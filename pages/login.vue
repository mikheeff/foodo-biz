<template>
  <div class="login-page">
    <div class="login-page-container">
      <i18n
        path="welcomeTitle"
        tag="h2"
        class="title is-size-1"
      >
        <span class="app-name">{{ $t('foodo') }}</span>
      </i18n>
      <p class="subtitle login-subtitle">
        {{ $t('welcomeText') }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

  .login-page {
    padding: 140px 70px;
    width: 100%;

    &-container {
      max-width: 530px;
    }

    .app-name {
      color: $dark-aqua;
    }
  }
</style>
