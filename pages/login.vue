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
        <BField :label="$t('emailAddress')">
          <b-input
            v-model="email"
            :placeholder="$t('emailAddressPlaceholder')"
          />
        </BField>
        <BField :label="$t('password')">
          <BInput
            v-model="password"
            :placeholder="$t('passwordPlaceholder')"
          />
        </BField>
        <BField>
          <BSwitch>{{ $t('rememberMe') }}</BSwitch>
        </BField>
      </section>
      <section>
        <NuxtLink :to="$routesNames.resetPassword">
          <BaseIcon icon-name="write">
            <ArrowRightIcon />
          </BaseIcon>
          {{ $t('resetPassword') }}
        </NuxtLink>
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
