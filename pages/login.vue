<template>
  <div class="login-page">
    <div class="login-page-container">
      <section>
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
      </section>
      <section>
        <b-field :label="$t('emailAddress')">
          <b-input
            v-model="email"
            :placeholder="$t('emailAddressPlaceholder')"
          />
        </b-field>
        <b-field :label="$t('password')">
          <b-input
            v-model="password"
            :placeholder="$t('passwordPlaceholder')"
          />
        </b-field>
        <b-field>
          <b-switch>{{ $t('rememberMe') }}</b-switch>
        </b-field>
      </section>
      <section>
        <a href="/">
          <BaseIcon icon-name="write">
            <ArrowRightIcon />
          </BaseIcon>
          {{ $t('resetPassword') }}
        </a>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data () {
      return {
        email: '',
        password: '',
      };
    },
  });
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

    .login-subtitle {
      margin-bottom: 42px;
    }
  }
</style>
