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
            autocomplete="email"
            @keydown.native.enter="signIn"
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
        <FField
          class="password-field"
          :is-danger="$v.password.$error || isWrongCredentials"
          :label="$t('password')"
        >
          <FInput
            v-model="password"
            type="password"
            autocomplete="current-password"
            class="has-icon-right"
            :is-danger="$v.password.$error || isWrongCredentials"
            :icon-right="IconType.EYE_ICON"
            :is-icon-right-clickable="Boolean(password)"
            :placeholder="$t('passwordPlaceholder')"
            @input="resetLoginError"
            @keydown.native.enter="signIn"
            @blur="$v.password.$touch()"
          />
          <template
            v-if="$v.password.$error || isWrongCredentials"
            slot="message"
          >
            <p v-if="!$v.password.required">
              {{ $t('required') }}
            </p>
            <p v-if="isWrongCredentials">
              {{ $t('wrongPasswordOrEmail') }}
            </p>
          </template>
        </FField>
      </section>
      <section class="auth-page-form-addition">
        <FField class="remember-me-field">
          <BSwitch v-model="isRememberMe">
            {{ $t('rememberMe') }}
          </BSwitch>
        </FField>
        <NuxtLink
          class="reset-password-link is-icon"
          :to="$routesNames.resetPassword"
        >
          <BaseIcon>
            <ArrowRightIcon />
          </BaseIcon>
          {{ $t('resetPassword') }}
        </NuxtLink>
      </section>
      <section class="login-page-footer">
        <div class="columns">
          <div class="column">
            <button
              class="button is-primary is-auth-button is-login-button"
              :disabled="$v.$anyError"
              @click="signIn"
            >
              {{ $t('enter') }}
            </button>
          </div>
          <div class="column">
            <p>{{ $t('noAccountQuestion') }}</p>
            <NuxtLink :to="$routesNames.register">
              {{ $t('register') }}
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { email, required } from 'vuelidate/lib/validators';
  import { IconType } from '~/models/enums/IconType';
  import { LOGIN } from '~/store/action-types';
  import { LOGIN_IS_WRONG_CREDENTIALS } from '~/store/getter-types';
  import { UPDATE_LOGIN_ERROR } from '~/store/mutation-types';

  export default Vue.extend({
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        isRememberMe: false,
        IconType,
      };
    },
    computed: {
      isWrongCredentials(): boolean {
        return this.$store.getters[LOGIN_IS_WRONG_CREDENTIALS];
      },
    },
    methods: {
      signIn() {
        this.$v.$touch();

        if (this.$v.$invalid) {
          return;
        }

        this.$store.dispatch(LOGIN, { email: this.email, password: this.password })
          .then(() => {
            this.$router.push({ name: this.$routesNames.home.index });
          });
      },
      resetLoginError() {
        this.$store.commit(UPDATE_LOGIN_ERROR, null);
      },
    },
    validations: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';

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

    .reset-password-link {
      margin-bottom: $building-unit-x1_5;
    }
  }
</style>
