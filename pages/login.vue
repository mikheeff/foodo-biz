<template>
  <div class="page auth-page login-page">
    <div class="auth-page-container">
      <section class="auth-page-header">
        <i18n
          path="welcomeTitle"
          tag="h2"
          class="title is-size-1"
        >
          <br>
          <span class="app-name">{{ $t('foodo') }}</span>
        </i18n>
        <p class="subtitle">
          {{ $t('welcomeText') }}
        </p>
      </section>
      <section class="auth-page-form">
        <FField
          class="email-field"
          :is-danger="$v.email.$error"
          :label="$t('emailAddress')"
        >
          <FInput
            v-model="email"
            type="email"
            :is-danger="$v.email.$error"
            :placeholder="$t('emailAddressPlaceholder')"
            @blur="$v.email.$touch()"
          />
          <template
            v-if="$v.email.$error"
            slot="message"
          >
            <p v-if="!$v.email.required">
              {{ $t('required') }}
            </p>
            <p v-if="!$v.email.email">
              {{ $t('invalidEmail') }}
            </p>
          </template>
        </FField>
        <BField
          class="password-field"
          :label="$t('password')"
        >
          <FInput
            v-model="password"
            type="password"
            class="has-icon-right"
            :icon-right="IconType.EYE_ICON"
            :is-icon-right-clickable="Boolean(password)"
            :placeholder="$t('passwordPlaceholder')"
          />
        </BField>
        <BField class="remember-me-field">
          <BSwitch>{{ $t('rememberMe') }}</BSwitch>
        </BField>
        <NuxtLink
          class="is-icon"
          :to="$routesNames.resetPassword"
        >
          <BaseIcon>
            <ArrowRightIcon />
          </BaseIcon>
          {{ $t('resetPassword') }}
        </NuxtLink>
      </section>
      <section class="login-page-footer columns">
        <div class="column">
          <button class="button is-primary is-auth-button is-login-button">
            {{ $t('enter') }}
          </button>
        </div>
        <div class="column">
          <p>{{ $t('noAccountQuestion') }}</p>
          <NuxtLink :to="$routesNames.index">
            {{ $t('register') }}
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { email, required } from 'vuelidate/lib/validators';
  import { IconType } from '~/models/enums/IconType';

  export default Vue.extend({
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        IconType,
      };
    },
    validations: {
      email: {
        required,
        email,
      },
    },
  });
</script>

<style lang="scss" scoped>
@import '~assets/styles/utils/variables';

$login-button-margin-right: 10px;

  .login-page {

    .app-name {
      color: $aqua-dark;
    }

    .password-field {
      margin-bottom: $building-unit-x2;
    }

    .remember-me-field {
      margin-bottom: $building-unit-x3;
    }

    .is-login-button {
      margin-right: $login-button-margin-right;
    }
  }
</style>
