<template>
  <div class="page login-page">
    <div class="login-page-container">
      <section class="login-page-header">
        <i18n
          path="welcomeTitle"
          tag="h2"
          class="title is-size-1"
        >
          <br>
          <span class="app-name">{{ $t('foodo') }}</span>
        </i18n>
        <p class="subtitle login-subtitle">
          {{ $t('welcomeText') }}
        </p>
      </section>
      <section class="login-page-form">
        <FField
          class="login-field"
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
          <button class="button is-primary is-enter-button">
            {{ $t('enter') }}
          </button>
        </div>
        <div class="column">
          <span>{{ $t('noAccountQuestion') }}</span>
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

  .login-page {
    padding: $building-unit-x10 $building-unit-x5;
    width: 100%;

    &-container {
      max-width: 530px;
    }

    .app-name {
      color: $aqua-dark;
    }

    .login-subtitle {
      margin-bottom: $building-unit-x3;
    }

    .login-page-form {
      margin-bottom: $building-unit-x1_5;
    }

    .is-enter-button {
      min-width: 292px;
      margin-right: 10px;
    }

    .password-field {
      margin-bottom: $building-unit-x2;
    }

    .remember-me-field {
      margin-bottom: $building-unit-x3;
    }
  }
</style>
